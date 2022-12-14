const ulCategories = document.querySelectorAll("li.item");
console.log("Number of categories: ", ulCategories.length);

ulCategories.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.querySelector("ul").children.length);
});
