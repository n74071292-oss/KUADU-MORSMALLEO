<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f7f8fc">
  <title>CodePath — Find your next language</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js" defer></script>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="#home" aria-label="CodePath home"><span class="brand-mark">&lt;/&gt;</span> codepath</a>
    <button class="menu-toggle" id="mobileMenu" type="button" aria-expanded="false" aria-controls="navLinks" aria-label="Toggle navigation">☰</button>
    <nav class="navigation" id="navLinks" aria-label="Main navigation">
      <a href="#languages">Explore</a>
      <a href="#categories">Categories</a>
      <a href="#about">About</a>
    </nav>
    <a class="header-cta" href="#languages">Start learning <span aria-hidden="true">↗</span></a>
  </header>

  <main id="home">
    <section class="hero" aria-labelledby="heroTitle">
      <div class="hero-copy">
        <span class="eyebrow"><span class="eyebrow-dot"></span> YOUR NEXT CHAPTER STARTS HERE</span>
        <h1 id="heroTitle">Find your next<br><span>programming language.</span></h1>
        <p>Explore practical, beginner-friendly guides and find the right language for what you want to build.</p>
        <a class="primary-button" href="#languages">Explore languages <span aria-hidden="true">↓</span></a>
        <div class="progress-line"><span class="progress-check">✓</span><span id="heroProgress">0 lessons completed</span></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>
        <div class="hero-code"><span class="code-dots">● ● ●</span><br><span class="code-purple">const</span> future = <span class="code-green">"yours"</span>;<br><span class="code-purple">while</span> (learning) {<br>&nbsp;&nbsp;buildSomething();<br>}</div>
        <span class="floating-chip chip-js">JS</span><span class="floating-chip chip-py">Py</span><span class="floating-chip chip-brackets">{ }</span>
      </div>
    </section>

    <section class="content-section" id="categories" aria-labelledby="categoryTitle">
      <div class="section-heading">
        <div><span class="eyebrow">PICK A DIRECTION</span><h2 id="categoryTitle">What do you want to build?</h2></div>
        <p>Choose a path to narrow down your options.</p>
      </div>
      <div class="category-grid" id="categoryGrid" aria-label="Language categories">
        <button class="category-card active" type="button" data-category="all" aria-pressed="true"><span class="category-icon">✦</span><strong>All paths</strong><span>See everything</span></button>
        <button class="category-card" type="button" data-category="web" aria-pressed="false"><span class="category-icon">◈</span><strong>Web development</strong><span>Sites &amp; apps</span></button>
        <button class="category-card" type="button" data-category="data" aria-pressed="false"><span class="category-icon">▥</span><strong>Data &amp; AI</strong><span>Insights &amp; intelligence</span></button>
        <button class="category-card" type="button" data-category="mobile" aria-pressed="false"><span class="category-icon">▯</span><strong>Mobile apps</strong><span>iOS &amp; Android</span></button>
        <button class="category-card" type="button" data-category="systems" aria-pressed="false"><span class="category-icon">⌘</span><strong>Systems &amp; games</strong><span>Performance &amp; play</span></button>
      </div>
    </section>

    <section class="content-section languages-section" id="languages" aria-labelledby="languageHeading">
      <div class="section-heading language-section-heading">
        <div><span class="eyebrow">YOUR LEARNING PATH</span><h2 id="languageHeading">Popular languages</h2><p class="result-count" id="resultCount" aria-live="polite"></p></div>
        <label class="search-box"><span aria-hidden="true">⌕</span><span class="visually-hidden">Search languages</span><input id="languageSearch" type="search" placeholder="Search languages..." autocomplete="off"><kbd>/</kbd></label>
      </div>
      <div class="language-grid" id="languageGrid"></div>
      <p class="empty-state" id="emptyState" hidden>No languages match your search. Try a different keyword or category.</p>
    </section>

    <section class="about-strip" id="about">
      <span class="about-icon">✳</span><div><h2>Small steps. Real progress.</h2><p>Every guide gives you a clear starting point, a code example, and a task to try.</p></div><a href="#languages">Find your first lesson <span aria-hidden="true">→</span></a>
    </section>
  </main>

  <footer class="site-footer"><a class="brand" href="#home"><span class="brand-mark">&lt;/&gt;</span> codepath</a><p>Made for curious minds. Keep building.</p><p>© <span id="year"></span> · <span id="currentTime" class="footer-time"></span></p></footer>

  <dialog class="lesson-dialog" id="lessonDialog" aria-labelledby="dialogTitle">
    <button class="dialog-close" id="dialogClose" type="button" aria-label="Close lesson">×</button>
    <div class="dialog-heading"><div class="dialog-icon" id="dialogIcon"></div><div><span class="eyebrow" id="dialogCategory"></span><h2 id="dialogTitle"></h2></div></div>
    <p class="dialog-description" id="dialogDescription"></p>
    <div class="lesson-content"><h3>Your first step</h3><p id="dialogLesson"></p><div class="code-heading"><strong>Example</strong><button id="copyCode" type="button">Copy code</button></div><pre><code id="dialogCode"></code></pre><div class="tip-box"><strong>Try this</strong><p id="dialogTip"></p></div><p class="dialog-note" id="dialogNote"></p></div>
    <button class="complete-button" id="completeLesson" type="button">Mark lesson complete ✓</button>
  </dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>

  <script>
    const languages = [
      { id: "javascript", name: "JavaScript", category: "web", categoryName: "Web development", description: "Bring websites to life and build interactive experiences for the web.", level: "Beginner", time: "15 min", logo: "JS", color: "yellow", lesson: "JavaScript lets you add behavior to web pages. Start by storing a value in a variable, then use it to update the page or respond to an event.", code: `const greeting = "Hello, world!";\nconsole.log(greeting);`, tip: "Change the greeting, then imagine how you could show it when someone clicks a button." },
      { id: "python", name: "Python", category: "data", categoryName: "Data & AI", description: "A friendly, versatile language for automation, data, AI, and more.", level: "Beginner", time: "12 min", logo: "Py", color: "blue", lesson: "Python is known for readable code. You can assign information to a variable and use built-in functions to work with it.", code: `name = "Ada"\nprint(f"Hello, {name}!")`, tip: "Replace Ada with your name and add another print statement that shares something you want to learn." },
      { id: "typescript", name: "TypeScript", category: "web", categoryName: "Web development", description: "Build more reliable web apps with JavaScript and helpful type checks.", level: "Beginner", time: "18 min", logo: "TS", color: "indigo", lesson: "TypeScript adds optional types to JavaScript. Types describe the values your code expects and help catch mistakes early.", code: `const welcome = (name: string): string => {\n  return \`Hello, \${name}!\`;\n};`, tip: "Try changing the name parameter to a number type. Consider what kind of value a greeting function should accept." },
      { id: "html-css", name: "HTML & CSS", category: "web", categoryName: "Web development", description: "Create the structure and visual style behind every website.", level: "Beginner", time: "10 min", logo: "<> ", color: "coral", lesson: "HTML describes the content of a page, while CSS controls how that content looks. Together they are the foundation of the web.", code: `<h1>Hello, web!</h1>\n<style>\n  h1 { color: rebeccapurple; }\n</style>`, tip: "Change the heading text and try a different CSS color." },
      { id: "sql", name: "SQL", category: "data", categoryName: "Data & AI", description: "Ask questions of your data and find the information that matters.", level: "Beginner", time: "14 min", logo: "SQL", color: "green", lesson: "SQL is used to query information stored in relational databases. A SELECT statement chooses which columns and rows to retrieve.", code: `SELECT name, role\nFROM team_members\nWHERE active = true;`, tip: "Think of a question you would ask about a table, then decide which columns and filter would answer it." },
      { id: "swift", name: "Swift", category: "mobile", categoryName: "Mobile apps", description: "Make polished apps for Apple platforms with a modern, expressive language.", level: "Beginner", time: "16 min", logo: "S", color: "orange", lesson: "Swift is designed for performance and clarity. Constants use let, while values you plan to change use var.", code: `let appName = "First App"\nvar launchCount = 0\nlaunchCount += 1\nprint(appName)`, tip: "Decide which values in a simple app should stay constant and which will change while it runs." },
      { id: "kotlin", name: "Kotlin", category: "mobile", categoryName: "Mobile apps", description: "Create concise, safe Android apps and share code across platforms.", level: "Beginner", time: "16 min", logo: "K", color: "purple", lesson: "Kotlin is a modern language popular for Android development. Use val for a read-only reference and fun to define a function.", code: `fun greet(name: String) {\n  println("Hello, $name!")\n}\ngreet("Sam")`, tip: "Call the greet function with a different name, then consider how you could return a value instead of printing it." },
      { id: "rust", name: "Rust", category: "systems", categoryName: "Systems & games", description: "Build fast, dependable software with strong memory-safety guarantees.", level: "Intermediate", time: "20 min", logo: "R", color: "slate", lesson: "Rust helps you write efficient programs while catching many memory errors before your code runs. A simple program can start with a function named main.", code: `fn main() {\n    let message = "Hello, Rust!";\n    println!("{}", message);\n}`, tip: "Change the message and notice how Rust's main function provides the entry point for this program." }
    ];

    function getElement(id) {
      const element = document.getElementById(id);
      if (!element) throw new Error(`Required page element #${id} was not found.`);
      return element;
    }

    const grid = getElement("languageGrid");
    const search = getElement("languageSearch");
    const categoryGrid = getElement("categoryGrid");
    const resultCount = getElement("resultCount");
    const languageHeading = getElement("languageHeading");
    const emptyState = getElement("emptyState");
    const dialog = getElement("lessonDialog");
    const toast = getElement("toast");
    const mobileMenu = getElement("mobileMenu");
    const navLinks = getElement("navLinks");
    let activeCategory = "all";
    let activeLanguage = null;
    let toastTimer;
    const STORAGE_KEY = "codepath.completedLessons";

    function readProgress() {
      try {
        const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        if (!Array.isArray(value)) return [];
        return [...new Set(value)].filter(id => languages.some(language => language.id === id));
      } catch {
        return [];
      }
    }

    let completed = readProgress();

    function updateProgressText() {
      getElement("heroProgress").textContent = `${completed.length} lesson${completed.length === 1 ? "" : "s"} completed`;
    }

    function saveProgress() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
      } catch {
        showToast("Progress could not be saved in this browser.");
      }
      updateProgressText();
    }

    function escapeHTML(value) {
      return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
    }

    function renderLanguages() {
      const query = search.value.trim().toLowerCase();
      const filtered = languages.filter(language => {
        const matchesCategory = activeCategory === "all" || language.category === activeCategory;
        const searchable = `${language.name} ${language.description} ${language.categoryName} ${language.level}`.toLowerCase();
        return matchesCategory && searchable.includes(query);
      });
      resultCount.textContent = `Showing ${filtered.length} of ${languages.length} languages`;
      const activeCategoryButton = categoryGrid.querySelector(`[data-category="${CSS.escape(activeCategory)}"]`);
      languageHeading.textContent = activeCategory === "all" ? "Popular languages" : activeCategoryButton?.querySelector("strong")?.textContent ?? "Languages";
      emptyState.hidden = filtered.length > 0;
      grid.innerHTML = filtered.map(language => {
        const done = completed.includes(language.id);
        return `<article class="language-card">
          <div class="language-top"><div class="language-logo ${escapeHTML(language.color)}">${escapeHTML(language.logo)}</div><span class="level ${escapeHTML(language.level.toLowerCase())}">${escapeHTML(language.level)}</span></div>
          <span class="card-category">${escapeHTML(language.categoryName)}</span>
          <h3>${escapeHTML(language.name)}</h3><p>${escapeHTML(language.description)}</p>
          <div class="card-footer"><span>◷ ${escapeHTML(language.time)} · ${done ? "✓ Completed" : "Starter guide"}</span><button type="button" data-open-lesson="${escapeHTML(language.id)}" aria-label="Open ${escapeHTML(language.name)} lesson">Start learning <span aria-hidden="true">↗</span></button></div>
        </article>`;
      }).join("");
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
    }

    function openLesson(id) {
      const language = languages.find(item => item.id === id);
      if (!language) return;
      activeLanguage = language;
      getElement("dialogIcon").textContent = language.logo;
      getElement("dialogCategory").textContent = language.categoryName.toUpperCase();
      getElement("dialogTitle").textContent = `Learn ${language.name}`;
      getElement("dialogDescription").textContent = language.description;
      getElement("dialogLesson").textContent = language.lesson;
      getElement("dialogCode").textContent = language.code.replace(/\\n/g, "\n");
      getElement("dialogTip").textContent = language.tip;
      const completeButton = getElement("completeLesson");
      const done = completed.includes(language.id);
      completeButton.textContent = done ? "✓ Lesson completed" : "Mark lesson complete ✓";
      completeButton.disabled = done;
      getElement("dialogNote").textContent = "Read the explanation, study the example, and try the practice task before marking this lesson complete.";
      if (typeof dialog.showModal === "function") dialog.showModal();
      else showToast("Your browser does not support lesson dialogs. Please update it.");
    }

    function getClosestElement(target, selector) {
      return target instanceof Element ? target.closest(selector) : null;
    }

    categoryGrid.addEventListener("click", event => {
      const button = getClosestElement(event.target, "[data-category]");
      if (!button || !categoryGrid.contains(button)) return;
      activeCategory = button.dataset.category || "all";
      categoryGrid.querySelectorAll(".category-card").forEach(card => {
        const selected = card === button;
        card.classList.toggle("active", selected);
        card.setAttribute("aria-pressed", String(selected));
      });
      renderLanguages();
    });

    grid.addEventListener("click", event => {
      const button = getClosestElement(event.target, "[data-open-lesson]");
      if (button) openLesson(button.dataset.openLesson);
    });
    search.addEventListener("input", renderLanguages);
    document.addEventListener("keydown", event => {
      const target = event.target;
      const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || (target instanceof HTMLElement && target.isContentEditable);
      if (event.key === "/" && !isTyping) { event.preventDefault(); search.focus(); }
      if (event.key === "Escape" && dialog.open) dialog.close();
    });
    getElement("dialogClose").addEventListener("click", () => { if (dialog.open) dialog.close(); });
    dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
    getElement("copyCode").addEventListener("click", async () => {
      const code = getElement("dialogCode").textContent;
      try {
        if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
        await navigator.clipboard.writeText(code);
        showToast("Code example copied.");
      } catch {
        showToast("Copy is unavailable. Select the code and copy it manually.");
      }
    });
    getElement("completeLesson").addEventListener("click", () => {
      if (!activeLanguage || completed.includes(activeLanguage.id)) return;
      completed.push(activeLanguage.id);
      saveProgress();
      renderLanguages();
      const button = getElement("completeLesson");
      button.textContent = "✓ Lesson completed";
      button.disabled = true;
      showToast(`${activeLanguage.name} lesson marked complete!`);
    });
    mobileMenu.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      mobileMenu.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      mobileMenu.setAttribute("aria-expanded", "false");
    }));
    getElement("year").textContent = new Date().getFullYear();
    updateProgressText();
    renderLanguages();
  </script>
</body>
</html>
