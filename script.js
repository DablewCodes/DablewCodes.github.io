document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", (!expanded).toString());
      navLinks.classList.toggle("open", !expanded);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
      });
    });
  }
});

