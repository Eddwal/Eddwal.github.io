const textDisplay = document.getElementById("display");
const phrases = [
  "worship dogs",
  "am a ski instructor",
  "love taking the less walken path",
  "enjoy cooking",
  "a french horn player"

];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function typewrite() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(typewrite, time);
}

window.onload = () => {
  //Hamburger click handler
  const menuBtn = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav-ul");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
  });
  typewrite();
};
