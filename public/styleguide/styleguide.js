(function () {
  // ---- Navigation data ----
  var NAV_ITEMS = [
    {
      id: "getting-started",
      label: "Getting Started",
      page: "getting-started",
      enabled: true,
      children: [
        { id: "gs-overview", label: "Overview" },
        { id: "gs-playground", label: "Try It Out" },
        { id: "gs-token-picker", label: "Token Picker" },
        { id: "gs-principles", label: "Design Principles" },
        { id: "gs-workflow", label: "How We Work" },
        { id: "gs-tools", label: "Tools & Setup" },
        { id: "gs-contributing", label: "Contributing" },
      ],
    },
    {
      id: "tokens",
      label: "Design Tokens",
      page: "tokens",
      enabled: true,
      children: [
        { id: "tk-spacing", label: "Spacing Scale" },
        { id: "tk-radius", label: "Border Radius" },
        { id: "tk-surfaces", label: "Surfaces & Fills" },
        { id: "tk-colors", label: "Colors & Grays" },
        { id: "tk-typography", label: "Typography" },
        { id: "tk-shadows", label: "Shadows" },
        { id: "tk-zindex", label: "Z-Index" },
        { id: "tk-motion", label: "Motion" },
        { id: "tk-measures", label: "Measures" },
        { id: "tk-a11y", label: "Accessibility" },
        { id: "tk-anatomy", label: "Anatomy Example" },
        { id: "tk-recipes", label: "Token Recipes" },
        { id: "tk-export", label: "Export Formats" },
      ],
    },
    { divider: true },
    {
      id: "typography",
      label: "Typography",
      page: "typography",
      enabled: true,
      children: [
        { id: "font-families", label: "Font Families" },
        { id: "weight-scale", label: "Weight Scale" },
        { id: "width-variants", label: "Width Variants" },
        { id: "type-scale", label: "iOS Type Scale" },
        { id: "emphasis", label: "Emphasis" },
        { divider: true },
        { id: "text-colors", label: "Text Colors" },
        { id: "tabular-figures", label: "Numbers" },
        { id: "sf-mono", label: "SF Mono" },
        { id: "uppercase", label: "Uppercase" },
        { id: "truncation", label: "Truncation" },
        { id: "accessibility", label: "Accessibility" },
        { divider: true },
        { id: "chat-bubbles", label: "Chat Bubbles" },
        { id: "timestamps", label: "Timestamps" },
        { id: "navigation", label: "Navigation" },
        { id: "states", label: "States" },
        { id: "search", label: "Search" },
        { id: "multilingual", label: "Multilingual" },
        { id: "interactive", label: "Interactive" },
        { divider: true },
        { id: "type-when-to-use", label: "When to Use" },
        { id: "token-reference", label: "Token Reference" },
        { id: "usage-notes", label: "Usage Notes" },
      ],
    },
    {
      id: "colors",
      label: "Colors",
      page: "colors",
      enabled: true,
      children: [
        { id: "cl-palette", label: "Color Palette" },
        { id: "cl-semantic", label: "Label Colors" },
        { id: "cl-when-to-use", label: "When to Use" },
        { id: "cl-tints", label: "Semantic Colors" },
        { id: "cl-backgrounds", label: "Backgrounds & Fills" },
        { id: "cl-dark-mode", label: "Dark Mode" },
        { id: "cl-contrast", label: "Contrast & A11y" },
      ],
    },
    {
      id: "spacing",
      label: "Spacing & Layout",
      page: "spacing",
      enabled: true,
      children: [
        { id: "sp-scale", label: "Spacing Scale" },
        { id: "sp-when-to-use", label: "When to Use" },
        { id: "sp-grid", label: "Grid System" },
        { id: "sp-breakpoints", label: "Breakpoints" },
        { id: "sp-containers", label: "Containers" },
        { id: "sp-measure", label: "Line Lengths" },
      ],
    },
    {
      id: "elevation",
      label: "Elevation & Borders",
      page: "elevation",
      enabled: true,
      children: [
        { id: "el-shadows", label: "Shadows" },
        { id: "el-when-to-use", label: "When to Use" },
        { id: "el-radii", label: "Border Radii" },
        { id: "el-borders", label: "Borders & Dividers" },
        { id: "el-layers", label: "Z-Index Layers" },
      ],
    },
    {
      id: "motion",
      label: "Motion",
      page: "motion",
      enabled: true,
      children: [
        { id: "mo-easing", label: "Easing Curves" },
        { id: "mo-duration", label: "Duration Scale" },
        { id: "mo-transitions", label: "Transitions" },
        { id: "mo-principles", label: "Animation Principles" },
      ],
    },
    {
      id: "iconography",
      label: "Iconography",
      page: "iconography",
      enabled: true,
      children: [
        { id: "ic-set", label: "Icon Set" },
        { id: "ic-sizing", label: "Sizing & Stroke" },
        { id: "ic-usage", label: "Usage Guidelines" },
      ],
    },
    {
      id: "map",
      label: "Map",
      page: "map",
      enabled: true,
      children: [
        { id: "mp-labels", label: "Label Typography" },
        { id: "mp-pins", label: "Pins & Markers" },
        { id: "mp-colors", label: "Map Colors" },
        { id: "mp-surfaces", label: "Terrain & Surfaces" },
        { id: "mp-overlays", label: "Overlays & Routes" },
        { id: "mp-zoom", label: "Zoom & Density" },
        { id: "mp-dark", label: "Dark Mode" },
      ],
    },
    {
      id: "map-semantics",
      label: "Map Semantics",
      page: "map-semantics",
      enabled: true,
      children: [
        { id: "ms-core", label: "Core Principle" },
        { id: "ms-physical", label: "Physical Environment" },
        { id: "ms-infrastructure", label: "Infrastructure" },
        { id: "ms-contextual", label: "Contextual Conditions" },
        { id: "ms-user-position", label: "User Position & Intent" },
        { id: "ms-off-map", label: "What Stays Off the Map" },
        { id: "ms-safety", label: "Where Safety Belongs" },
        { id: "ms-overlay-rules", label: "Overlay Rules" },
        { id: "ms-overlay-stack", label: "Overlay Stacking" },
        { id: "ms-overlay-visual", label: "Overlay Behaviour" },
        { id: "ms-density", label: "Visual Density" },
        { id: "ms-rationale", label: "Rationale" },
      ],
    },
    { divider: true },
    {
      id: "components",
      label: "Components",
      page: "components",
      enabled: true,
      children: [
        { id: "cp-buttons", label: "Buttons" },
        { id: "cp-inputs", label: "Inputs & Forms" },
        { id: "cp-toggles", label: "Toggles & Checkboxes" },
        { id: "cp-cards", label: "Cards" },
        { id: "cp-lists", label: "Lists & Tables" },
        { id: "cp-badges", label: "Badges & Tags" },
        { id: "cp-tabs", label: "Tabs & Segments" },
        { id: "cp-tooltips", label: "Tooltips & Popovers" },
        { id: "cp-modals", label: "Modals & Sheets" },
        { id: "cp-toasts", label: "Toasts & Alerts" },
      ],
    },
    {
      id: "patterns",
      label: "Patterns",
      page: "patterns",
      enabled: true,
      children: [
        { id: "pt-forms", label: "Form Layouts" },
        { id: "pt-nav", label: "Navigation Patterns" },
        { id: "pt-data", label: "Data Display" },
        { id: "pt-empty", label: "Empty States" },
        { id: "pt-loading", label: "Loading States" },
        { id: "pt-errors", label: "Error Handling" },
        { id: "pt-onboarding", label: "Onboarding" },
      ],
    },
    {
      id: "flare",
      label: "Flare & Serendipity",
      page: "flare",
      enabled: true,
      children: [
        { id: "fl-overview", label: "Overview" },
        { id: "fl-serendipity", label: "Serendipity" },
        { id: "fl-magic-flare", label: "Magic Flare" },
        { id: "fl-event-invite", label: "Event Invitations" },
        { id: "fl-nearby", label: "Friend Nearby" },
        { id: "fl-grouped", label: "Grouped Notifications" },
        { id: "fl-principles", label: "Principles" },
        { id: "fl-anatomy", label: "Anatomy & Specs" },
      ],
    },
    {
      section: "iOS",
      page: "live-activities",
      enabled: true,
      children: [
        { id: "la-views", label: "Views" },
        { id: "la-routes", label: "Routes" },
        { id: "la-spacing", label: "Spacing" },
        { id: "la-colors", label: "Colors" },
        { id: "la-alerts", label: "Alerts" },
        { id: "la-standby", label: "StandBy" },
      ],
    },
    { divider: true },
    {
      id: "guidelines",
      label: "Guidelines",
      page: "guidelines",
      enabled: true,
      children: [
        { id: "gl-a11y", label: "Accessibility" },
        { id: "gl-responsive", label: "Responsive Design" },
        { id: "gl-voice", label: "Voice & Tone" },
        { id: "gl-dark", label: "Dark Mode" },
        { id: "gl-i18n", label: "Internationalization" },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      page: "resources",
      enabled: true,
      children: [
        { id: "res-inspiration", label: "Inspiration" },
        { id: "res-demos", label: "Demos" },
        { id: "res-tweets", label: "Tweets" },
        { id: "res-reading", label: "Reading" },
        { id: "res-tools", label: "Tools" },
      ],
    },
  ];

  var PAGE_CONFIG = {
    home: {
      title: "Livemap Design System",
      heading: "Livemap Design System",
      subtitle: "",
    },
    "getting-started": {
      title: "Livemap Design System",
      heading: "Getting Started",
      subtitle: "",
    },
    tokens: {
      title: "Livemap Design System",
      heading: "Design Tokens",
      subtitle: "",
    },
    typography: {
      title: "Livemap Design System",
      heading: "Typography",
      subtitle: "/ SF Pro",
    },
    colors: { title: "Livemap Design System", heading: "Colors", subtitle: "" },
    spacing: {
      title: "Livemap Design System",
      heading: "Spacing & Layout",
      subtitle: "",
    },
    elevation: {
      title: "Livemap Design System",
      heading: "Elevation & Borders",
      subtitle: "",
    },
    motion: { title: "Livemap Design System", heading: "Motion", subtitle: "" },
    iconography: {
      title: "Livemap Design System",
      heading: "Iconography",
      subtitle: "",
    },
    map: { title: "Livemap Design System", heading: "Map", subtitle: "" },
    "map-semantics": {
      title: "Livemap Design System",
      heading: "Map Semantics",
      subtitle: "",
    },
    components: {
      title: "Livemap Design System",
      heading: "Components",
      subtitle: "",
    },
    patterns: {
      title: "Livemap Design System",
      heading: "Patterns",
      subtitle: "",
    },
    "live-activities": {
      title: "Livemap Design System",
      heading: "iOS",
      subtitle: "/ Live Activities",
    },
    flare: {
      title: "Livemap Design System",
      heading: "Flare & Serendipity",
      subtitle: "",
    },
    guidelines: {
      title: "Livemap Design System",
      heading: "Guidelines",
      subtitle: "",
    },
    resources: {
      title: "Livemap Design System",
      heading: "Resources",
      subtitle: "",
    },
  };

  // ---- State ----
  var activePage = "home";

  // ---- DOM refs ----
  var sidebar = document.getElementById("app-sidebar");
  var sidebarNav = document.getElementById("app-sidebar-nav");
  var sidebarToggle = document.getElementById("sidebar-toggle");
  var headerHeading = document.getElementById("header-heading");
  var appContent = document.getElementById("app-content");
  var searchContainer = document.getElementById("sidebar-search");
  var platformToggle = document.getElementById("platform-toggle");

  // ---- Render sidebar ----
  function renderSidebar() {
    sidebarNav.innerHTML = "";
    NAV_ITEMS.forEach(function (item) {
      // Handle top-level dividers
      if (item.divider) {
        var d = document.createElement("div");
        d.className = "nav-divider";
        sidebarNav.appendChild(d);
        return;
      }

      // Handle section labels (non-first-level grouped items)
      if (item.section) {
        var label = document.createElement("div");
        label.className =
          "nav-section-label" + (activePage === item.page ? " is-active" : "");
        label.setAttribute("data-page", item.page);
        label.textContent = item.section;
        label.addEventListener("click", function () {
          if (activePage === item.page) {
            var sub = sidebarNav.querySelector(
              '.nav-subitems[data-parent-page="' + item.page + '"]',
            );
            if (sub) sub.classList.toggle("is-expanded");
            return;
          }
          switchPage(item.page);
          if (!(item.children && item.children.length > 0)) {
            closeMobileSidebar();
          }
        });
        sidebarNav.appendChild(label);

        if (item.children && item.children.length > 0) {
          var subNav = document.createElement("div");
          subNav.className =
            "nav-subitems" + (activePage === item.page ? " is-expanded" : "");
          subNav.setAttribute("data-parent-page", item.page);
          item.children.forEach(function (child) {
            var a = document.createElement("a");
            a.className = "nav-subitem";
            a.href = "#" + child.id;
            a.textContent = child.label;
            a.addEventListener("click", function (e) {
              e.preventDefault();
              closeMobileSidebar();
              var target = document.getElementById(child.id);
              if (target) {
                var page = document.getElementById("page-" + activePage);
                if (page) {
                  appContent.scrollTo({
                    top: target.offsetTop - page.offsetTop - 20,
                    behavior: "smooth",
                  });
                }
              }
            });
            subNav.appendChild(a);
          });
          sidebarNav.appendChild(subNav);
        }
        return;
      }

      var div = document.createElement("div");
      div.className =
        "nav-item" +
        (item.id === activePage ? " is-active" : "") +
        (!item.enabled ? " is-disabled" : "");
      div.setAttribute("data-page", item.page);
      div.innerHTML = '<span class="nav-item__label">' + item.label + "</span>";
      div.addEventListener("click", function () {
        if (activePage === item.page) {
          var sub = sidebarNav.querySelector(
            '.nav-subitems[data-parent-page="' + item.page + '"]',
          );
          if (sub) sub.classList.toggle("is-expanded");
          return;
        }
        switchPage(item.page);
        if (!(item.children && item.children.length > 0)) {
          closeMobileSidebar();
        }
      });
      sidebarNav.appendChild(div);

      if (item.children && item.children.length > 0) {
        var subNav = document.createElement("div");
        subNav.className =
          "nav-subitems" + (item.id === activePage ? " is-expanded" : "");
        subNav.setAttribute("data-parent-page", item.page);

        item.children.forEach(function (child) {
          if (child.divider) {
            var d = document.createElement("div");
            d.className = "nav-divider";
            subNav.appendChild(d);
          } else {
            var a = document.createElement("a");
            a.className = "nav-subitem";
            a.href = "#" + child.id;
            a.textContent = child.label;
            a.addEventListener("click", function (e) {
              e.preventDefault();
              closeMobileSidebar();
              var target = document.getElementById(child.id);
              if (target) {
                var page = document.getElementById("page-" + activePage);
                if (page) {
                  appContent.scrollTo({
                    top: target.offsetTop - page.offsetTop - 20,
                    behavior: "smooth",
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
    if (path.endsWith("/index.html")) return path.slice(0, -10);
    var segments = path.replace(/\/$/, "").split("/");
    var last = segments[segments.length - 1];
    if (PAGE_CONFIG[last]) segments.pop();
    return segments.join("/") + "/";
  })();

  function getPageFromURL() {
    var path = location.pathname.replace(/\/$/, "");
    var segment = path.slice(basePath.length);
    return PAGE_CONFIG[segment] ? segment : null;
  }

  // ---- Switch page ----
  function switchPage(pageId, skipPush) {
    activePage = pageId;

    // Update URL
    if (!skipPush) {
      var url = pageId === "home" ? basePath : basePath + pageId;
      history.pushState({ page: pageId }, "", url);
    }

    // Toggle page visibility
    var pages = document.querySelectorAll(".content-page");
    for (var i = 0; i < pages.length; i++) {
      pages[i].hidden = pages[i].id !== "page-" + pageId;
    }

    // Re-render Twitter embeds when resources page becomes visible
    if (pageId === "resources" && window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(document.getElementById("page-resources"));
    }

    // Update header
    var config = PAGE_CONFIG[pageId];
    if (config) {
      headerHeading.innerHTML =
        config.heading +
        (config.subtitle ? " <span>" + config.subtitle + "</span>" : "");
    }

    // Update sidebar active states
    var navItems = sidebarNav.querySelectorAll(".nav-item");
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle(
        "is-active",
        navItems[i].getAttribute("data-page") === pageId,
      );
    }
    var sectionLabels = sidebarNav.querySelectorAll(".nav-section-label");
    for (var i = 0; i < sectionLabels.length; i++) {
      sectionLabels[i].classList.toggle(
        "is-active",
        sectionLabels[i].getAttribute("data-page") === pageId,
      );
    }
    var subItems = sidebarNav.querySelectorAll(".nav-subitems");
    for (var i = 0; i < subItems.length; i++) {
      subItems[i].classList.toggle(
        "is-expanded",
        subItems[i].getAttribute("data-parent-page") === pageId,
      );
    }

    // Show/hide search (typography only) and platform toggle (typography + colors)
    searchContainer.style.display = "";
    platformToggle.style.display =
      pageId === "typography" || pageId === "colors" || pageId === "components"
        ? ""
        : "none";

    // Close mobile search on navigation (sidebar handled by callers)
    closeMobileSearch();

    // Scroll to top
    appContent.scrollTop = 0;
  }

  window.addEventListener("popstate", function () {
    var pageId = getPageFromURL() || "home";
    if (pageId !== activePage) {
      switchPage(pageId, true);
      closeMobileSidebar();
    }
  });

  // ---- Sidebar collapse ----
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("is-collapsed");
  });

  // ---- Mobile menu ----
  var mobileMenuBtn = document.getElementById("mobile-menu");
  var sidebarBackdrop = document.getElementById("sidebar-backdrop");

  function closeMobileSidebar() {
    sidebar.classList.remove("is-open");
    sidebarBackdrop.classList.remove("is-visible");
    document.body.style.overflow = "";
  }

  function openMobileSidebar() {
    sidebar.classList.add("is-open");
    sidebarBackdrop.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeMobileSidebar);
  }

  // Close mobile sidebar on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar.classList.contains("is-open")) {
      closeMobileSidebar();
    }
  });

  // ---- Mobile search toggle ----
  var mobileSearchBtn = document.getElementById("mobile-search");
  var appHeader = document.querySelector(".app-header");
  var searchInput = document.getElementById("search-input");

  function closeMobileSearch() {
    if (appHeader) appHeader.classList.remove("search-open");
  }

  if (mobileSearchBtn && appHeader) {
    mobileSearchBtn.addEventListener("click", function () {
      var isOpen = appHeader.classList.toggle("search-open");
      if (isOpen && searchInput) {
        searchInput.focus();
      }
    });
  }

  // Close mobile search on Escape
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      appHeader &&
      appHeader.classList.contains("search-open")
    ) {
      closeMobileSearch();
    }
  });

  // ---- Sidebar action proxies (mobile) ----
  // Forward sidebar duplicate buttons to the header originals
  var sidebarThemeToggle = document.getElementById("sidebar-theme-toggle");
  var headerThemeToggle = document.getElementById("theme-toggle");
  if (sidebarThemeToggle && headerThemeToggle) {
    sidebarThemeToggle.addEventListener("click", function () {
      headerThemeToggle.click();
    });
  }

  var sidebarInspectToggle = document.getElementById("sidebar-inspect-toggle");
  var headerInspectToggle = document.getElementById("inspect-toggle");
  if (sidebarInspectToggle && headerInspectToggle) {
    sidebarInspectToggle.addEventListener("click", function () {
      headerInspectToggle.click();
      // Sync the active state
      var isActive = headerInspectToggle.classList.contains("is-active");
      sidebarInspectToggle.classList.toggle("is-active", isActive);
      sidebarInspectToggle.setAttribute("aria-pressed", String(isActive));
    });
  }

  // ---- Brand click → home ----
  var sidebarBrand = document.getElementById("sidebar-brand");
  if (sidebarBrand) {
    sidebarBrand.style.cursor = "pointer";
    sidebarBrand.addEventListener("click", function () {
      switchPage("home");
      closeMobileSidebar();
    });
  }

  // ---- Homepage card navigation ----
  var homeCards = document.querySelectorAll("[data-home-page]");
  for (var i = 0; i < homeCards.length; i++) {
    (function (card) {
      card.addEventListener("click", function () {
        switchPage(card.getAttribute("data-home-page"));
      });
    })(homeCards[i]);
  }

  // ---- Scroll spy ----
  // Build a map of page id → child section ids for all pages with children
  var spySectionsMap = {};
  NAV_ITEMS.forEach(function (item) {
    if (!item.divider && item.children && item.children.length > 0) {
      var page = item.page || (item.section ? item.page : null);
      if (page) {
        spySectionsMap[page] = item.children.filter(function (c) {
          return !c.divider;
        });
      }
    }
  });

  function updateScrollSpy() {
    var sections = spySectionsMap[activePage];
    if (!sections) return;
    var current = "";
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
    var links = sidebarNav.querySelectorAll(
      '.nav-subitems[data-parent-page="' + activePage + '"] .nav-subitem',
    );
    for (var j = 0; j < links.length; j++) {
      var href = links[j].getAttribute("href");
      var id = href ? href.slice(1) : "";
      links[j].classList.toggle("is-active", id === current);
    }
  }

  appContent.addEventListener("scroll", updateScrollSpy, { passive: true });

  // ---- Initialize ----
  renderSidebar();
  var initialPage = getPageFromURL() || "home";
  switchPage(initialPage, true);
  setTimeout(updateScrollSpy, 100);

  window.__switchPage = switchPage;
  window.__pageConfig = PAGE_CONFIG;
})();

// ---- Instant search with highlighting (cross-page) ----
(function () {
  var input = document.getElementById("search-input");
  var clearBtn = document.getElementById("search-clear");
  var container = document.getElementById("sidebar-search");
  var meta = document.getElementById("search-meta");
  var prevBtn = document.getElementById("search-prev");
  var nextBtn = document.getElementById("search-next");
  var appContent = document.getElementById("app-content");
  var allPages = document.querySelectorAll(".content-page");

  var marks = [];
  var currentIdx = -1;
  var debounceTimer = null;

  function clearHighlights() {
    var existing = document.querySelectorAll("mark.search-hl");
    for (var i = existing.length - 1; i >= 0; i--) {
      var m = existing[i];
      var parent = m.parentNode;
      parent.replaceChild(document.createTextNode(m.textContent), m);
      parent.normalize();
    }
    marks = [];
    currentIdx = -1;
  }

  function getPageName(pageEl) {
    if (!pageEl) return "";
    var pageId = pageEl.id.replace(/^page-/, "");
    var config = window.__pageConfig && window.__pageConfig[pageId];
    return config ? config.heading : pageId;
  }

  function highlightMatches(query) {
    clearHighlights();
    if (!query || query.length < 2) {
      updateMeta(0);
      return;
    }

    var lowerQuery = query.toLowerCase();

    for (var p = 0; p < allPages.length; p++) {
      var page = allPages[p];
      if (page.id === "page-home") continue;

      var walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT, null);
      var textNodes = [];

      while (walker.nextNode()) {
        var parent = walker.currentNode.parentNode;
        if (parent.closest && parent.closest("script, style, mark.search-hl"))
          continue;
        if (
          walker.currentNode.textContent.toLowerCase().indexOf(lowerQuery) !==
          -1
        ) {
          textNodes.push(walker.currentNode);
        }
      }

      for (var i = 0; i < textNodes.length; i++) {
        highlightTextNode(textNodes[i], lowerQuery);
      }
    }

    marks = Array.from(document.querySelectorAll("mark.search-hl"));
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
      var mark = document.createElement("mark");
      mark.className = "search-hl";
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
      meta.textContent = "No matches";
    } else if (count > 0) {
      var pageEl =
        marks[currentIdx] && marks[currentIdx].closest(".content-page");
      var pageName = getPageName(pageEl);
      meta.textContent =
        currentIdx +
        1 +
        " of " +
        count +
        (pageName ? " \u2014 " + pageName : "");
    } else {
      meta.innerHTML = "<kbd>/</kbd> to search";
    }
    prevBtn.disabled = count <= 1;
    nextBtn.disabled = count <= 1;
  }

  function goToMatch(idx) {
    if (marks.length === 0) return;
    if (currentIdx >= 0 && currentIdx < marks.length) {
      marks[currentIdx].classList.remove("search-hl--current");
    }
    currentIdx = ((idx % marks.length) + marks.length) % marks.length;
    var mark = marks[currentIdx];
    mark.classList.add("search-hl--current");

    // Switch to the page containing this match
    var pageEl = mark.closest(".content-page");
    if (pageEl && window.__switchPage) {
      var pageId = pageEl.id.replace(/^page-/, "");
      window.__switchPage(pageId, true);
      requestAnimationFrame(function () {
        mark.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    } else {
      mark.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    updateMeta(marks.length);
  }

  input.addEventListener("input", function () {
    var q = input.value.trim();
    container.classList.toggle("sidebar__search--has-query", q.length > 0);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      highlightMatches(q);
    }, 120);
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    container.classList.remove("sidebar__search--has-query");
    clearHighlights();
    updateMeta(0);
    input.focus();
  });

  prevBtn.addEventListener("click", function () {
    goToMatch(currentIdx - 1);
  });
  nextBtn.addEventListener("click", function () {
    goToMatch(currentIdx + 1);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      goToMatch(e.shiftKey ? currentIdx - 1 : currentIdx + 1);
    }
    if (e.key === "Escape") {
      input.value = "";
      container.classList.remove("sidebar__search--has-query");
      clearHighlights();
      updateMeta(0);
      input.blur();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target.isContentEditable)
        return;
      e.preventDefault();
      input.focus();
      input.select();
    }
  });

  updateMeta(0);
})();

