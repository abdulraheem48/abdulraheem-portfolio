document.addEventListener("DOMContentLoaded", () => {
  const clickSound = new Audio("click.mp3");
  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", () => clickSound.play());
  });
});
