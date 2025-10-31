const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
let activeSection = document.querySelector(".section.active");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");

    const targetId = button.getAttribute("data-section");
    const targetSection = document.getElementById(targetId);

    if (targetSection !== activeSection) {
      activeSection.classList.remove("active");
      activeSection.classList.add("exit-left");

      setTimeout(() => {
        activeSection.classList.remove("exit-left");
        targetSection.classList.add("active");
        activeSection = targetSection;
      }, 600);
    }
  });
});

// Typing text animation
const typing = document.getElementById("typing");
const words = ["Data Engineer", "Cloud Engineer", "Python Developer"];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typing.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 300);
});
