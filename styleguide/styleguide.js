(function () {
  // ---- Navigation data ----
  var NAV_ITEMS = [
    {
      id: 'getting-started', label: 'Getting Started', page: 'getting-started',
      enabled: true, children: [
        { id: 'gs-overview', label: 'Overview' },
        { id: 'gs-playground', label: 'Try It Out' },
        { id: 'gs-principles', label: 'Design Principles' },
        { id: 'gs-workflow', label: 'How We Work' },
        { id: 'gs-tools', label: 'Tools & Setup' },
        { id: 'gs-contributing', label: 'Contributing' }
      ]
    },
    {
      id: 'tokens', label: 'Design Tokens', page: 'tokens',
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
      id: 'typography', label: 'Typography', page: 'typography',
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
      id: 'colors', label: 'Colors', page: 'colors',
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
      id: 'spacing', label: 'Spacing & Layout', page: 'spacing',
      enabled: true, children: [
        { id: 'sp-scale', label: 'Spacing Scale' },
        { id: 'sp-grid', label: 'Grid System' },
        { id: 'sp-breakpoints', label: 'Breakpoints' },
        { id: 'sp-containers', label: 'Containers' },
        { id: 'sp-measure', label: 'Line Lengths' }
      ]
    },
    {
      id: 'elevation', label: 'Elevation & Borders', page: 'elevation',
      enabled: true, children: [
        { id: 'el-shadows', label: 'Shadows' },
        { id: 'el-radii', label: 'Border Radii' },
        { id: 'el-borders', label: 'Borders & Dividers' },
        { id: 'el-layers', label: 'Z-Index Layers' }
      ]
    },
    {
      id: 'motion', label: 'Motion', page: 'motion',
      enabled: true, children: [
        { id: 'mo-easing', label: 'Easing Curves' },
        { id: 'mo-duration', label: 'Duration Scale' },
        { id: 'mo-transitions', label: 'Transitions' },
        { id: 'mo-principles', label: 'Animation Principles' }
      ]
    },
    {
      id: 'iconography', label: 'Iconography', page: 'iconography',
      enabled: true, children: [
        { id: 'ic-set', label: 'Icon Set' },
        { id: 'ic-sizing', label: 'Sizing & Stroke' },
        { id: 'ic-usage', label: 'Usage Guidelines' }
      ]
    },
    {
      id: 'map', label: 'Map', page: 'map',
      enabled: true, children: [
        { id: 'mp-labels', label: 'Label Typography' },
        { id: 'mp-pins', label: 'Pins & Markers' },
        { id: 'mp-colors', label: 'Map Colors' },
        { id: 'mp-surfaces', label: 'Terrain & Surfaces' },
        { id: 'mp-overlays', label: 'Overlays & Routes' },
        { id: 'mp-zoom', label: 'Zoom & Density' },
        { id: 'mp-dark', label: 'Dark Mode' }
      ]
    },
    { divider: true },
    {
      id: 'components', label: 'Components', page: 'components',
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
      id: 'patterns', label: 'Patterns', page: 'patterns',
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
      id: 'guidelines', label: 'Guidelines', page: 'guidelines',
      enabled: true, children: [
        { id: 'gl-a11y', label: 'Accessibility' },
        { id: 'gl-responsive', label: 'Responsive Design' },
        { id: 'gl-voice', label: 'Voice & Tone' },
        { id: 'gl-dark', label: 'Dark Mode' },
        { id: 'gl-i18n', label: 'Internationalization' }
      ]
    }
  ];

  var PAGE_CONFIG = {
    home:              { title: 'Livemap Design System', heading: 'Livemap Design System', subtitle: '' },
    'getting-started': { title: 'Livemap Design System', heading: 'Getting Started', subtitle: '' },
    tokens:     { title: 'Livemap Design System', heading: 'Design Tokens', subtitle: '' },
    typography: { title: 'Livemap Design System', heading: 'Typography', subtitle: '/ SF Pro' },
    colors:     { title: 'Livemap Design System', heading: 'Colors', subtitle: '' },
    spacing:    { title: 'Livemap Design System', heading: 'Spacing & Layout', subtitle: '' },
    elevation:  { title: 'Livemap Design System', heading: 'Elevation & Borders', subtitle: '' },
    motion:     { title: 'Livemap Design System', heading: 'Motion', subtitle: '' },
    iconography:{ title: 'Livemap Design System', heading: 'Iconography', subtitle: '' },
    map:        { title: 'Livemap Design System', heading: 'Map', subtitle: '' },
    components: { title: 'Livemap Design System', heading: 'Components', subtitle: '' },
    patterns:   { title: 'Livemap Design System', heading: 'Patterns', subtitle: '' },
    guidelines: { title: 'Livemap Design System', heading: 'Guidelines', subtitle: '' }
  };

  // ---- State ----
  var activePage = 'home';

  // ---- DOM refs ----
  var sidebar = document.getElementById('app-sidebar');
  var sidebarNav = document.getElementById('app-sidebar-nav');
  var sidebarToggle = document.getElementById('sidebar-toggle');
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
      div.className = 'nav-item' + (item.id === activePage ? ' is-active' : '') + (!item.enabled ? ' is-disabled' : '');
      div.setAttribute('data-page', item.page);
      div.innerHTML =
        '<span class="nav-item__label">' + item.label + '</span>';
      div.addEventListener('click', function () {
        if (activePage === item.page) {
          var sub = sidebarNav.querySelector('.nav-subitems[data-parent-page="' + item.page + '"]');
          if (sub) sub.classList.toggle('is-expanded');
          return;
        }
        switchPage(item.page);
      });
      sidebarNav.appendChild(div);

      if (item.children && item.children.length > 0) {
        var subNav = document.createElement('div');
        subNav.className = 'nav-subitems' + (item.id === activePage ? ' is-expanded' : '');
        subNav.setAttribute('data-parent-page', item.page);

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
                var page = document.getElementById('page-' + activePage);
                if (page) {
                  appContent.scrollTo({
                    top: target.offsetTop - page.offsetTop - 20,
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

  // ---- Path-based routing ----
  // Detect base path (directory containing index.html)
  var basePath = (function () {
    var path = location.pathname;
    if (path.endsWith('/index.html')) return path.slice(0, -10);
    var segments = path.replace(/\/$/, '').split('/');
    var last = segments[segments.length - 1];
    if (PAGE_CONFIG[last]) segments.pop();
    return segments.join('/') + '/';
  })();

  function getPageFromURL() {
    var path = location.pathname.replace(/\/$/, '');
    var segment = path.slice(basePath.length);
    return PAGE_CONFIG[segment] ? segment : null;
  }

  // ---- Switch page ----
  function switchPage(pageId, skipPush) {
    activePage = pageId;

    // Update URL
    if (!skipPush) {
      var url = pageId === 'home' ? basePath : basePath + pageId;
      history.pushState({ page: pageId }, '', url);
    }

    // Toggle page visibility
    var pages = document.querySelectorAll('.content-page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].hidden = pages[i].id !== 'page-' + pageId;
    }

    // Update header
    var config = PAGE_CONFIG[pageId];
    if (config) {
      headerHeading.innerHTML = config.heading + (config.subtitle ? ' <span>' + config.subtitle + '</span>' : '');
    }

    // Update sidebar active states
    var navItems = sidebarNav.querySelectorAll('.nav-item');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle('is-active', navItems[i].getAttribute('data-page') === pageId);
    }
    var subItems = sidebarNav.querySelectorAll('.nav-subitems');
    for (var i = 0; i < subItems.length; i++) {
      subItems[i].classList.toggle('is-expanded', subItems[i].getAttribute('data-parent-page') === pageId);
    }

    // Show/hide search (typography only) and platform toggle (typography + colors)
    searchContainer.style.display = (pageId === 'typography') ? '' : 'none';
    platformToggle.style.display = (pageId === 'typography' || pageId === 'colors') ? '' : 'none';

    // Scroll to top
    appContent.scrollTop = 0;
  }

  window.addEventListener('popstate', function () {
    var pageId = getPageFromURL() || 'home';
    if (pageId !== activePage) {
      switchPage(pageId, true);
    }
  });

  // ---- Sidebar collapse ----
  sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('is-collapsed');
  });

  // ---- Brand click → home ----
  var sidebarBrand = document.getElementById('sidebar-brand');
  if (sidebarBrand) {
    sidebarBrand.style.cursor = 'pointer';
    sidebarBrand.addEventListener('click', function () {
      switchPage('home');
    });
  }

  // ---- Homepage card navigation ----
  var homeCards = document.querySelectorAll('[data-home-page]');
  for (var i = 0; i < homeCards.length; i++) {
    (function (card) {
      card.addEventListener('click', function () {
        switchPage(card.getAttribute('data-home-page'));
      });
    })(homeCards[i]);
  }

  // ---- Scroll spy ----
  // Build a map of page id → child section ids for all pages with children
  var spySectionsMap = {};
  NAV_ITEMS.forEach(function (item) {
    if (!item.divider && item.children && item.children.length > 0) {
      spySectionsMap[item.page] = item.children.filter(function (c) { return !c.divider; });
    }
  });

  function updateScrollSpy() {
    var sections = spySectionsMap[activePage];
    if (!sections) return;
    var current = '';
    for (var i = sections.length - 1; i >= 0; i--) {
      var el = document.getElementById(sections[i].id);
      if (el) {
        var rect = el.getBoundingClientRect();
        var containerRect = appContent.getBoundingClientRect();
        if (rect.top - containerRect.top <= 100) {
          current = sections[i].id;
          break;
        }
      }
    }
    var links = sidebarNav.querySelectorAll('.nav-subitems[data-parent-page="' + activePage + '"] .nav-subitem');
    for (var j = 0; j < links.length; j++) {
      var href = links[j].getAttribute('href');
      var id = href ? href.slice(1) : '';
      links[j].classList.toggle('is-active', id === current);
    }
  }

  appContent.addEventListener('scroll', updateScrollSpy, { passive: true });

  // ---- Initialize ----
  renderSidebar();
  var initialPage = getPageFromURL() || 'home';
  switchPage(initialPage, true);
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
  var content = document.getElementById('page-typography');
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

// ---- Platform name toggle + color value conversion ----
(function () {
  var toggle = document.getElementById('platform-toggle');
  var buttons = toggle.querySelectorAll('.platform-toggle__btn');
  var nameEls = document.querySelectorAll('[data-name-html]');

  // ---- Color parsing helpers ----
  function parseColor(raw) {
    raw = raw.trim();
    // hex: #rgb, #rrggbb
    var hexMatch = raw.match(/^#([0-9a-f]{3,8})$/i);
    if (hexMatch) {
      var hex = hexMatch[1];
      if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      if (hex.length === 6) hex += 'ff';
      return {
        r: parseInt(hex.slice(0,2), 16),
        g: parseInt(hex.slice(2,4), 16),
        b: parseInt(hex.slice(4,6), 16),
        a: parseInt(hex.slice(6,8), 16) / 255
      };
    }
    // rgba(r, g, b, a) or rgb(r, g, b)
    var rgbaMatch = raw.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/);
    if (rgbaMatch) {
      return {
        r: parseInt(rgbaMatch[1]),
        g: parseInt(rgbaMatch[2]),
        b: parseInt(rgbaMatch[3]),
        a: rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1
      };
    }
    return null;
  }

  function toHex2(n) { return ('0' + Math.round(n).toString(16)).slice(-2); }

  function formatCSS(c) {
    if (c.a >= 0.999) return '#' + toHex2(c.r) + toHex2(c.g) + toHex2(c.b);
    return 'rgba(' + c.r + ', ' + c.g + ', ' + c.b + ', ' + (Math.round(c.a * 100) / 100) + ')';
  }

  function formatIOS(c) {
    var r = (c.r / 255).toFixed(2);
    var g = (c.g / 255).toFixed(2);
    var b = (c.b / 255).toFixed(2);
    var a = c.a.toFixed(2);
    return 'UIColor(red: ' + r + ', green: ' + g + ', blue: ' + b + ', alpha: ' + a + ')';
  }

  function formatAndroid(c) {
    // Android uses #AARRGGBB
    return '#' + toHex2(Math.round(c.a * 255)).toUpperCase() +
           toHex2(c.r).toUpperCase() +
           toHex2(c.g).toUpperCase() +
           toHex2(c.b).toUpperCase();
  }

  // ---- Color token data (read from CSS at init) ----
  var colorTokens = {};
  var style = getComputedStyle(document.documentElement);
  var colorVarEls = document.querySelectorAll('[data-color-var]');
  colorVarEls.forEach(function (el) {
    var varName = el.getAttribute('data-color-var');
    if (!colorTokens[varName]) {
      var raw = style.getPropertyValue(varName).trim();
      colorTokens[varName] = parseColor(raw);
    }
  });

  function updateColorValues(platform) {
    colorVarEls.forEach(function (el) {
      var varName = el.getAttribute('data-color-var');
      var c = colorTokens[varName];
      if (!c) return;
      if (platform === 'ios') el.textContent = formatIOS(c);
      else if (platform === 'android') el.textContent = formatAndroid(c);
      else el.textContent = formatCSS(c);
    });
  }

  // ---- Shared platform switch ----
  var currentPlatform = 'html';

  function switchPlatform(platform) {
    currentPlatform = platform;
    buttons.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.platform === platform);
    });
    // Update data-name-* elements (typography names)
    var attr = 'data-name-' + platform;
    nameEls.forEach(function (el) {
      var name = el.getAttribute(attr);
      if (name) el.textContent = name;
    });
    // Update color value elements
    updateColorValues(platform);
  }

  toggle.addEventListener('click', function (e) {
    var btn = e.target.closest('.platform-toggle__btn');
    if (!btn) return;
    switchPlatform(btn.dataset.platform);
  });

  // Initialize color values with default platform
  updateColorValues(currentPlatform);
})();

