const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const target = link.getAttribute("data-section");
    sections.forEach(section => {
      section.classList.remove("active");
      if (section.id === target) {
        section.classList.add("active");
      }
    });
  });
});
