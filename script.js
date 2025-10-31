// Typing text animation
const typingElement = document.querySelector(".typing");
const roles = ["Data Engineer", "Cloud Engineer", "Big Data Engineer"];
let index = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const current = roles[index];
  typingElement.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 400);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
}
typeEffect();

// Section switch with fade animation
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-section");
    sections.forEach(s => s.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
