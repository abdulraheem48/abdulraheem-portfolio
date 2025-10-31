// Typing effect
const text = ["Data Engineer", "Cloud Engineer", "Big Data Engineer"];
let index = 0, charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex++);
    setTimeout(typeEffect, 100);
  } else setTimeout(eraseEffect, 1500);
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, --charIndex);
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 200);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Tab Navigation
const links = document.querySelectorAll(".nav-link, .contact-btn");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.target;

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach(section => section.classList.remove("active-section"));
    document.getElementById(target).classList.add("active-section");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
