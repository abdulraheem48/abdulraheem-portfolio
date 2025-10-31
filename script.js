// ---------- Typing Effect ----------
const typing = document.querySelector('.typing');
const roles = ["Data Engineer", "Cloud Engineer", "Big Data Engineer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = roles[i];
  typing.textContent = current.slice(0, j);
  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(type, 200);
  }
}
type();


// ---------- Section Fade-in on Scroll ----------
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('show');
  });
});


// ---------- Navigation System (Single Page Smooth Switch) ----------
const navLinks = document.querySelectorAll("nav a");
const allSections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove 'active' class from all links
    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");

    // Hide all sections
    allSections.forEach(sec => sec.style.display = "none");

    // Show the clicked section only
    const target = document.querySelector(link.getAttribute("href"));
    target.style.display = "block";
    target.classList.add("show");
  });
});

// Show only Home by default
window.addEventListener("DOMContentLoaded", () => {
  allSections.forEach((sec, index) => {
    sec.style.display = index === 0 ? "block" : "none";
  });
});


// ---------- CV Button Shine Sound Effect ----------
const cvButton = document.querySelector(".btn-shine");
if (cvButton) {
  const clickSound = new Audio("click.mp3"); // Optional click sound
  cvButton.addEventListener("mouseenter", () => {
    cvButton.classList.add("shine");
  });
  cvButton.addEventListener("mouseleave", () => {
    cvButton.classList.remove("shine");
  });
  cvButton.addEventListener("click", () => {
    clickSound.play();
  });
}
