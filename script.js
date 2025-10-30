let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  document.querySelector(".container").style.transform = `translateX(-${index * 100}%)`;
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 6000);
