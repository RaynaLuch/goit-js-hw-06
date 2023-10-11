let counterValue = 0;
const buttonDec = document.querySelector(`button[data-action="decrement"]`);
const buttonInc = document.querySelector(`button[data-action="increment"]`);
const span = document.querySelector("span#value");
buttonDec.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});
buttonInc.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
