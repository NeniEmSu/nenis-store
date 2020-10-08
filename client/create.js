import { API_URL, alertBlock, validateInputReturnProduct } from "./shared.js";
const form = document.querySelector("form");

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();

  const product = validateInputReturnProduct(form, alertBlock);

  addProduct(product)
    .then((result) => {
      window.location = `/product.html?id=${result.id}`;
    })
    .catch((err) => {
      alertBlock.classList.remove("d-none");
      alertBlock.textContent = err;
    });
}

function addProduct(product) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch((err) => {
      alertBlock.classList.remove("d-none");
      alertBlock.textContent = err;
    });
}
