const tabs = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const target = btn.dataset.target;

    sections.forEach(sec => {
      sec.classList.toggle("active", sec.id === target);
    });
  });
});
