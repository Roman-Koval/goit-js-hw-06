const textInput = document.querySelector("#validation-input");

const checkInput = (e) => {
  if (textInput.hasAttribute("class")) {
    textInput.removeAttribute("class");
  }
  if (
    e.currentTarget.value.length !==
    Number(textInput.getAttribute("data-length"))
  ) {
    textInput.classList.add("invalid");
  }
  textInput.classList.add("valid");
};

textInput.addEventListener("input", checkInput);