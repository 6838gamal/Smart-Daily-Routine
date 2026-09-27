/* Smart Daily Routine — Frontend interactions */

(function () {
  'use strict';

  // --- i18n strings ---
  var I18N = {
    ar: {
      app_name: 'Smart Daily Routine',
      nav_dashboard: 'لوحة التحكم', nav_today: 'اليوم', nav_planner: 'المخطط',
      nav_goals: 'الأهداف', nav_habits: 'العادات', nav_finance: 'المالية',
      nav_health: 'الصحة', nav_learning: 'التعلم', nav_notes: 'الملاحظات',
      nav_settings: 'الإعدادات', nav_more: 'المزيد',
      page_dashboard: 'لوحة التحكم', page_today: 'اليوم', page_planner: 'المخطط',
      page_goals: 'الأهداف', page_habits: 'العادات', page_finance: 'المالية',
      page_health: 'الصحة', page_learning: 'التعلم', page_notes: 'الملاحظات',
      page_settings: 'الإعدادات',
      user_name: 'أحمد',
      greeting: 'مساء الخير',
      add_task: 'مهمة جديدة', add_goal: 'هدف جديد', add_habit: 'عادة جديدة',
      add_note: 'ملاحظة جديدة', add_event: 'حدث جديد',
      view_all: 'عرض الكل', today_progress: 'تقدم اليوم', today_routine: 'روتين اليوم',
      tasks: 'المهام', goals_progress: 'تقدم الأهداف', habits: 'العادات',
      weekly_overview: 'نظرة أسبوعية', quick_actions: 'إجراءات سريعة',
      balance: 'الرصيد', income: 'الدخل', expenses: 'المصروفات', savings: 'المدخرات',
      streak: 'أيام متتالية', deadline: 'الموعد النهائي', milestones: 'المراحل',
      progress: 'التقدم', category: 'التصنيف', completed: 'مكتمل', pending: 'قيد الانتظار',
      day: 'يوم', week: 'أسبوع', month: 'شهر',
      all: 'الكل', pinned: 'مثبت',
      profile: 'الملف الشخصي', appearance: 'المظهر', language: 'اللغة', preferences: 'التفضيلات',
      light_mode: 'فاتح', dark_mode: 'داكن', arabic: 'العربية', english: 'الإنجليزية',
      save: 'حفظ', cancel: 'إلغاء',
    },
    en: {
      app_name: 'Smart Daily Routine',
      nav_dashboard: 'Dashboard', nav_today: 'Today', nav_planner: 'Planner',
      nav_goals: 'Goals', nav_habits: 'Habits', nav_finance: 'Finance',
      nav_health: 'Health', nav_learning: 'Learning', nav_notes: 'Notes',
      nav_settings: 'Settings', nav_more: 'More',
      page_dashboard: 'Dashboard', page_today: 'Today', page_planner: 'Planner',
      page_goals: 'Goals', page_habits: 'Habits', page_finance: 'Finance',
      page_health: 'Health', page_learning: 'Learning', page_notes: 'Notes',
      page_settings: 'Settings',
      user_name: 'Ahmed',
      greeting: 'Good evening',
      add_task: 'New Task', add_goal: 'New Goal', add_habit: 'New Habit',
      add_note: 'New Note', add_event: 'New Event',
      view_all: 'View all', today_progress: "Today's Progress", today_routine: "Today's Routine",
      tasks: 'Tasks', goals_progress: 'Goals Progress', habits: 'Habits',
      weekly_overview: 'Weekly Overview', quick_actions: 'Quick Actions',
      balance: 'Balance', income: 'Income', expenses: 'Expenses', savings: 'Savings',
      streak: 'day streak', deadline: 'Deadline', milestones: 'Milestones',
      progress: 'Progress', category: 'Category', completed: 'Completed', pending: 'Pending',
      day: 'Day', week: 'Week', month: 'Month',
      all: 'All', pinned: 'Pinned',
      profile: 'Profile', appearance: 'Appearance', language: 'Language', preferences: 'Preferences',
      light_mode: 'Light', dark_mode: 'Dark', arabic: 'Arabic', english: 'English',
      save: 'Save', cancel: 'Cancel',
    }
  };

  var currentLang = localStorage.getItem('sdr-lang') || 'ar';

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  function applyLang() {
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if (val) el.setAttribute('placeholder', val);
    });
    // toggle data-lang attributes for bilingual elements
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var en = el.getAttribute('data-en');
      var ar = el.getAttribute('data-ar') || el.textContent;
      el.textContent = currentLang === 'en' ? en : ar;
    });
    document.getElementById('langLabel').textContent = currentLang === 'ar' ? 'EN' : 'ع';
  }

  // --- Theme ---
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sdr-theme', theme);
    var icon = document.getElementById('themeIcon');
    if (theme === 'dark') {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    } else {
      icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    }
  }

  // --- Sidebar (mobile) ---
  function toggleSidebar(open) {
    var sb = document.getElementById('sidebar');
    var ov = document.getElementById('sidebarOverlay');
    if (open) { sb.classList.add('open'); ov.classList.add('active'); }
    else { sb.classList.remove('open'); ov.classList.remove('active'); }
  }

  // --- More menu (mobile) ---
  function toggleMoreMenu(open) {
    var m = document.getElementById('moreMenu');
    var ov = document.getElementById('moreMenuOverlay');
    if (open) { m.classList.add('active'); ov.classList.add('active'); }
    else { m.classList.remove('active'); ov.classList.remove('active'); }
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    applyLang();
    applyTheme(localStorage.getItem('sdr-theme') || 'light');

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });

    // Language toggle
    document.getElementById('langToggle').addEventListener('click', function () {
      currentLang = currentLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('sdr-lang', currentLang);
      applyLang();
    });

    // Sidebar
    var mt = document.getElementById('menuToggle');
    if (mt) mt.addEventListener('click', function () { toggleSidebar(true); });
    var sc = document.getElementById('sidebarClose');
    if (sc) sc.addEventListener('click', function () { toggleSidebar(false); });
    var so = document.getElementById('sidebarOverlay');
    if (so) so.addEventListener('click', function () { toggleSidebar(false); });

    // More menu
    var mb = document.getElementById('moreNavBtn');
    if (mb) mb.addEventListener('click', function () { toggleMoreMenu(true); });
    var mo = document.getElementById('moreMenuOverlay');
    if (mo) mo.addEventListener('click', function () { toggleMoreMenu(false); });

    // Task checkboxes
    document.querySelectorAll('.task-check').forEach(function (chk) {
      chk.addEventListener('click', function () {
        this.classList.toggle('done');
        this.closest('.task-item')?.classList.toggle('done');
      });
    });

    // Habit toggles
    document.querySelectorAll('.habit-toggle').forEach(function (h) {
      h.addEventListener('click', function () {
        this.classList.toggle('done');
      });
    });

    // Tabs
    document.querySelectorAll('.tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        var group = this.closest('.tabs');
        group.querySelectorAll('.tab').forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        var target = this.getAttribute('data-tab');
        if (target) {
          document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.add('hidden'); });
          var panel = document.getElementById(target);
          if (panel) panel.classList.remove('hidden');
        }
      });
    });

    // Toggle switches
    document.querySelectorAll('.toggle-switch').forEach(function (ts) {
      ts.addEventListener('click', function () { this.classList.toggle('active'); });
    });

    // Mood options
    document.querySelectorAll('.mood-option').forEach(function (m) {
      m.addEventListener('click', function () {
        var parent = this.closest('.mood-options');
        parent.querySelectorAll('.mood-option').forEach(function (o) { o.classList.remove('selected'); });
        this.classList.add('selected');
      });
    });

    // Note category filter
    document.querySelectorAll('.note-cat-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = this.getAttribute('data-cat');
        document.querySelectorAll('.note-cat-btn').forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        document.querySelectorAll('.note-card').forEach(function (card) {
          var c = card.getAttribute('data-cat');
          if (cat === 'all' || c === cat) card.classList.remove('hidden');
          else card.classList.add('hidden');
        });
      });
    });

    // Progress bars animate
    document.querySelectorAll('.progress-bar-fill[data-width]').forEach(function (bar) {
      setTimeout(function () { bar.style.width = bar.getAttribute('data-width') + '%'; }, 100);
    });

    // Progress circles
    document.querySelectorAll('.progress-circle-fg[data-pct]').forEach(function (fg) {
      var pct = parseFloat(fg.getAttribute('data-pct'));
      var r = fg.getAttribute('r');
      var circ = 2 * Math.PI * r;
      fg.style.strokeDasharray = circ;
      fg.style.strokeDashoffset = circ * (1 - pct / 100);
    });

    // Weekly bars
    document.querySelectorAll('.weekly-bar[data-height]').forEach(function (bar) {
      setTimeout(function () { bar.style.height = bar.getAttribute('data-height') + '%'; }, 100);
    });

    // Mini chart bars
    document.querySelectorAll('.mini-chart-bar[data-height]').forEach(function (bar) {
      setTimeout(function () { bar.style.height = bar.getAttribute('data-height') + '%'; }, 100);
    });
  });
})();
