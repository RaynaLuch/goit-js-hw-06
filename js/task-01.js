const myCategories = document.querySelector("ul#categories");
const childArr = myCategories.children;
console.log("Number of categories: " + childArr.length);
const arr = [...childArr];
arr.forEach((elem) => {
  console.log("Category: " + elem.firstElementChild.firstChild.textContent);
  console.log("Elements: " + elem.lastElementChild.children.length);
});