// ---- Platform name toggle + color value conversion ----
(function () {
  var toggle = document.getElementById("platform-toggle");
  var buttons = toggle.querySelectorAll(".platform-toggle__btn");
  var nameEls = document.querySelectorAll("[data-name-html]");

  // ---- Color parsing helpers ----
  function parseColor(raw) {
    raw = raw.trim();
    // hex: #rgb, #rrggbb
    var hexMatch = raw.match(/^#([0-9a-f]{3,8})$/i);
    if (hexMatch) {
      var hex = hexMatch[1];
      if (hex.length === 3)
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      if (hex.length === 6) hex += "ff";
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        a: parseInt(hex.slice(6, 8), 16) / 255,
      };
    }
    // rgba(r, g, b, a) or rgb(r, g, b)
    var rgbaMatch = raw.match(
      /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)$/,
    );
    if (rgbaMatch) {
      return {
        r: parseInt(rgbaMatch[1]),
        g: parseInt(rgbaMatch[2]),
        b: parseInt(rgbaMatch[3]),
        a: rgbaMatch[4] !== undefined ? parseFloat(rgbaMatch[4]) : 1,
      };
    }
    return null;
  }

  function toHex2(n) {
    return ("0" + Math.round(n).toString(16)).slice(-2);
  }

  function formatCSS(c) {
    if (c.a >= 0.999) return "#" + toHex2(c.r) + toHex2(c.g) + toHex2(c.b);
    return (
      "rgba(" +
      c.r +
      ", " +
      c.g +
      ", " +
      c.b +
      ", " +
      Math.round(c.a * 100) / 100 +
      ")"
    );
  }

  function formatIOS(c) {
    var r = (c.r / 255).toFixed(2);
    var g = (c.g / 255).toFixed(2);
    var b = (c.b / 255).toFixed(2);
    var a = c.a.toFixed(2);
    return (
      "UIColor(red: " +
      r +
      ", green: " +
      g +
      ", blue: " +
      b +
      ", alpha: " +
      a +
      ")"
    );
  }

  function formatAndroid(c) {
    // Android uses #AARRGGBB
    return (
      "#" +
      toHex2(Math.round(c.a * 255)).toUpperCase() +
      toHex2(c.r).toUpperCase() +
      toHex2(c.g).toUpperCase() +
      toHex2(c.b).toUpperCase()
    );
  }

  // ---- Color token data (read from CSS at init) ----
  var colorTokens = {};
  var style = getComputedStyle(document.documentElement);
  var colorVarEls = document.querySelectorAll("[data-color-var]");
  colorVarEls.forEach(function (el) {
    var varName = el.getAttribute("data-color-var");
    if (!colorTokens[varName]) {
      var raw = style.getPropertyValue(varName).trim();
      colorTokens[varName] = parseColor(raw);
    }
  });

  function updateColorValues(platform) {
    colorVarEls.forEach(function (el) {
      var varName = el.getAttribute("data-color-var");
      var c = colorTokens[varName];
      if (!c) return;
      if (platform === "ios") el.textContent = formatIOS(c);
      else if (platform === "android") el.textContent = formatAndroid(c);
      else el.textContent = formatCSS(c);
    });
  }

  // ---- Shared platform switch ----
  var currentPlatform = "html";

  function switchPlatform(platform) {
    currentPlatform = platform;
    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.platform === platform);
    });
    // Update data-name-* elements (typography names)
    var attr = "data-name-" + platform;
    nameEls.forEach(function (el) {
      var name = el.getAttribute(attr);
      if (name === "hidden") {
        el.style.display = "none";
      } else {
        el.style.display = "";
        if (name) el.textContent = name;
      }
    });
    // Override font-family tokens for Android (Google Sans)
    var root = document.documentElement;
    if (platform === "android") {
      root.style.setProperty("--font-family", '"Google Sans", sans-serif');
      root.style.setProperty(
        "--font-family-display",
        '"Google Sans Display", "Google Sans", sans-serif',
      );
      root.style.setProperty(
        "--font-family-text",
        '"Google Sans Text", "Google Sans", sans-serif',
      );
      root.style.setProperty(
        "--font-family-rounded",
        '"Google Sans", sans-serif',
      );
    } else {
      root.style.removeProperty("--font-family");
      root.style.removeProperty("--font-family-display");
      root.style.removeProperty("--font-family-text");
      root.style.removeProperty("--font-family-rounded");
    }
    // Update color value elements
    updateColorValues(platform);
  }

  toggle.addEventListener("click", function (e) {
    var btn = e.target.closest(".platform-toggle__btn");
    if (!btn) return;
    switchPlatform(btn.dataset.platform);
  });

  // Initialize color values with default platform
  updateColorValues(currentPlatform);
})();