// ---- Chat Widget ----
(function () {
  var widget = document.getElementById('chat-widget');
  var fab = document.getElementById('chat-fab');
  var panel = document.getElementById('chat-panel');
  var closeBtn = document.getElementById('chat-close');
  var input = document.getElementById('chat-input');
  var sendBtn = document.getElementById('chat-send');
  var messages = document.getElementById('chat-messages');

  if (!widget || !fab) return;

  var RESPONSES = [
    'Great question! Check out the Design Tokens page for spacing, color, and typography values.',
    'You can find that in the Typography section — click "Typography" in the sidebar.',
    'The Getting Started page covers setup and contribution guidelines.',
    'Take a look at the Colors page for palette info and dark mode tokens.',
    'Components are coming soon! Stay tuned for buttons, cards, and more.',
    'For map-specific styles, visit the Map section in the sidebar.',
    'Good thinking! The Elevation & Borders page has shadow and radius tokens.',
    'I\'d recommend starting with the Design Tokens overview for a quick tour.'
  ];

  function toggle(open) {
    var isOpen = typeof open === 'boolean' ? open : !widget.classList.contains('is-open');
    widget.classList.toggle('is-open', isOpen);
    if (isOpen) {
      input.focus();
    }
  }

  fab.addEventListener('click', function () {
    toggle();
  });

  closeBtn.addEventListener('click', function () {
    toggle(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && widget.classList.contains('is-open')) {
      toggle(false);
    }
  });

  document.addEventListener('click', function (e) {
    if (widget.classList.contains('is-open') && !panel.contains(e.target) && !fab.contains(e.target)) {
      toggle(false);
    }
  });

  function addMessage(text, type) {
    var div = document.createElement('div');
    div.className = 'chat-widget__message chat-widget__message--' + type;
    var bubble = document.createElement('div');
    bubble.className = 'chat-widget__bubble';
    bubble.textContent = text;
    div.appendChild(bubble);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    sendBtn.disabled = true;

    setTimeout(function () {
      var response = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
      addMessage(response, 'bot');
    }, 600 + Math.random() * 400);
  }

  sendBtn.addEventListener('click', sendMessage);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });

  input.addEventListener('input', function () {
    sendBtn.disabled = !input.value.trim();
  });
})();
