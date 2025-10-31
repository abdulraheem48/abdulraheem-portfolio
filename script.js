// Typing effect
const typingTexts = ["Data Engineer", "Cloud Engineer", "Big Data Engineer"];
let i = 0, j = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (!typingElement) return;
  if (j < typingTexts[i].length) {
    typingElement.textContent += typingTexts[i].charAt(j++);
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}
function eraseEffect() {
  if (j > 0) {
    typingElement.textContent = typingTexts[i].substring(0, --j);
    setTimeout(eraseEffect, 50);
  } else {
    i = (i + 1) % typingTexts.length;
    setTimeout(typeEffect, 200);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Show only one section at a time
const navLinks = document.querySelectorAll("nav a, .contact-btn");
const sections = document.querySelectorAll(".section");

function showSection(id) {
  sections.forEach(sec => sec.classList.remove("active-section"));
  document.getElementById(id).classList.add("active-section");
  navLinks.forEach(link => link.classList.remove("active"));
  document.querySelector(`[data-target="${id}"]`)?.classList.add("active");
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("data-target");
    showSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
