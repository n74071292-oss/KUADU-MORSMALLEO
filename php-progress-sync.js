/* Optional PHP session sync for CodePath progress.
   The site remains usable without PHP; this helper runs only on a PHP server. */
(() => {
  if (!location.pathname.toLowerCase().endsWith(".php")) return;

  const storageKey = "codepath-completed";
  const getLocal = () => {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  };

  // This helper exposes a small API for the main script or future UI extensions.
  window.CodePathProgressAPI = {
    async load() {
      const response = await fetch("api.php?action=progress", {
        headers: { "Accept": "application/json" },
        credentials: "same-origin"
      });
      if (!response.ok) throw new Error("Could not load progress.");
      return response.json();
    },
    async save(completed) {
      const response = await fetch("api.php?action=progress", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ completed })
      });
      if (!response.ok) throw new Error("Could not save progress.");
      return response.json();
    },
    async syncFromLocal() {
      return this.save(getLocal());
    }
  };
})();
