const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", changingTextSize);

function changingTextSize() {
  const sizeValue = inputRef.value;
  return (textRef.style.fontSize = sizeValue + "px");
}