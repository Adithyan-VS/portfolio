// Add your JavaScript code here

// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);
document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for fade-in effect
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new
    IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
