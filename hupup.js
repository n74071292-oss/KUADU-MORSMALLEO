
function () {
  
  if (window.location.protocol === "http:" && window.location.hostname !== "localhost") {
    const target = new URL(window.location.href);
    target.protocol = "https:";
    window.location.replace(target.href);
  }
})();
