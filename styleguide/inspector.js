(function () {
  'use strict';

  // ---- Constants ----
  var INHERITED_PROPS = [
    'color', 'font-family', 'font-size', 'font-weight',
    'line-height', 'letter-spacing', 'text-transform'
  ];
  var CATEGORY_ORDER = [
    'Typography', 'Color', 'Spacing', 'Border Radius',
    'Surface', 'Measure', 'Map', 'Accessibility'
  ];
  var DEBOUNCE_MS = 16;

  // ---- State ----
  var isActive = false;
  var currentTarget = null;
  var hoverTimeout = null;
  var hideTimeout = null;
  var tooltipEl = null;
  var isInsideTooltip = false;
  var tokenCatalog = null; // Map<tokenName, { value, category }>
  var ruleIndex = null;    // Array<{ selector, tokens: [{prop, name}] }>

  // ---- DOM refs ----
  var toggleBtn = document.getElementById('inspect-toggle');
  var appContent = document.getElementById('app-content');

  if (!toggleBtn || !appContent) return;

  // ===========================================================================
  //  1. Token Catalog — parse :root custom properties from stylesheets
  // ===========================================================================

  function categorize(name) {
    if (name.startsWith('--space-'))           return 'Spacing';
    if (name.startsWith('--radius-'))          return 'Border Radius';
    if (name.startsWith('--color-'))           return 'Color';
    if (name.startsWith('--font-family'))      return 'Typography';
    if (name.startsWith('--font-size'))        return 'Typography';
    if (name.startsWith('--font-weight'))      return 'Typography';
    if (name.startsWith('--line-height'))      return 'Typography';
    if (name.startsWith('--letter-spacing'))   return 'Typography';
    if (name.startsWith('--text-wrap'))        return 'Typography';
    if (name.startsWith('--measure-'))         return 'Measure';
    if (name.startsWith('--map-label-'))       return 'Map';
    if (name.startsWith('--touch-target-'))    return 'Accessibility';
    if (name.startsWith('--font-size-minimum')) return 'Accessibility';
    return 'Other';
  }

  function buildTokenCatalog() {
    var catalog = {};
    var rootStyle = getComputedStyle(document.documentElement);
    var sheets = document.styleSheets;

    function walkCatalogRules(rules) {
      for (var r = 0; r < rules.length; r++) {
        var rule = rules[r];
        if (rule.type === CSSRule.IMPORT_RULE) {
          if (rule.styleSheet) {
            try { walkCatalogRules(rule.styleSheet.cssRules); } catch (e) {}
          }
          continue;
        }
        if (rule.type !== CSSRule.STYLE_RULE) continue;
        if (rule.selectorText !== ':root') continue;

        var text = rule.cssText;
        var re = /(--[\w-]+)\s*:/g;
        var m;
        while ((m = re.exec(text)) !== null) {
          var name = m[1];
          if (!catalog[name]) {
            var resolved = rootStyle.getPropertyValue(name).trim();
            catalog[name] = { value: resolved, category: categorize(name) };
          }
        }
      }
    }

    for (var s = 0; s < sheets.length; s++) {
      var rules;
      try { rules = sheets[s].cssRules; } catch (e) { continue; }
      if (!rules) continue;
      walkCatalogRules(rules);
    }
    return catalog;
  }

  // ===========================================================================
  //  2. Rule Index — map CSS selectors to their var(--*) references
  // ===========================================================================

  function extractVarRefs(cssText) {
    var refs = [];
    // Strip selector and braces to get declarations only
    var inner = cssText.replace(/^[^{]*\{/, '').replace(/\}\s*$/, '');
    var decls = inner.split(';');
    for (var i = 0; i < decls.length; i++) {
      var decl = decls[i].trim();
      if (!decl || decl.indexOf('var(--') === -1) continue;

      var colonIdx = decl.indexOf(':');
      if (colonIdx === -1) continue;
      var prop = decl.substring(0, colonIdx).trim();

      var varRe = /var\((--[\w-]+)/g;
      var vm;
      while ((vm = varRe.exec(decl)) !== null) {
        refs.push({ prop: prop, name: vm[1] });
      }
    }
    return refs;
  }

  function walkRules(rules, index) {
    for (var r = 0; r < rules.length; r++) {
      var rule = rules[r];

      // Skip @media (prefers-color-scheme: dark)
      if (rule.type === CSSRule.MEDIA_RULE) {
        if (rule.conditionText && rule.conditionText.indexOf('prefers-color-scheme') !== -1) continue;
        walkRules(rule.cssRules, index);
        continue;
      }

      // Walk @import rules
      if (rule.type === CSSRule.IMPORT_RULE) {
        if (rule.styleSheet) {
          try { walkRules(rule.styleSheet.cssRules, index); } catch (e) {}
        }
        continue;
      }

      // Skip @keyframes
      if (rule.type === CSSRule.KEYFRAMES_RULE) continue;

      if (rule.type !== CSSRule.STYLE_RULE) continue;
      if (rule.selectorText === ':root') continue;

      var text = rule.cssText;
      if (text.indexOf('var(--') === -1) continue;

      var tokens = extractVarRefs(text);
      if (tokens.length === 0) continue;

      // Split comma-separated selectors
      var selectors = rule.selectorText.split(',');
      for (var si = 0; si < selectors.length; si++) {
        var sel = selectors[si].trim();
        if (sel) {
          index.push({ selector: sel, tokens: tokens });
        }
      }
    }
  }

  function buildRuleIndex() {
    var index = [];
    var sheets = document.styleSheets;
    for (var s = 0; s < sheets.length; s++) {
      var rules;
      try { rules = sheets[s].cssRules; } catch (e) { continue; }
      if (!rules) continue;
      walkRules(rules, index);
    }
    return index;
  }

  // ===========================================================================
  //  3. Resolve tokens for a specific element
  // ===========================================================================

  function getTokensForElement(el) {
    var found = {}; // prop -> { name, inherited }

    // A. Inline styles
    var inlineStyle = el.getAttribute('style');
    if (inlineStyle && inlineStyle.indexOf('var(--') !== -1) {
      var refs = extractVarRefs('x { ' + inlineStyle + ' }');
      for (var i = 0; i < refs.length; i++) {
        if (tokenCatalog[refs[i].name]) {
          found[refs[i].prop] = { name: refs[i].name, inherited: false };
        }
      }
    }

    // B. Matched CSS rules
    for (var r = 0; r < ruleIndex.length; r++) {
      var entry = ruleIndex[r];
      try {
        if (!el.matches(entry.selector)) continue;
      } catch (e) { continue; }

      for (var t = 0; t < entry.tokens.length; t++) {
        var tok = entry.tokens[t];
        if (!tokenCatalog[tok.name]) continue;
        // Don't overwrite inline styles (higher specificity)
        if (!found[tok.prop]) {
          found[tok.prop] = { name: tok.name, inherited: false };
        }
      }
    }

    // C. Walk ancestors for inherited properties
    var ancestor = el.parentElement;
    var depth = 0;
    while (ancestor && depth < 15 && !ancestor.classList.contains('content-page')) {
      // Check inline
      var ancInline = ancestor.getAttribute('style');
      if (ancInline && ancInline.indexOf('var(--') !== -1) {
        var ancRefs = extractVarRefs('x { ' + ancInline + ' }');
        for (var ai = 0; ai < ancRefs.length; ai++) {
          if (!tokenCatalog[ancRefs[ai].name]) continue;
          if (INHERITED_PROPS.indexOf(ancRefs[ai].prop) === -1) continue;
          if (!found[ancRefs[ai].prop]) {
            found[ancRefs[ai].prop] = { name: ancRefs[ai].name, inherited: true };
          }
        }
      }

      // Check matched rules
      for (var ar = 0; ar < ruleIndex.length; ar++) {
        var aEntry = ruleIndex[ar];
        try {
          if (!ancestor.matches(aEntry.selector)) continue;
        } catch (e) { continue; }

        for (var at = 0; at < aEntry.tokens.length; at++) {
          var aTok = aEntry.tokens[at];
          if (!tokenCatalog[aTok.name]) continue;
          if (INHERITED_PROPS.indexOf(aTok.prop) === -1) continue;
          if (!found[aTok.prop]) {
            found[aTok.prop] = { name: aTok.name, inherited: true };
          }
        }
      }

      ancestor = ancestor.parentElement;
      depth++;
    }

    return found;
  }

  // ===========================================================================
  //  4. Group tokens by category
  // ===========================================================================

  function groupByCategory(tokenMap) {
    var groups = {};
    var props = Object.keys(tokenMap);
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var info = tokenMap[prop];
      var cat = tokenCatalog[info.name] ? tokenCatalog[info.name].category : 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push({ prop: prop, name: info.name, inherited: info.inherited });
    }

    // Sort by CATEGORY_ORDER
    var sorted = [];
    for (var c = 0; c < CATEGORY_ORDER.length; c++) {
      if (groups[CATEGORY_ORDER[c]]) {
        sorted.push({ category: CATEGORY_ORDER[c], items: groups[CATEGORY_ORDER[c]] });
      }
    }
    // Any remaining
    var cats = Object.keys(groups);
    for (var j = 0; j < cats.length; j++) {
      if (CATEGORY_ORDER.indexOf(cats[j]) === -1) {
        sorted.push({ category: cats[j], items: groups[cats[j]] });
      }
    }
    return sorted;
  }

  // ===========================================================================
  //  5. Element label (tag.class)
  // ===========================================================================

  function elementLabel(el) {
    var tag = el.tagName.toLowerCase();
    var cls = el.className;
    if (typeof cls === 'string' && cls.trim()) {
      var first = cls.trim().split(/\s+/)[0];
      return tag + '.' + first;
    }
    return tag;
  }

  // ===========================================================================
  //  6. Token → section navigation
  // ===========================================================================

  function tokenSection(cssName) {
    if (cssName.startsWith('--space-'))           return 'tk-spacing';
    if (cssName.startsWith('--radius-'))          return 'tk-radius';
    if (cssName.startsWith('--color-surface'))    return 'tk-surfaces';
    if (cssName.startsWith('--color-fill'))       return 'tk-surfaces';
    if (cssName.startsWith('--color-separator'))  return 'tk-surfaces';
    if (cssName.startsWith('--color-gray'))       return 'tk-colors';
    if (cssName.startsWith('--color-label'))      return 'tk-colors';
    if (cssName.startsWith('--color-tint'))       return 'tk-colors';
    if (cssName.startsWith('--font-'))            return 'tk-typography';
    if (cssName.startsWith('--line-height-'))     return 'tk-typography';
    if (cssName.startsWith('--letter-spacing-'))  return 'tk-typography';
    if (cssName.startsWith('--measure-'))         return 'tk-typography';
    if (cssName.startsWith('--map-label-'))       return 'tk-typography';
    if (cssName.startsWith('--touch-target-'))    return 'tk-typography';
    return 'tk-spacing'; // fallback
  }

  function navigateToToken(cssName) {
    var sectionId = tokenSection(cssName);
    hideTooltip();
    // Use the existing switchPage from styleguide.js via nav click simulation
    var navLink = document.querySelector('[data-page="tokens"]');
    if (navLink) navLink.click();
    // Wait for page switch to render, then scroll to the section
    setTimeout(function () {
      var section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  // ===========================================================================
  //  7. Platform-aware token names
  // ===========================================================================

  function getCurrentPlatform() {
    var active = document.querySelector('.platform-toggle__btn.is-active');
    return active ? active.dataset.platform : 'html';
  }

  // Convert --space-8 → Spacing.s8 (iOS) or R.dimen.space_8 (Android)
  function tokenForPlatform(cssName, platform) {
    if (platform === 'html') return cssName;

    // Strip leading --
    var raw = cssName.replace(/^--/, '');

    if (platform === 'ios') {
      if (raw.startsWith('space-'))            return 'Spacing.s' + raw.replace('space-', '');
      if (raw.startsWith('radius-'))           return 'Radius.' + raw.replace('radius-', '');
      if (raw.startsWith('color-'))            return 'Color.' + raw.replace('color-', '').replace(/-/g, '');
      if (raw.startsWith('font-family'))       return 'Font.' + camelCase(raw.replace('font-family', '').replace(/^-/, '') || 'default');
      if (raw.startsWith('font-size-'))        return 'FontSize.' + camelCase(raw.replace('font-size-', ''));
      if (raw.startsWith('font-weight-'))      return 'FontWeight.' + camelCase(raw.replace('font-weight-', ''));
      if (raw.startsWith('line-height-'))      return 'LineHeight.' + camelCase(raw.replace('line-height-', ''));
      if (raw.startsWith('letter-spacing-'))   return 'LetterSpacing.' + camelCase(raw.replace('letter-spacing-', ''));
      if (raw.startsWith('measure-'))          return 'Measure.' + camelCase(raw.replace('measure-', ''));
      if (raw.startsWith('map-label-'))        return 'MapLabel.' + camelCase(raw.replace('map-label-', ''));
      if (raw.startsWith('touch-target-'))     return 'Layout.touchTargetMinimum';
      return raw;
    }

    if (platform === 'android') {
      var snaked = raw.replace(/-/g, '_');
      if (raw.startsWith('space-'))            return 'R.dimen.space_' + raw.replace('space-', '');
      if (raw.startsWith('radius-'))           return 'R.dimen.radius_' + raw.replace('radius-', '');
      if (raw.startsWith('color-'))            return 'R.color.' + snaked;
      if (raw.startsWith('font-'))             return 'R.dimen.' + snaked;
      if (raw.startsWith('line-height-'))      return 'R.dimen.' + snaked;
      if (raw.startsWith('letter-spacing-'))   return 'R.dimen.' + snaked;
      if (raw.startsWith('measure-'))          return 'R.dimen.' + snaked;
      if (raw.startsWith('map-label-'))        return 'R.dimen.' + snaked;
      if (raw.startsWith('touch-target-'))     return 'R.dimen.' + snaked;
      return 'R.dimen.' + snaked;
    }

    return cssName;
  }

  function valueForPlatform(value, cssName, platform) {
    if (platform === 'html') return value;

    // Convert px → pt (iOS) or dp (Android)
    var pxMatch = value.match(/^(\d+(?:\.\d+)?)px$/);
    if (pxMatch) {
      if (platform === 'ios') return pxMatch[1] + 'pt';
      if (platform === 'android') return pxMatch[1] + 'dp';
    }

    return value;
  }

  function camelCase(str) {
    if (!str) return 'default';
    return str.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
  }

  // ===========================================================================
  //  7. Tooltip rendering
  // ===========================================================================

  function ensureTooltip() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'token-inspector-tooltip';
    tooltipEl.setAttribute('role', 'tooltip');
    tooltipEl.addEventListener('mouseenter', function () {
      isInsideTooltip = true;
      cancelHide();
    });
    tooltipEl.addEventListener('mouseleave', onTooltipLeave);
    tooltipEl.addEventListener('click', onTooltipClick);
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function isColorProp(prop) {
    return prop === 'color' || prop === 'background-color' || prop === 'background' ||
           prop === 'border-color' || prop === 'outline-color' || prop === 'fill' || prop === 'stroke' ||
           prop.indexOf('color') !== -1;
  }

  function renderTooltip(el, tokenMap) {
    var tip = ensureTooltip();
    var groups = groupByCategory(tokenMap);
    var hasTokens = groups.length > 0;
    var platform = getCurrentPlatform();

    var html = '<div class="token-inspector-tooltip__header">' + escapeHtml(elementLabel(el)) + '</div>';

    if (!hasTokens) {
      html += '<div class="token-inspector-tooltip__empty">No design tokens</div>';
    } else {
      for (var g = 0; g < groups.length; g++) {
        var group = groups[g];
        html += '<div class="token-inspector-tooltip__group">';
        html += '<div class="token-inspector-tooltip__category">' + escapeHtml(group.category) + '</div>';

        for (var i = 0; i < group.items.length; i++) {
          var item = group.items[i];
          var resolved = tokenCatalog[item.name] ? tokenCatalog[item.name].value : '';
          var swatch = '';
          var displayName = tokenForPlatform(item.name, platform);
          var displayValue = valueForPlatform(resolved, item.name, platform);

          if (isColorProp(item.prop) && resolved) {
            swatch = '<span class="token-inspector-tooltip__swatch" style="background:' + escapeHtml(resolved) + '"></span>';
          }

          html += '<div class="token-inspector-tooltip__row">';
          html += '<span class="token-inspector-tooltip__prop">' + escapeHtml(item.prop) + '</span>';
          html += '<span class="token-inspector-tooltip__token" data-token="' + escapeHtml(item.name) + '">' + escapeHtml(displayName) + '</span>';
          html += '<span class="token-inspector-tooltip__value">' + swatch + escapeHtml(truncateValue(displayValue)) + '</span>';
          html += '</div>';
        }

        html += '</div>';
      }
    }

    tip.innerHTML = html;
    return tip;
  }

  function truncateValue(val) {
    if (val.length > 36) return val.substring(0, 33) + '...';
    return val;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function positionTooltip(tip, targetRect) {
    var tipRect = tip.getBoundingClientRect();
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    // Prefer above, no gap
    var top = targetRect.top - tipRect.height;
    if (top < 8) {
      // Flip below
      top = targetRect.bottom;
    }
    if (top + tipRect.height > vh - 8) {
      top = vh - tipRect.height - 8;
    }

    var left = targetRect.left;
    if (left + tipRect.width > vw - 8) {
      left = vw - tipRect.width - 8;
    }
    if (left < 8) left = 8;

    tip.style.top = top + 'px';
    tip.style.left = left + 'px';
  }

  function showTooltip(el, tokenMap) {
    var tip = renderTooltip(el, tokenMap);
    // Position offscreen first to measure
    tip.style.top = '-9999px';
    tip.style.left = '-9999px';
    tip.classList.remove('is-visible');

    // Force layout then position
    requestAnimationFrame(function () {
      var rect = el.getBoundingClientRect();
      positionTooltip(tip, rect);
      tip.classList.add('is-visible');
    });
  }

  function hideTooltip() {
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = null;
    isInsideTooltip = false;
    if (tooltipEl) {
      tooltipEl.classList.remove('is-visible');
    }
    if (currentTarget) {
      currentTarget.removeAttribute('data-inspect-hover');
      currentTarget = null;
    }
  }

  function hideTooltipDelayed() {
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = setTimeout(function () {
      if (!isInsideTooltip) hideTooltip();
    }, 200);
  }

  function cancelHide() {
    if (hideTimeout) clearTimeout(hideTimeout);
    hideTimeout = null;
  }

  // ===========================================================================
  //  7. Hover handling
  // ===========================================================================

  function onMouseMove(e) {
    if (!isActive) return;

    if (hoverTimeout) cancelAnimationFrame(hoverTimeout);
    hoverTimeout = requestAnimationFrame(function () {
      handleHover(e);
    });
  }

  function handleHover(e) {
    var target = e.target;

    // Bubble SVG children to nearest HTML element
    while (target && target.namespaceURI === 'http://www.w3.org/2000/svg' && target !== appContent) {
      target = target.parentElement;
    }

    // Exclude header, sidebar
    if (!target || !appContent.contains(target)) {
      // But don't hide if hovering the tooltip itself
      if (target && target.closest && target.closest('.token-inspector-tooltip')) return;
      hideTooltip(); return;
    }
    if (target.closest('.inspect-toggle, .app-header, .app-sidebar')) {
      hideTooltip(); return;
    }
    // Keep tooltip open when hovering inside it
    if (target.closest('.token-inspector-tooltip')) return;

    // Find a meaningful element (skip raw text containers without classes)
    var meaningful = target;
    if (!meaningful.className && meaningful.parentElement && meaningful.parentElement !== appContent) {
      meaningful = meaningful.parentElement;
    }

    if (meaningful === currentTarget) {
      cancelHide();
      return;
    }

    // If tooltip is interactive (user hovering it), don't switch targets
    if (isInsideTooltip) return;

    // Remove old hover
    if (currentTarget) currentTarget.removeAttribute('data-inspect-hover');

    currentTarget = meaningful;
    currentTarget.setAttribute('data-inspect-hover', '');

    var tokenMap = getTokensForElement(meaningful);
    showTooltip(meaningful, tokenMap);
  }

  function onMouseLeave(e) {
    if (!isActive) return;
    var related = e.relatedTarget;
    // Don't hide if moving to the tooltip
    if (related && related.closest && related.closest('.token-inspector-tooltip')) return;
    if (!related || !appContent.contains(related)) {
      hideTooltipDelayed();
    }
  }

  function onTooltipLeave(e) {
    if (!isActive) return;
    isInsideTooltip = false;
    var related = e.relatedTarget;
    // Don't hide if moving back to the inspected element or staying in tooltip
    if (related && (related === currentTarget || (currentTarget && currentTarget.contains(related)))) return;
    if (related && related.closest && related.closest('.token-inspector-tooltip')) return;
    hideTooltipDelayed();
  }

  function onTooltipClick(e) {
    var tokenEl = e.target.closest('[data-token]');
    if (!tokenEl) return;
    e.preventDefault();
    navigateToToken(tokenEl.dataset.token);
  }

  // ===========================================================================
  //  9. Toggle
  // ===========================================================================

  function toggle() {
    isActive = !isActive;
    document.body.classList.toggle('inspect-mode', isActive);
    toggleBtn.classList.toggle('is-active', isActive);
    toggleBtn.setAttribute('aria-pressed', String(isActive));
    if (!isActive) hideTooltip();
  }

  // ---- Events ----
  toggleBtn.addEventListener('click', toggle);

  appContent.addEventListener('mousemove', onMouseMove, { passive: true });
  appContent.addEventListener('mouseleave', onMouseLeave);

  // Listen globally for mousemove so tooltip hover works (tooltip is on document.body)
  document.addEventListener('mousemove', function (e) {
    if (!isActive || !tooltipEl) return;
    var target = e.target;
    // If inside tooltip, do nothing (keep it open)
    if (target.closest && target.closest('.token-inspector-tooltip')) return;
    // If inside app-content, the appContent listener handles it
    if (appContent.contains(target)) return;
    // Otherwise, mouse left both tooltip and content — hide with delay
    hideTooltipDelayed();
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
      // Don't override if user is in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      e.preventDefault();
      toggle();
    }
  });

  // ---- Initialize ----
  tokenCatalog = buildTokenCatalog();
  ruleIndex = buildRuleIndex();
  toggleBtn.setAttribute('aria-pressed', 'false');

})();
