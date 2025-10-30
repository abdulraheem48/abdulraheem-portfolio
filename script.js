let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function moveSlide(n) {
  slideIndex = (slideIndex + n + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

// Auto-slide every 5 seconds
let autoSlide = setInterval(() => moveSlide(1), 5000);

// Pause on hover
const container = document.querySelector('.slideshow-container');
container.addEventListener('mouseenter', () => clearInterval(autoSlide));
container.addEventListener('mouseleave', () => {
  autoSlide = setInterval(() => moveSlide(1), 5000);
});

// Show first slide
showSlide(slideIndex);