// ---- Chat Widget ----
(function () {
  var widget = document.getElementById("chat-widget");
  var fab = document.getElementById("chat-fab");
  var panel = document.getElementById("chat-panel");
  var closeBtn = document.getElementById("chat-close");
  var input = document.getElementById("chat-input");
  var sendBtn = document.getElementById("chat-send");
  var messages = document.getElementById("chat-messages");

  if (!widget || !fab) return;

  var RESPONSES = [
    "Great question! Check out the Design Tokens page for spacing, color, and typography values.",
    'You can find that in the Typography section — click "Typography" in the sidebar.',
    "The Getting Started page covers setup and contribution guidelines.",
    "Take a look at the Colors page for palette info and dark mode tokens.",
    "Components are coming soon! Stay tuned for buttons, cards, and more.",
    "For map-specific styles, visit the Map section in the sidebar.",
    "Good thinking! The Elevation & Borders page has shadow and radius tokens.",
    "I'd recommend starting with the Design Tokens overview for a quick tour.",
  ];

  function toggle(open) {
    var isOpen =
      typeof open === "boolean" ? open : !widget.classList.contains("is-open");
    widget.classList.toggle("is-open", isOpen);
    if (isOpen) {
      input.focus();
    }
  }

  fab.addEventListener("click", function () {
    toggle();
  });

  closeBtn.addEventListener("click", function () {
    toggle(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && widget.classList.contains("is-open")) {
      toggle(false);
    }
  });

  document.addEventListener("click", function (e) {
    if (
      widget.classList.contains("is-open") &&
      !panel.contains(e.target) &&
      !fab.contains(e.target)
    ) {
      toggle(false);
    }
  });

  function addMessage(text, type) {
    var div = document.createElement("div");
    div.className = "chat-widget__message chat-widget__message--" + type;
    var bubble = document.createElement("div");
    bubble.className = "chat-widget__bubble";
    bubble.textContent = text;
    div.appendChild(bubble);
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function sendMessage() {
    var text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    sendBtn.disabled = true;

    setTimeout(
      function () {
        var response = RESPONSES[Math.floor(Math.random() * RESPONSES.length)];
        addMessage(response, "bot");
      },
      600 + Math.random() * 400,
    );
  }

  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  input.addEventListener("input", function () {
    sendBtn.disabled = !input.value.trim();
  });
})();

// ---- Dark mode toggle ----
(function () {
  var toggle = document.getElementById("theme-toggle");
  var html = document.documentElement;

  // Restore saved preference
  var saved = localStorage.getItem("livemap-ds-theme");
  if (saved === "dark") {
    html.setAttribute("data-theme", "dark");
  }

  toggle.addEventListener("click", function () {
    var isDark = html.getAttribute("data-theme") === "dark";
    if (isDark) {
      html.removeAttribute("data-theme");
      localStorage.removeItem("livemap-ds-theme");
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("livemap-ds-theme", "dark");
    }
  });
})();

// ---- Component snippet tabs & copy ----
(function () {
  document.addEventListener("click", function (e) {
    // Tab switching
    var tab = e.target.closest(".comp-snippet__tab");
    if (tab) {
      var body = tab.closest(".comp-snippet__body");
      var tabs = body.querySelectorAll(".comp-snippet__tab");
      var pres = body.querySelectorAll(".comp-snippet__pre");
      var lang = tab.getAttribute("data-lang");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.toggle("is-active", tabs[i] === tab);
      }
      for (var i = 0; i < pres.length; i++) {
        pres[i].hidden = pres[i].getAttribute("data-lang") !== lang;
      }
      return;
    }

    // Copy button
    var copyBtn = e.target.closest(".comp-snippet__copy");
    if (copyBtn) {
      var body = copyBtn.closest(".comp-snippet__body");
      var visible = body.querySelector(".comp-snippet__pre:not([hidden]) code");
      if (visible) {
        navigator.clipboard.writeText(visible.textContent).then(function () {
          var orig = copyBtn.textContent;
          copyBtn.textContent = "Copied!";
          setTimeout(function () {
            copyBtn.textContent = orig;
          }, 1500);
        });
      }
    }
  });
})();

