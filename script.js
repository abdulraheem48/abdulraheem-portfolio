const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const clickSound = new Audio('click.mp3');

function showSection(id) {
  sections.forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    clickSound.currentTime = 0;
    clickSound.play();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    showSection(link.dataset.section);
  });
});
