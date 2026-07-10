document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const editor = document.getElementById("news-editor");
  if (editor) {
    const savedText = localStorage.getItem("sammatinvpk-news");
    if (savedText) {
      editor.innerHTML = savedText;
    }

    editor.addEventListener("input", () => {
      localStorage.setItem("sammatinvpk-news", editor.innerHTML);
    });
  }
});
