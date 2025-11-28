AOS.init();
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".Resume_page .item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("shown");
      }
    });
  }, { threshold: 0.3 }); // 30% visible

  items.forEach(item => observer.observe(item));
});
