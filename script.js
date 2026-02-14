function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typing animation for main name
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typed-name");
  if (!el) return;
  const text = el.dataset.name || "Your Name";
  let i = 0;
  const speed = 100; // ms per char
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    }
  }
  setTimeout(type, 300);
});
