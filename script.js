const tabs = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".tab-section");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.target);
    target.classList.add("active");
  });
});

// typing animation
const roles = ["Data Engineer", "Cloud Engineer", "Big Data Developer"];
let i = 0, j = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (j < roles[i].length) {
    typing.textContent += roles[i].charAt(j);
    j++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typing.textContent = "";
      i = (i + 1) % roles.length;
      j = 0;
      typeEffect();
    }, 1500);
  }
}
typeEffect();
