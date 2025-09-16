const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });

    // close menu on mobile after click
    navLinks.classList.remove("show");
  });
});
