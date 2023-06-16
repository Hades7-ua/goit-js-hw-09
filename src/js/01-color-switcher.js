const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervald = null;

startBtn.addEventListener('click', startColorChange);

stopBtn.addEventListener('click', stopBtnColorChange);
stopBtn.setAttribute('disabled', '');

function startColorChange() {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  intervald = setInterval(() => {
    changeBackgroundColor();
  }, 1000);
}

function stopBtnColorChange() {
  clearInterval(intervald);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
}

function changeBackgroundColor() {
  const randomBodyColor = getRandomHexColor();
  body.style.backgroundColor = randomBodyColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
