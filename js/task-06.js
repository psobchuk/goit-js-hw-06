const validationInput = document.querySelector("#validation-input");
const dataLength = validationInput.getAttribute("data-length");

const onBlur = (event) => {
  if (event.currentTarget.value.length === Number(dataLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
};

validationInput.addEventListener("blur", onBlur);
