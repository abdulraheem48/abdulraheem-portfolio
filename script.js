// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '10px';
    nav.style.position = 'absolute';
    nav.style.right = '24px';
    nav.style.top = '66px';
    nav.style.background = 'rgba(255,255,255,0.95)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '8px';
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // hide mobile nav after click
      if (nav && window.innerWidth < 980) nav.style.display = 'none';
    }
  });
});

// IntersectionObserver reveal animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));
