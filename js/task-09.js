function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  color.textContent = currentColor;
});
