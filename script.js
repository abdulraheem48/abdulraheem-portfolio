const tabs = document.querySelectorAll('nav a');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;
    contents.forEach(c => {
      if (c.id === target) c.classList.add('active');
      else c.classList.remove('active');
    });
  });
});

// Typing effect
const words = ["Data Engineer", "Cloud Engineer", "Big Data Developer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  currentWord = words[i];
  typingElement.textContent = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(type, 1200);
  }
}
type();
