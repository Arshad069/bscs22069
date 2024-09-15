const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  // Toggle active class for hamburger and menu
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
