const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const myParent = document.querySelector("ul#ingredients");
const liIngredients = [];
ingredients.forEach((elem) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = elem;
  ingredient.classList.add("item");
  liIngredients.push(ingredient);
});

myParent.append(...liIngredients);
