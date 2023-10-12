const textInput = document.querySelector("input#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length === 6) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
