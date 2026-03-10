(function () {
  // ---- Navigation data ----
  var NAV_ITEMS = [
    {
      id: 'getting-started', label: 'Getting Started', panel: 'getting-started',
      enabled: true, children: [
        { id: 'gs-overview', label: 'Overview' },
        { id: 'gs-principles', label: 'Design Principles' },
        { id: 'gs-workflow', label: 'How We Work' },
        { id: 'gs-tools', label: 'Tools & Setup' },
        { id: 'gs-contributing', label: 'Contributing' }
      ]
    },
    {
      id: 'tokens', label: 'Design Tokens', panel: 'tokens',
      enabled: true, children: [
        { id: 'tk-spacing', label: 'Spacing Scale' },
        { id: 'tk-radius', label: 'Border Radius' },
        { id: 'tk-surfaces', label: 'Surfaces & Fills' },
        { id: 'tk-colors', label: 'Colors & Grays' },
        { id: 'tk-typography', label: 'Typography' }
      ]
    },
    { divider: true },
    {
      id: 'typography', label: 'Typography', panel: 'typography',
      enabled: true, children: [
        { id: 'font-families', label: 'Font Families' },
        { id: 'weight-scale', label: 'Weight Scale' },
        { id: 'width-variants', label: 'Width Variants' },
        { id: 'type-scale', label: 'iOS Type Scale' },
        { id: 'emphasis', label: 'Emphasis' },
        { divider: true },
        { id: 'text-colors', label: 'Text Colors' },
        { id: 'tabular-figures', label: 'Numbers' },
        { id: 'sf-mono', label: 'SF Mono' },
        { id: 'uppercase', label: 'Uppercase' },
        { id: 'truncation', label: 'Truncation' },
        { id: 'map-labels', label: 'Map Labels' },
        { id: 'accessibility', label: 'Accessibility' },
        { divider: true },
        { id: 'chat-bubbles', label: 'Chat Bubbles' },
        { id: 'timestamps', label: 'Timestamps' },
        { id: 'navigation', label: 'Navigation' },
        { id: 'states', label: 'States' },
        { id: 'search', label: 'Search' },
        { id: 'multilingual', label: 'Multilingual' },
        { id: 'interactive', label: 'Interactive' },
        { divider: true },
        { id: 'token-reference', label: 'Token Reference' },
        { id: 'usage-notes', label: 'Usage Notes' }
      ]
    },
    {
      id: 'colors', label: 'Colors', panel: 'colors',
      enabled: true, children: [
        { id: 'cl-palette', label: 'Color Palette' },
        { id: 'cl-semantic', label: 'Semantic Colors' },
        { id: 'cl-tints', label: 'Tint Colors' },
        { id: 'cl-backgrounds', label: 'Backgrounds & Fills' },
        { id: 'cl-dark-mode', label: 'Dark Mode' },
        { id: 'cl-contrast', label: 'Contrast & A11y' }
      ]
    },
    {
      id: 'spacing', label: 'Spacing & Layout', panel: 'spacing',
      enabled: true, children: [
        { id: 'sp-scale', label: 'Spacing Scale' },
        { id: 'sp-grid', label: 'Grid System' },
        { id: 'sp-breakpoints', label: 'Breakpoints' },
        { id: 'sp-containers', label: 'Containers' },
        { id: 'sp-measure', label: 'Line Lengths' }
      ]
    },
    {
      id: 'elevation', label: 'Elevation & Borders', panel: 'elevation',
      enabled: true, children: [
        { id: 'el-shadows', label: 'Shadows' },
        { id: 'el-radii', label: 'Border Radii' },
        { id: 'el-borders', label: 'Borders & Dividers' },
        { id: 'el-layers', label: 'Z-Index Layers' }
      ]
    },
    {
      id: 'motion', label: 'Motion', panel: 'motion',
      enabled: true, children: [
        { id: 'mo-easing', label: 'Easing Curves' },
        { id: 'mo-duration', label: 'Duration Scale' },
        { id: 'mo-transitions', label: 'Transitions' },
        { id: 'mo-principles', label: 'Animation Principles' }
      ]
    },
    {
      id: 'iconography', label: 'Iconography', panel: 'iconography',
      enabled: true, children: [
        { id: 'ic-set', label: 'Icon Set' },
        { id: 'ic-sizing', label: 'Sizing & Stroke' },
        { id: 'ic-usage', label: 'Usage Guidelines' }
      ]
    },
    { divider: true },
    {
      id: 'components', label: 'Components', panel: 'components',
      enabled: true, children: [
        { id: 'cp-buttons', label: 'Buttons' },
        { id: 'cp-inputs', label: 'Inputs & Forms' },
        { id: 'cp-toggles', label: 'Toggles & Checkboxes' },
        { id: 'cp-cards', label: 'Cards' },
        { id: 'cp-lists', label: 'Lists & Tables' },
        { id: 'cp-badges', label: 'Badges & Tags' },
        { id: 'cp-tabs', label: 'Tabs & Segments' },
        { id: 'cp-tooltips', label: 'Tooltips & Popovers' },
        { id: 'cp-modals', label: 'Modals & Sheets' },
        { id: 'cp-toasts', label: 'Toasts & Alerts' }
      ]
    },
    {
      id: 'patterns', label: 'Patterns', panel: 'patterns',
      enabled: true, children: [
        { id: 'pt-forms', label: 'Form Layouts' },
        { id: 'pt-nav', label: 'Navigation Patterns' },
        { id: 'pt-data', label: 'Data Display' },
        { id: 'pt-empty', label: 'Empty States' },
        { id: 'pt-loading', label: 'Loading States' },
        { id: 'pt-errors', label: 'Error Handling' },
        { id: 'pt-onboarding', label: 'Onboarding' }
      ]
    },
    { divider: true },
    {
      id: 'guidelines', label: 'Guidelines', panel: 'guidelines',
      enabled: true, children: [
        { id: 'gl-a11y', label: 'Accessibility' },
        { id: 'gl-responsive', label: 'Responsive Design' },
        { id: 'gl-voice', label: 'Voice & Tone' },
        { id: 'gl-dark', label: 'Dark Mode' },
        { id: 'gl-i18n', label: 'Internationalization' }
      ]
    }
  ];

  var PANEL_CONFIG = {
    'getting-started': { title: 'Livemap Design System', heading: 'Getting Started', subtitle: '' },
    tokens:     { title: 'Livemap Design System', heading: 'Design Tokens', subtitle: '' },
    typography: { title: 'Livemap Design System', heading: 'Typography', subtitle: '/ SF Pro' },
    colors:     { title: 'Livemap Design System', heading: 'Colors', subtitle: '' },
    spacing:    { title: 'Livemap Design System', heading: 'Spacing & Layout', subtitle: '' },
    elevation:  { title: 'Livemap Design System', heading: 'Elevation & Borders', subtitle: '' },
    motion:     { title: 'Livemap Design System', heading: 'Motion', subtitle: '' },
    iconography:{ title: 'Livemap Design System', heading: 'Iconography', subtitle: '' },
    components: { title: 'Livemap Design System', heading: 'Components', subtitle: '' },
    patterns:   { title: 'Livemap Design System', heading: 'Patterns', subtitle: '' },
    guidelines: { title: 'Livemap Design System', heading: 'Guidelines', subtitle: '' }
  };

  // ---- State ----
  var activePanel = 'typography';

  // ---- DOM refs ----
  var sidebar = document.getElementById('app-sidebar');
  var sidebarNav = document.getElementById('app-sidebar-nav');
  var sidebarToggle = document.getElementById('sidebar-toggle');
  var headerTitle = document.getElementById('header-title');
  var headerHeading = document.getElementById('header-heading');
  var appContent = document.getElementById('app-content');
  var searchContainer = document.getElementById('sidebar-search');
  var platformToggle = document.getElementById('platform-toggle');

  // ---- Render sidebar ----
  function renderSidebar() {
    sidebarNav.innerHTML = '';
    NAV_ITEMS.forEach(function (item) {
      // Handle top-level dividers
      if (item.divider) {
        var d = document.createElement('div');
        d.className = 'nav-divider';
        sidebarNav.appendChild(d);
        return;
      }

      var div = document.createElement('div');
      div.className = 'nav-item' + (item.id === activePanel ? ' is-active' : '') + (!item.enabled ? ' is-disabled' : '');
      div.setAttribute('data-panel', item.panel);
      div.innerHTML =
        '<span class="nav-item__label">' + item.label + '</span>';
      div.addEventListener('click', function () {
        if (activePanel === item.panel) {
          var sub = sidebarNav.querySelector('.nav-subitems[data-parent-panel="' + item.panel + '"]');
          if (sub) sub.classList.toggle('is-expanded');
          return;
        }
        switchPanel(item.panel);
      });
      sidebarNav.appendChild(div);

      if (item.children && item.children.length > 0) {
        var subNav = document.createElement('div');
        subNav.className = 'nav-subitems' + (item.id === activePanel ? ' is-expanded' : '');
        subNav.setAttribute('data-parent-panel', item.panel);

        item.children.forEach(function (child) {
          if (child.divider) {
            var d = document.createElement('div');
            d.className = 'nav-divider';
            subNav.appendChild(d);
          } else {
            var a = document.createElement('a');
            a.className = 'nav-subitem';
            a.href = '#' + child.id;
            a.textContent = child.label;
            a.addEventListener('click', function (e) {
              e.preventDefault();
              var target = document.getElementById(child.id);
              if (target) {
                var panel = document.getElementById('panel-' + activePanel);
                if (panel) {
                  appContent.scrollTo({
                    top: target.offsetTop - panel.offsetTop - 20,
                    behavior: 'smooth'
                  });
                }
              }
            });
            subNav.appendChild(a);
          }
        });

        sidebarNav.appendChild(subNav);
      }
    });
  }

  // ---- Switch panel ----
  function switchPanel(panelId) {
    activePanel = panelId;

    // Toggle panel visibility
    var panels = document.querySelectorAll('.content-panel');
    for (var i = 0; i < panels.length; i++) {
      panels[i].hidden = panels[i].id !== 'panel-' + panelId;
    }

    // Update header
    var config = PANEL_CONFIG[panelId];
    if (config) {
      headerTitle.innerHTML = config.title + ' <span style="opacity:0.5;margin-left:4px;">v0.1</span>';
      headerHeading.innerHTML = config.heading + (config.subtitle ? ' <span>' + config.subtitle + '</span>' : '');
    }

    // Update sidebar active states
    var navItems = sidebarNav.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle('is-active', navItems[i].getAttribute('data-panel') === panelId);
    }
    var subItems = sidebarNav.querySelectorAll('.nav-subitems');
    for (var i = 0; i < subItems.length; i++) {
      subItems[i].classList.toggle('is-expanded', subItems[i].getAttribute('data-parent-panel') === panelId);
    }

    // Show/hide search and platform toggle (only for typography)
    var isTypography = panelId === 'typography';
    searchContainer.style.display = isTypography ? '' : 'none';
    platformToggle.style.display = isTypography ? '' : 'none';

    // Scroll to top
    appContent.scrollTop = 0;
  }

  // ---- Sidebar collapse ----
  sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('is-collapsed');
  });

  // ---- Scroll spy ----
  var typographyItem = NAV_ITEMS.filter(function (n) { return !n.divider; }).find(function (n) { return n.id === 'typography'; });
  var spySections = typographyItem ? typographyItem.children.filter(function (c) { return !c.divider; }) : [];

  function updateScrollSpy() {
    if (activePanel !== 'typography') return;
    var current = '';
    for (var i = spySections.length - 1; i >= 0; i--) {
      var el = document.getElementById(spySections[i].id);
      if (el) {
        var rect = el.getBoundingClientRect();
        var containerRect = appContent.getBoundingClientRect();
        if (rect.top - containerRect.top <= 100) {
          current = spySections[i].id;
          break;
        }
      }
    }
    var links = sidebarNav.querySelectorAll('.nav-subitem');
    for (var j = 0; j < links.length; j++) {
      var href = links[j].getAttribute('href');
      var id = href ? href.slice(1) : '';
      links[j].classList.toggle('is-active', id === current);
    }
  }

  appContent.addEventListener('scroll', updateScrollSpy, { passive: true });

  // ---- Initialize ----
  renderSidebar();
  switchPanel('typography');
  setTimeout(updateScrollSpy, 100);
})();

