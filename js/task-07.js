const sizeInput = document.querySelector("input#font-size-control");
const textSpan = document.querySelector("span#text");
sizeInput.addEventListener("input", () => {
  textSpan.style.fontSize = sizeInput.value + "px";
});
