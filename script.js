// Typing Animation
const roles = ["Data Engineer", "Azure Developer", "Big Data Engineer"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let currentChar = "";

(function type() {
  if (roleIndex === roles.length) roleIndex = 0;
  currentRole = roles[roleIndex];
  currentChar = currentRole.slice(0, ++charIndex);
  document.querySelector(".typing").textContent = currentChar;

  if (currentChar.length === currentRole.length) {
    roleIndex++;
    charIndex = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 120);
  }
})();