// ---- Instant search with highlighting ----
(function () {
  var input = document.getElementById('search-input');
  var clearBtn = document.getElementById('search-clear');
  var container = document.getElementById('sidebar-search');
  var meta = document.getElementById('search-meta');
  var prevBtn = document.getElementById('search-prev');
  var nextBtn = document.getElementById('search-next');
  var content = document.getElementById('panel-typography');
  var appContent = document.getElementById('app-content');

  var marks = [];
  var currentIdx = -1;
  var debounceTimer = null;

  function clearHighlights() {
    var existing = content.querySelectorAll('mark.search-hl');
    for (var i = existing.length - 1; i >= 0; i--) {
      var m = existing[i];
      var parent = m.parentNode;
      parent.replaceChild(document.createTextNode(m.textContent), m);
      parent.normalize();
    }
    marks = [];
    currentIdx = -1;
  }

  function highlightMatches(query) {
    clearHighlights();
    if (!query || query.length < 2) {
      updateMeta(0);
      return;
    }

    var lowerQuery = query.toLowerCase();
    var walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null);
    var textNodes = [];

    while (walker.nextNode()) {
      var parent = walker.currentNode.parentNode;
      if (parent.closest && parent.closest('script, style, mark.search-hl')) continue;
      if (walker.currentNode.textContent.toLowerCase().indexOf(lowerQuery) !== -1) {
        textNodes.push(walker.currentNode);
      }
    }

    for (var i = 0; i < textNodes.length; i++) {
      highlightTextNode(textNodes[i], lowerQuery);
    }

    marks = Array.from(content.querySelectorAll('mark.search-hl'));
    updateMeta(marks.length);

    if (marks.length > 0) {
      goToMatch(0);
    }
  }

  function highlightTextNode(textNode, lowerQuery) {
    var text = textNode.textContent;
    var lower = text.toLowerCase();
    var idx = lower.indexOf(lowerQuery);
    if (idx === -1) return;

    var frag = document.createDocumentFragment();
    var lastIdx = 0;

    while (idx !== -1) {
      if (idx > lastIdx) {
        frag.appendChild(document.createTextNode(text.slice(lastIdx, idx)));
      }
      var mark = document.createElement('mark');
      mark.className = 'search-hl';
      mark.textContent = text.slice(idx, idx + lowerQuery.length);
      frag.appendChild(mark);
      lastIdx = idx + lowerQuery.length;
      idx = lower.indexOf(lowerQuery, lastIdx);
    }

    if (lastIdx < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIdx)));
    }

    textNode.parentNode.replaceChild(frag, textNode);
  }

  function updateMeta(count) {
    if (count === 0 && input.value.length >= 2) {
      meta.textContent = 'No matches';
    } else if (count > 0) {
      meta.textContent = (currentIdx + 1) + ' of ' + count;
    } else {
      meta.innerHTML = '<kbd>/</kbd> to search';
    }
    prevBtn.disabled = count <= 1;
    nextBtn.disabled = count <= 1;
  }

  function goToMatch(idx) {
    if (marks.length === 0) return;
    if (currentIdx >= 0 && currentIdx < marks.length) {
      marks[currentIdx].classList.remove('search-hl--current');
    }
    currentIdx = ((idx % marks.length) + marks.length) % marks.length;
    marks[currentIdx].classList.add('search-hl--current');
    updateMeta(marks.length);
    marks[currentIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  input.addEventListener('input', function () {
    var q = input.value.trim();
    container.classList.toggle('sidebar__search--has-query', q.length > 0);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      highlightMatches(q);
    }, 120);
  });

  clearBtn.addEventListener('click', function () {
    input.value = '';
    container.classList.remove('sidebar__search--has-query');
    clearHighlights();
    updateMeta(0);
    input.focus();
  });

  prevBtn.addEventListener('click', function () { goToMatch(currentIdx - 1); });
  nextBtn.addEventListener('click', function () { goToMatch(currentIdx + 1); });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      goToMatch(e.shiftKey ? currentIdx - 1 : currentIdx + 1);
    }
    if (e.key === 'Escape') {
      input.value = '';
      container.classList.remove('sidebar__search--has-query');
      clearHighlights();
      updateMeta(0);
      input.blur();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  updateMeta(0);
})();

// ---- Platform name toggle ----
(function () {
  var toggle = document.getElementById('platform-toggle');
  var buttons = toggle.querySelectorAll('.platform-toggle__btn');
  var nameEls = document.querySelectorAll('[data-name-html]');

  function switchPlatform(platform) {
    buttons.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.platform === platform);
    });
    var attr = 'data-name-' + platform;
    nameEls.forEach(function (el) {
      var name = el.getAttribute(attr);
      if (name) el.textContent = name;
    });
  }

  toggle.addEventListener('click', function (e) {
    var btn = e.target.closest('.platform-toggle__btn');
    if (!btn) return;
    switchPlatform(btn.dataset.platform);
  });
})();
