// Typing Effect
const roles = ["Frontend Developer", "Learner", "Fresher"];
let i = 0,
  j = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[i];
  const displayText = currentRole.substring(0, j);
  document.querySelector(".typing").textContent = displayText;

  if (!isDeleting && j < currentRole.length) {
    j++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Light/Dark Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️Theme";
  } else {
    toggleBtn.textContent = "🌙Theme";
  }
});

// // Theme Toggle
// const themeToggle = document.getElementById("theme-toggle");
// const body = document.body;

// themeToggle.addEventListener("click", () => {
//   body.classList.toggle("light");
//   body.classList.toggle("dark");
//   themeToggle.textContent = body.classList.contains("light") ? "🌙" : "☀️";
// });

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// const submit = document.getElementById("submit");
// // Listen for submit event
// submit.addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent actual form submission (page reload)
//   alert("Your form has been submitted!");

//   form.reset();
// });
