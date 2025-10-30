let index = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

// Create navigation dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  document.querySelector(".container").style.transform = `translateX(-${index * 100}%)`;
}

function goToSlide(i) {
  index = i;
  showSlide();
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide();
}, 6000);