// ---- Token export generation ----
(function () {
  var exportTabs = document.getElementById("export-tabs");
  var exportCopy = document.getElementById("export-copy");
  var jsonPre = document.getElementById("export-json");
  var swiftPre = document.getElementById("export-swift");
  var kotlinPre = document.getElementById("export-kotlin");

  if (!exportTabs) return;

  // Token definitions — mirrors tokens.css
  var tokens = {
    spacing: {
      "space-2": 2,
      "space-4": 4,
      "space-6": 6,
      "space-8": 8,
      "space-10": 10,
      "space-12": 12,
      "space-16": 16,
      "space-20": 20,
      "space-24": 24,
      "space-32": 32,
      "space-40": 40,
      "space-48": 48,
      "space-64": 64,
      "space-80": 80,
      "space-96": 96,
    },
    radius: {
      "radius-xs": 6,
      "radius-sm": 8,
      "radius-md": 12,
      "radius-lg": 16,
      "radius-xl": 20,
      "radius-full": 9999,
    },
    color: {
      "color-label": "#1c1c1e",
      "color-label-secondary": "rgba(60, 60, 67, 0.75)",
      "color-label-tertiary": "rgba(60, 60, 67, 0.30)",
      "color-label-quaternary": "rgba(60, 60, 67, 0.18)",
      "color-tint-destructive": "#ff3b30",
      "color-tint-positive": "#34c759",
      "color-tint-action": "#007aff",
      "color-surface": "#ffffff",
      "color-surface-secondary": "#fafafc",
      "color-fill": "rgba(0, 0, 0, 0.04)",
      "color-fill-secondary": "rgba(0, 0, 0, 0.03)",
      "color-separator": "rgba(0, 0, 0, 0.06)",
      "color-separator-subtle": "rgba(0, 0, 0, 0.04)",
      "color-gray": "#8e8e93",
      "color-gray-2": "#aeaeb2",
      "color-gray-3": "#c7c7cc",
      "color-gray-4": "#d1d1d6",
      "color-gray-5": "#e5e5ea",
    },
    colorDark: {
      "color-label": "#ffffff",
      "color-label-secondary": "rgba(235, 235, 245, 0.60)",
      "color-label-tertiary": "rgba(235, 235, 245, 0.30)",
      "color-label-quaternary": "rgba(235, 235, 245, 0.18)",
      "color-tint-destructive": "#ff453a",
      "color-tint-positive": "#30d158",
      "color-tint-action": "#0a84ff",
      "color-surface": "#1c1c1e",
      "color-surface-secondary": "#2c2c2e",
      "color-fill": "rgba(255, 255, 255, 0.06)",
      "color-fill-secondary": "rgba(255, 255, 255, 0.04)",
      "color-separator": "rgba(255, 255, 255, 0.08)",
      "color-separator-subtle": "rgba(255, 255, 255, 0.05)",
      "color-gray": "#8e8e93",
      "color-gray-2": "#636366",
      "color-gray-3": "#48484a",
      "color-gray-4": "#3a3a3c",
      "color-gray-5": "#2c2c2e",
    },
    typography: {
      "font-size-display": 34,
      "font-size-heading-lg": 28,
      "font-size-heading-md": 22,
      "font-size-heading-sm": 20,
      "font-size-label": 17,
      "font-size-body": 17,
      "font-size-detail": 16,
      "font-size-small": 15,
      "font-size-fine": 13,
      "font-size-micro": 12,
      "font-size-nano": 11,
    },
    shadow: {
      "shadow-xs": "0 1px 2px rgba(0,0,0,0.04), 0 0 0 0.5px rgba(0,0,0,0.03)",
      "shadow-sm": "0 1px 3px rgba(0,0,0,0.06), 0 0 0 0.5px rgba(0,0,0,0.03)",
      "shadow-md": "0 4px 12px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
      "shadow-lg": "0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.04)",
      "shadow-xl": "0 16px 48px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.06)",
    },
    zIndex: {
      "z-base": 0,
      "z-raised": 1,
      "z-dropdown": 100,
      "z-sticky": 200,
      "z-overlay": 300,
      "z-modal": 400,
      "z-popover": 500,
      "z-toast": 600,
    },
    duration: {
      "duration-instant": 0,
      "duration-fast": 100,
      "duration-normal": 200,
      "duration-moderate": 300,
      "duration-slow": 500,
    },
  };

  // ---- JSON output ----
  function buildJSON() {
    var obj = {
      spacing: {},
      radius: {},
      color: { light: {}, dark: {} },
      typography: { fontSize: {} },
      shadow: {},
      zIndex: {},
      duration: {},
    };
    var k;
    for (k in tokens.spacing) obj.spacing[k] = tokens.spacing[k];
    for (k in tokens.radius) obj.radius[k] = tokens.radius[k];
    for (k in tokens.color) obj.color.light[k] = tokens.color[k];
    for (k in tokens.colorDark) obj.color.dark[k] = tokens.colorDark[k];
    for (k in tokens.typography)
      obj.typography.fontSize[k] = tokens.typography[k];
    for (k in tokens.shadow) obj.shadow[k] = tokens.shadow[k];
    for (k in tokens.zIndex) obj.zIndex[k] = tokens.zIndex[k];
    for (k in tokens.duration) obj.duration[k] = tokens.duration[k];
    return JSON.stringify(obj, null, 2);
  }

  // ---- Swift output ----
  function toCamel(name) {
    return name.replace(/-([a-z0-9])/g, function (_, c) {
      return c.toUpperCase();
    });
  }

  function buildSwift() {
    var lines = ["import SwiftUI", "", "// Auto-generated from tokens.css", ""];
    lines.push("enum Spacing {");
    for (var k in tokens.spacing)
      lines.push(
        "  static let " +
          toCamel(k.replace("space-", "s")) +
          ": CGFloat = " +
          tokens.spacing[k],
      );
    lines.push("}", "");
    lines.push("enum Radius {");
    for (var k in tokens.radius)
      lines.push(
        "  static let " +
          toCamel(k.replace("radius-", "")) +
          ": CGFloat = " +
          tokens.radius[k],
      );
    lines.push("}", "");
    lines.push("enum FontSize {");
    for (var k in tokens.typography)
      lines.push(
        "  static let " +
          toCamel(k.replace("font-size-", "")) +
          ": CGFloat = " +
          tokens.typography[k],
      );
    lines.push("}", "");
    lines.push("enum ZIndex {");
    for (var k in tokens.zIndex)
      lines.push(
        "  static let " +
          toCamel(k.replace("z-", "")) +
          ": CGFloat = " +
          tokens.zIndex[k],
      );
    lines.push("}", "");
    lines.push("enum Duration {");
    for (var k in tokens.duration)
      lines.push(
        "  static let " +
          toCamel(k.replace("duration-", "")) +
          ": Double = " +
          tokens.duration[k] / 1000,
      );
    lines.push("}", "");
    lines.push("enum ColorToken {");
    lines.push("  // Light");
    for (var k in tokens.color)
      lines.push(
        "  static let " +
          toCamel(k.replace("color-", "")) +
          ' = "' +
          tokens.color[k] +
          '"',
      );
    lines.push("  // Dark");
    for (var k in tokens.colorDark)
      lines.push(
        "  static let " +
          toCamel(k.replace("color-", "")) +
          'Dark = "' +
          tokens.colorDark[k] +
          '"',
      );
    lines.push("}");
    return lines.join("\n");
  }

  // ---- Kotlin output ----
  function buildKotlin() {
    var lines = [
      "package com.livemap.design",
      "",
      "import androidx.compose.ui.unit.dp",
      "import androidx.compose.ui.unit.sp",
      "",
      "// Auto-generated from tokens.css",
      "",
    ];
    lines.push("object Spacing {");
    for (var k in tokens.spacing)
      lines.push(
        "  val " +
          toCamel(k.replace("space-", "s")) +
          " = " +
          tokens.spacing[k] +
          ".dp",
      );
    lines.push("}", "");
    lines.push("object Radius {");
    for (var k in tokens.radius)
      lines.push(
        "  val " +
          toCamel(k.replace("radius-", "")) +
          " = " +
          tokens.radius[k] +
          ".dp",
      );
    lines.push("}", "");
    lines.push("object FontSize {");
    for (var k in tokens.typography)
      lines.push(
        "  val " +
          toCamel(k.replace("font-size-", "")) +
          " = " +
          tokens.typography[k] +
          ".sp",
      );
    lines.push("}", "");
    lines.push("object ZIndex {");
    for (var k in tokens.zIndex)
      lines.push(
        "  val " +
          toCamel(k.replace("z-", "")) +
          " = " +
          tokens.zIndex[k] +
          "f",
      );
    lines.push("}", "");
    lines.push("object Duration {");
    for (var k in tokens.duration)
      lines.push(
        "  val " +
          toCamel(k.replace("duration-", "")) +
          " = " +
          tokens.duration[k] +
          "L // ms",
      );
    lines.push("}", "");
    lines.push("object ColorToken {");
    lines.push("  // Light");
    for (var k in tokens.color)
      lines.push(
        "  const val " +
          toCamel(k.replace("color-", "")) +
          ' = "' +
          tokens.color[k] +
          '"',
      );
    lines.push("  // Dark");
    for (var k in tokens.colorDark)
      lines.push(
        "  const val " +
          toCamel(k.replace("color-", "")) +
          'Dark = "' +
          tokens.colorDark[k] +
          '"',
      );
    lines.push("}");
    return lines.join("\n");
  }

  // Populate
  jsonPre.textContent = buildJSON();
  swiftPre.textContent = buildSwift();
  kotlinPre.textContent = buildKotlin();

  // Tab switching
  var allTabs = exportTabs.querySelectorAll(".export-tab");
  var allPres = [jsonPre, swiftPre, kotlinPre];
  var formatMap = { json: jsonPre, swift: swiftPre, kotlin: kotlinPre };

  exportTabs.addEventListener("click", function (e) {
    var tab = e.target.closest(".export-tab");
    if (!tab) return;
    var fmt = tab.getAttribute("data-format");
    for (var i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.toggle("is-active", allTabs[i] === tab);
    }
    for (var i = 0; i < allPres.length; i++) {
      allPres[i].hidden = allPres[i] !== formatMap[fmt];
    }
  });

  // Copy
  exportCopy.addEventListener("click", function () {
    var visible = document.querySelector(".export-block__pre:not([hidden])");
    if (visible) {
      navigator.clipboard.writeText(visible.textContent).then(function () {
        var orig = exportCopy.textContent;
        exportCopy.textContent = "Copied!";
        setTimeout(function () {
          exportCopy.textContent = orig;
        }, 1500);
      });
    }
  });

  // ===========================================================================
  // Token Picker
  // ===========================================================================
  var TOKEN_PICKER_DATA = [
    // Typography
    {
      domain: "Typography",
      scenario: "Page title, hero",
      token: "--font-size-display",
      detail: "34px \u00b7 Regular",
      tags: ["page", "hero", "landing", "title", "display"],
    },
    {
      domain: "Typography",
      scenario: "Sheet header",
      token: "--font-size-heading-lg",
      detail: "28px \u00b7 Regular",
      tags: ["sheet", "modal", "header", "dialog"],
    },
    {
      domain: "Typography",
      scenario: "Section heading",
      token: "--font-size-heading-md",
      detail: "22px \u00b7 Regular",
      tags: ["section", "heading", "page", "layout"],
    },
    {
      domain: "Typography",
      scenario: "Group title",
      token: "--font-size-heading-sm",
      detail: "20px \u00b7 Regular",
      tags: ["group", "title", "sidebar"],
    },
    {
      domain: "Typography",
      scenario: "Card title, nav title, button",
      token: "--font-size-label",
      detail: "17px \u00b7 Semibold",
      tags: ["card", "nav", "button", "title", "navigation", "action", "list"],
    },
    {
      domain: "Typography",
      scenario: "Body text, descriptions",
      token: "--font-size-body",
      detail: "17px \u00b7 Regular",
      tags: [
        "body",
        "description",
        "paragraph",
        "content",
        "card",
        "modal",
        "form",
        "sheet",
      ],
    },
    {
      domain: "Typography",
      scenario: "Card subtitle, secondary line",
      token: "--font-size-detail",
      detail: "16px \u00b7 Regular",
      tags: ["card", "subtitle", "secondary", "list", "detail"],
    },
    {
      domain: "Typography",
      scenario: "Tab label, metadata, distances",
      token: "--font-size-small",
      detail: "15px \u00b7 Regular",
      tags: ["tab", "metadata", "distance", "label", "tag", "chip"],
    },
    {
      domain: "Typography",
      scenario: "Footnotes, timestamps",
      token: "--font-size-fine",
      detail: "13px \u00b7 Regular",
      tags: ["footnote", "timestamp", "caption", "map", "overlay"],
    },
    {
      domain: "Typography",
      scenario: "Legal text, map attribution",
      token: "--font-size-micro",
      detail: "12px \u00b7 Regular",
      tags: ["legal", "map", "attribution", "disclaimer"],
    },
    {
      domain: "Typography",
      scenario: "Badge counts, coordinates",
      token: "--font-size-nano",
      detail: "11px \u00b7 Regular",
      tags: ["badge", "count", "coordinate", "indicator", "tag"],
    },

    // Color
    {
      domain: "Color",
      scenario: "Titles, primary content",
      token: "--color-label",
      detail: "#1c1c1e",
      tags: [
        "title",
        "heading",
        "card",
        "primary",
        "content",
        "nav",
        "button",
        "list",
        "modal",
        "sheet",
        "hero",
      ],
    },
    {
      domain: "Color",
      scenario: "Descriptions, metadata",
      token: "--color-label-secondary",
      detail: "rgba(60,60,67,.75)",
      tags: [
        "description",
        "metadata",
        "subtitle",
        "secondary",
        "card",
        "list",
        "body",
      ],
    },
    {
      domain: "Color",
      scenario: "Placeholders, disabled",
      token: "--color-label-tertiary",
      detail: "rgba(60,60,67,.30)",
      tags: ["placeholder", "disabled", "input", "search", "form"],
    },
    {
      domain: "Color",
      scenario: "Decorative only",
      token: "--color-label-quaternary",
      detail: "rgba(60,60,67,.18)",
      tags: ["decorative", "watermark", "ghost"],
    },
    {
      domain: "Color",
      scenario: "Links, primary actions",
      token: "--color-tint-action",
      detail: "#007aff",
      tags: [
        "link",
        "action",
        "button",
        "primary",
        "interactive",
        "nav",
        "tab",
      ],
    },
    {
      domain: "Color",
      scenario: "Delete, errors",
      token: "--color-tint-destructive",
      detail: "#ff3b30",
      tags: [
        "delete",
        "error",
        "destructive",
        "warning",
        "alert",
        "toast",
        "form",
      ],
    },
    {
      domain: "Color",
      scenario: "Success, available",
      token: "--color-tint-positive",
      detail: "#34c759",
      tags: ["success", "available", "online", "positive", "status", "badge"],
    },

    // Spacing
    {
      domain: "Spacing",
      scenario: "Inline icon-to-text gap",
      token: "--space-4",
      detail: "4px",
      tags: ["icon", "inline", "gap", "button", "badge", "tag"],
    },
    {
      domain: "Spacing",
      scenario: "Tight component padding",
      token: "--space-8",
      detail: "8px",
      tags: [
        "checkbox",
        "chip",
        "tag",
        "badge",
        "tight",
        "component",
        "padding",
      ],
    },
    {
      domain: "Spacing",
      scenario: "Input internal padding",
      token: "--space-10",
      detail: "10px",
      tags: ["input", "form", "search", "field", "padding"],
    },
    {
      domain: "Spacing",
      scenario: "Control group gaps",
      token: "--space-12",
      detail: "12px",
      tags: ["control", "group", "gap", "form", "button", "tab", "radio"],
    },
    {
      domain: "Spacing",
      scenario: "Card padding, section inset",
      token: "--space-16",
      detail: "16px",
      tags: [
        "card",
        "padding",
        "section",
        "inset",
        "list",
        "nav",
        "modal",
        "sheet",
      ],
    },
    {
      domain: "Spacing",
      scenario: "Stacked card gap",
      token: "--space-20",
      detail: "20px",
      tags: ["card", "stack", "gap", "list"],
    },
    {
      domain: "Spacing",
      scenario: "Section content gap",
      token: "--space-24",
      detail: "24px",
      tags: ["section", "content", "gap", "modal", "sheet", "form"],
    },
    {
      domain: "Spacing",
      scenario: "Between content groups",
      token: "--space-32",
      detail: "32px",
      tags: ["group", "content", "page", "layout", "section", "hero"],
    },
    {
      domain: "Spacing",
      scenario: "Page section separator",
      token: "--space-48",
      detail: "48px",
      tags: ["page", "section", "separator", "layout", "hero"],
    },

    // Elevation
    {
      domain: "Elevation",
      scenario: "Flat controls, inputs",
      token: "--shadow-xs + --radius-sm",
      detail: "Subtle depth",
      tags: [
        "input",
        "control",
        "form",
        "flat",
        "checkbox",
        "toggle",
        "search",
      ],
    },
    {
      domain: "Elevation",
      scenario: "Cards, buttons",
      token: "--shadow-sm + --radius-md",
      detail: "Default card",
      tags: ["card", "button", "surface"],
    },
    {
      domain: "Elevation",
      scenario: "Dropdowns, popovers",
      token: "--shadow-md + --radius-md",
      detail: "Floating overlay",
      tags: [
        "dropdown",
        "popover",
        "menu",
        "overlay",
        "select",
        "autocomplete",
        "nav",
      ],
    },
    {
      domain: "Elevation",
      scenario: "Modals, sheets",
      token: "--shadow-lg + --radius-lg",
      detail: "Full takeover",
      tags: ["modal", "sheet", "dialog", "overlay"],
    },
    {
      domain: "Elevation",
      scenario: "Toast notifications",
      token: "--shadow-xl + --radius-xl",
      detail: "Highest prominence",
      tags: ["toast", "notification", "alert", "snackbar"],
    },
  ];

  var tpPreset = document.getElementById("tp-preset");
  var tpSearch = document.getElementById("tp-search");
  var tpResults = document.getElementById("tp-results");

  if (tpPreset && tpSearch && tpResults) {
    function tpFilter(query) {
      if (!query) {
        tpResults.innerHTML =
          '<div class="tp-empty">Select a component above or type a keyword to see recommended tokens.</div>';
        return;
      }

      var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      var matches = TOKEN_PICKER_DATA.filter(function (entry) {
        var haystack = entry.tags.concat(
          entry.scenario.toLowerCase().split(/[\s,]+/),
          entry.token.toLowerCase().split(/[\s\-]+/),
        );
        return terms.some(function (term) {
          return haystack.some(function (tag) {
            return tag.indexOf(term) !== -1;
          });
        });
      });

      if (matches.length === 0) {
        tpResults.innerHTML =
          '<div class="tp-empty">No tokens match \u201c' +
          query.replace(/</g, "&lt;") +
          "\u201d. Try a different keyword.</div>";
        return;
      }

      // Group by domain
      var groups = {};
      var domainOrder = ["Typography", "Color", "Spacing", "Elevation"];
      matches.forEach(function (m) {
        if (!groups[m.domain]) groups[m.domain] = [];
        groups[m.domain].push(m);
      });

      var html = "";
      domainOrder.forEach(function (domain) {
        if (!groups[domain]) return;
        html += '<div class="tp-domain">';
        html += '<div class="tp-domain__label">' + domain + "</div>";
        groups[domain].forEach(function (entry) {
          html += '<div class="tp-row">';
          html +=
            '<span class="tp-row__scenario">' + entry.scenario + "</span>";
          html += '<code class="tp-row__token">' + entry.token + "</code>";
          html += '<span class="tp-row__detail">' + entry.detail + "</span>";
          html += "</div>";
        });
        html += "</div>";
      });

      tpResults.innerHTML = html;
    }

    tpPreset.addEventListener("change", function () {
      var val = tpPreset.value;
      tpSearch.value = "";
      tpFilter(val);
    });

    var tpDebounce;
    tpSearch.addEventListener("input", function () {
      clearTimeout(tpDebounce);
      tpDebounce = setTimeout(function () {
        var val = tpSearch.value.trim();
        if (val) {
          tpPreset.value = "";
        }
        tpFilter(val || tpPreset.value);
      }, 150);
    });
  }

  // ==================================================================
  // Quick Add Resources
  // ==================================================================
  var RES_STORAGE_KEY = "livemap-ds-resources";
  var RES_AUTHOR_KEY = "livemap-ds-resource-author";

  // Section id → grid container mapping
  var SECTION_MAP = {
    inspiration: "res-inspiration",
    demos: "res-demos",
    tweets: "res-tweets",
    reading: "res-reading",
    tools: "res-tools",
  };

  function resLoad() {
    try {
      return JSON.parse(localStorage.getItem(RES_STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function resSave(entries) {
    localStorage.setItem(RES_STORAGE_KEY, JSON.stringify(entries));
  }

  function resExtractDomain(url) {
    if (!url) return "";
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (e) {
      return url;
    }
  }

  function resEsc(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function resBuildSnippet(entry) {
    if (entry.section === "tweets") {
      return (
        '        <div class="res-embed">\n' +
        '          <blockquote class="twitter-tweet" data-dnt="true" data-theme="light" data-conversation="none"><a href="' +
        resEsc(entry.tweetUrl) +
        '"></a></blockquote>\n' +
        "        </div>"
      );
    }
    var href = entry.url
      ? ' href="' + resEsc(entry.url) + '" target="_blank" rel="noopener"'
      : "";
    var tag = entry.url ? "a" : "div";
    var urlLine = entry.url
      ? '\n            <span class="res-card__url">' +
        resEsc(resExtractDomain(entry.url)) +
        "</span>"
      : "";
    return (
      "        <" +
      tag +
      ' class="res-card"' +
      href +
      ">\n" +
      '          <div class="res-card__placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>\n' +
      '          <div class="res-card__body">\n' +
      '            <span class="res-card__name">' +
      resEsc(entry.name) +
      "</span>\n" +
      '            <span class="res-card__desc">' +
      resEsc(entry.desc) +
      "</span>" +
      urlLine +
      "\n" +
      '            <span class="res-card__author">' +
      resEsc(entry.addedBy) +
      "</span>\n" +
      "          </div>\n" +
      "        </" +
      tag +
      ">"
    );
  }

  function resRenderCard(entry) {
    var tag = entry.url ? "a" : "div";
    var card = document.createElement(tag);
    card.className = "res-card res-card--local";
    if (entry.url) {
      card.href = entry.url;
      card.target = "_blank";
      card.rel = "noopener";
    }

    var urlHtml = entry.url
      ? '<span class="res-card__url">' +
        resEsc(resExtractDomain(entry.url)) +
        "</span>"
      : "";

    card.innerHTML =
      '<div class="res-card__placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></div>' +
      '<div class="res-card__body">' +
      '<span class="res-card__name">' +
      resEsc(entry.name) +
      "</span>" +
      '<span class="res-card__desc">' +
      resEsc(entry.desc) +
      "</span>" +
      urlHtml +
      '<span class="res-card__author">' +
      resEsc(entry.addedBy) +
      "</span>" +
      '<span class="res-local-badge">local</span>' +
      "</div>" +
      '<button class="res-copy-btn" title="Copy HTML snippet" type="button">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
      "</button>";

    // Copy button handler
    var copyBtn = card.querySelector(".res-copy-btn");
    copyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var snippet = resBuildSnippet(entry);
      navigator.clipboard.writeText(snippet).then(function () {
        copyBtn.innerHTML =
          '<span style="font-size:11px;font-weight:600;color:var(--color-tint-positive)">Done</span>';
        setTimeout(function () {
          copyBtn.innerHTML =
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        }, 1500);
      });
    });

    return card;
  }

  function resRenderTweet(entry) {
    var wrap = document.createElement("div");
    wrap.className = "res-embed res-embed--local";
    wrap.style.position = "relative";
    wrap.innerHTML =
      '<blockquote class="twitter-tweet" data-dnt="true" data-theme="light" data-conversation="none"><a href="' +
      resEsc(entry.tweetUrl) +
      '"></a></blockquote>' +
      '<span class="res-local-badge" style="margin-top:var(--space-8)">local</span>' +
      '<button class="res-copy-btn" title="Copy HTML snippet" type="button">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
      "</button>";

    var copyBtn = wrap.querySelector(".res-copy-btn");
    copyBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var snippet = resBuildSnippet(entry);
      navigator.clipboard.writeText(snippet).then(function () {
        copyBtn.innerHTML =
          '<span style="font-size:11px;font-weight:600;color:var(--color-tint-positive)">Done</span>';
        setTimeout(function () {
          copyBtn.innerHTML =
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        }, 1500);
      });
    });

    return wrap;
  }

  function resRenderAll() {
    var entries = resLoad();
    // Clear previously rendered local cards and embeds
    document
      .querySelectorAll(".res-card--local, .res-embed--local")
      .forEach(function (el) {
        el.remove();
      });
    var needsTweetLoad = false;
    entries.forEach(function (entry) {
      var sectionId = SECTION_MAP[entry.section];
      if (!sectionId) return;
      var section = document.getElementById(sectionId);
      if (!section) return;
      if (entry.section === "tweets") {
        var grid = section.querySelector(".res-embed-grid");
        if (!grid) return;
        grid.appendChild(resRenderTweet(entry));
        needsTweetLoad = true;
      } else {
        var grid = section.querySelector(".res-grid");
        if (!grid) return;
        grid.appendChild(resRenderCard(entry));
      }
    });
    if (needsTweetLoad && window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }

  function resToast() {
    var toast = document.getElementById("res-toast");
    if (!toast) return;
    toast.hidden = false;
    // Force reflow
    toast.offsetHeight;
    toast.classList.add("is-visible");
    setTimeout(function () {
      toast.classList.remove("is-visible");
      setTimeout(function () {
        toast.hidden = true;
      }, 350);
    }, 5000);
  }

  // Wire up add buttons
  document.querySelectorAll(".res-add-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var section = btn.getAttribute("data-section");
      var form = document.querySelector(
        '.res-form[data-section="' + section + '"]',
      );
      if (!form) return;
      form.hidden = false;
      btn.hidden = true;
      // Pre-fill author from localStorage
      var savedAuthor = localStorage.getItem(RES_AUTHOR_KEY) || "";
      var authorInput = form.querySelector(".res-form__author");
      if (authorInput && !authorInput.value) {
        authorInput.value = savedAuthor;
      }
      var firstInput =
        form.querySelector(".res-form__tweet-url") ||
        form.querySelector(".res-form__name");
      if (firstInput) firstInput.focus();
    });
  });

  // Wire up cancel buttons
  document.querySelectorAll(".res-form__cancel").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var form = btn.closest(".res-form");
      if (!form) return;
      form.hidden = true;
      var section = form.getAttribute("data-section");
      var addBtn = document.querySelector(
        '.res-add-btn[data-section="' + section + '"]',
      );
      if (addBtn) addBtn.hidden = false;
    });
  });

  // Wire up save buttons
  document.querySelectorAll(".res-form__save").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var form = btn.closest(".res-form");
      if (!form) return;

      var section = form.getAttribute("data-section");
      var authorInput = form.querySelector(".res-form__author");
      var addedBy = authorInput.value.trim();
      var entry;

      if (section === "tweets") {
        var tweetUrlInput = form.querySelector(".res-form__tweet-url");
        var tweetUrl = tweetUrlInput.value.trim();

        if (!tweetUrl || !addedBy) {
          [tweetUrlInput, authorInput].forEach(function (inp) {
            if (!inp.value.trim()) {
              inp.classList.add("comp-input--error");
              setTimeout(function () {
                inp.classList.remove("comp-input--error");
              }, 1500);
            }
          });
          return;
        }

        entry = {
          section: section,
          tweetUrl: tweetUrl,
          addedBy: addedBy,
          timestamp: Date.now(),
        };

        tweetUrlInput.value = "";
      } else {
        var nameInput = form.querySelector(".res-form__name");
        var descInput = form.querySelector(".res-form__desc");
        var urlInput = form.querySelector(".res-form__url");

        var name = nameInput.value.trim();
        var desc = descInput.value.trim();
        var url = urlInput.value.trim();

        if (!name || !desc || !addedBy) {
          [nameInput, descInput, authorInput].forEach(function (inp) {
            if (!inp.value.trim()) {
              inp.classList.add("comp-input--error");
              setTimeout(function () {
                inp.classList.remove("comp-input--error");
              }, 1500);
            }
          });
          return;
        }

        entry = {
          section: section,
          name: name,
          desc: desc,
          url: url,
          addedBy: addedBy,
          timestamp: Date.now(),
        };

        nameInput.value = "";
        descInput.value = "";
        urlInput.value = "";
      }

      var entries = resLoad();
      entries.push(entry);
      resSave(entries);

      // Remember author
      localStorage.setItem(RES_AUTHOR_KEY, addedBy);
      // Keep author for next add

      form.hidden = true;
      var addBtn = document.querySelector(
        '.res-add-btn[data-section="' + section + '"]',
      );
      if (addBtn) addBtn.hidden = false;

      resRenderAll();
      resToast();
    });
  });

  // Render on load
  resRenderAll();
})();
