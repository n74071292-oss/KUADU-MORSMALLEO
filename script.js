  function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Required page element #${id} was not found.`);
    }
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

      // Discard unknown IDs and duplicate entries.
      return [...new Set(value)].filter(id =>
        languages.some(language => language.id === id)
      );
    } catch {
      // Storage may be unavailable or contain invalid JSON.
      return [];
    }
  }

  let completed = readProgress();

  function updateProgressText() {
    getElement("heroProgress").textContent =
      `${completed.length} lesson${completed.length === 1 ? "" : "s"} completed`;
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
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function renderLanguages() {
    const query = search.value.trim().toLowerCase();

    const filtered = languages.filter(language => {
      const matchesCategory =
        activeCategory === "all" || language.category === activeCategory;

      const searchable =
        `${language.name} ${language.description} ${language.categoryName} ${language.level}`
          .toLowerCase();

      return matchesCategory && searchable.includes(query);
    });

    resultCount.textContent =
      `Showing ${filtered.length} of ${languages.length} languages`;

    const activeCategoryButton = categoryGrid.querySelector(
      `[data-category="${CSS.escape(activeCategory)}"]`
    );

    languageHeading.textContent =
      activeCategory === "all"
        ? "Popular languages"
        : activeCategoryButton?.querySelector("strong")?.textContent ??
          "Languages";

    emptyState.hidden = filtered.length > 0;

    grid.innerHTML = filtered.map(language => {
      const done = completed.includes(language.id);
      const illustration = {
        web: "web-development",
        data: "data-ai",
        mobile: "mobile-apps",
        systems: "systems-games"
      }[language.category] || "systems-games";

      return `
        <article class="language-card">
          <img
            class="language-art"
            src="images/${illustration}.svg"
            alt="${escapeHTML(language.categoryName)} illustration"
            loading="lazy"
          >
          <div class="language-top">
            <div class="language-logo ${escapeHTML(language.color)}">
              ${escapeHTML(language.logo)}
            </div>
            <span class="level ${escapeHTML(language.level.toLowerCase())}">
              ${escapeHTML(language.level)}
            </span>
          </div>
          <h3>${escapeHTML(language.name)}</h3>
          <p>${escapeHTML(language.description)}</p>
          <div class="card-footer">
            <span>
              ◷ ${escapeHTML(language.time)} ·
              ${done ? "✓ Completed" : "Starter guide"}
            </span>
            <button
              type="button"
              data-open-lesson="${escapeHTML(language.id)}"
              aria-label="Open ${escapeHTML(language.name)} lesson"
            >
              Start learning ↗
            </button>
          </div>
        </article>`;
    }).join("");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2600);
  }

  function openLesson(id) {
    const language = languages.find(item => item.id === id);
    if (!language) return;

    activeLanguage = language;

    getElement("dialogIcon").textContent = language.logo;
    getElement("dialogCategory").textContent =
      language.categoryName.toUpperCase();
    getElement("dialogTitle").textContent = `Learn ${language.name}`;
    getElement("dialogDescription").textContent = language.description;
    getElement("dialogLesson").textContent = language.lesson;

    // The code examples store line breaks as the literal characters "\n".
    getElement("dialogCode").textContent =
      language.code.replace(/\\n/g, "\n");

    getElement("dialogTip").textContent = language.tip;

    const completeButton = getElement("completeLesson");
    const done = completed.includes(language.id);

    completeButton.textContent =
      done ? "✓ Lesson completed" : "Mark lesson complete ✓";
    completeButton.disabled = done;

    getElement("dialogNote").textContent =
      "Expanded lesson: read the explanation, study the example, and complete the practice task before marking it done.";

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      showToast("Your browser does not support lesson dialogs. Please update it.");
    }
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
    const isTyping =
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement ||
      target instanceof HTMLSelectElement ||
      (target instanceof HTMLElement && target.isContentEditable);

    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      search.focus();
    }

    if (event.key === "Escape" && dialog.open) {
      dialog.close();
    }
  });

  getElement("dialogClose").addEventListener("click", () => {
    if (dialog.open) dialog.close();
  });

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  getElement("copyCode").addEventListener("click", async () => {
    const code = getElement("dialogCode").textContent;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }

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

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      mobileMenu.setAttribute("aria-expanded", "false");
    });
  });

  getElement("year").textContent = new Date().getFullYear();

  updateProgressText();
  renderLanguages();
