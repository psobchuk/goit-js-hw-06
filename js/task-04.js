const value = document.querySelector("#value");

const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

let counter = 0;

const increase = () => {
  counter += 1;
  value.textContent = counter;
};

const decrease = () => {
  counter -= 1;
  value.textContent = counter;
};

increment.addEventListener("click", increase);
decrement.addEventListener("click", decrease);
