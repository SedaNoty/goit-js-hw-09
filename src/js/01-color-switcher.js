
const clickStart = document.querySelector('button[data-start]');
const clickStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

clickStop.disabled = true;
let timerId = 0;

clickStart.addEventListener('click', () => {
  clickStart.disabled = true;
  clickStop.disabled = false;

  timerId = setInterval(changingColor, 1000);
});

function changingColor() {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

clickStop.addEventListener('click', () => {
  clearInterval(timerId);
  clickStart.disabled = false;
  clickStop.disabled = true;
});