// =====================================================
// Fitness Sports Center — main.js
// =====================================================

// Contact form: show inline confirmation then reset
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector(".btn-submit");
  const original = btn.textContent;
  btn.textContent = "Message Sent!";
  btn.style.background = "#22c55e";
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    this.reset();
  }, 3000);
});

// Smooth scroll for all anchor links (safe href guard)
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href.length <= 1) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile nav toggle
document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("mainNav").classList.toggle("open");
});
