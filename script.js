// 🌟 Portfolio Interactivity – Shaik Abdul Raheem

// Smooth scrolling for internal links (e.g., #about, #experience)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal sections with animation when scrolling
const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // run once on load

// Create and control floating "Back to Top" button
const topButton = document.createElement('button');
topButton.innerText = '↑';
topButton.className = 'back-to-top';
document.body.appendChild(topButton);

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    topButton.classList.add('show');
  } else {
    topButton.classList.remove('show');
  }
});

// Welcome log in console
console.log("%cWelcome to Shaik Abdul Raheem’s Portfolio!", "color: goldenrod; font-size: 14px; font-weight: bold;");
