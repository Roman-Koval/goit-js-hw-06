function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let bodyEl = document.querySelector('body');
const btn = bodyEl.querySelector('.change-color');
const spanEl = bodyEl.querySelector('.color');
btn.addEventListener('click', changingColor);
function changingColor() {
 return (bodyEl.style.backgroundColor = getRandomHexColor(), spanEl.textContent = getRandomHexColor());
}
 




