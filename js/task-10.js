function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const divBoxes = document.querySelector("div#boxes");

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const divBox = document.createElement("div");
    divBoxes.append(divBox);

    divBox.style.height = size + "px";
    divBox.style.width = size + "px";
    divBox.style.backgroundColor = getRandomHexColor();
    size += 10;
  }
}
buttonCreate.addEventListener("click", () => {
  const number = input.value;
  createBoxes(number);
});

buttonDestroy.addEventListener("click", () => {
  while (divBoxes.firstChild) {
    divBoxes.firstChild.remove();
  }
});
