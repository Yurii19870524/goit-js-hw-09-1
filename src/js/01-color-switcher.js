const COLOR_DELAY = 1000;
let idInt = null;

const ref = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

ref.btnStop.disabled = true;
ref.btnStart.addEventListener('click', onBtnStartColor);
ref.btnStop.addEventListener('click', onBtnStopColor);

function onBtnStartColor() {
  ref.btnStart.disabled = true;
  ref.btnStop.disabled = false;

  idInt = setInterval(() => {
    ref.body.style.backgroundColor = getRandomHexColor();
  }, COLOR_DELAY);
}

function onBtnStopColor() {
  ref.btnStart.disabled = false;
  ref.btnStop.disabled = true;

  clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
