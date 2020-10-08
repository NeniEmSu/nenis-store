import {
  API_URL,
  alertBlock,
  getIdFromQuery,
  fetchProductById,
  validateInputReturnProduct,
} from "./shared.js";
const form = document.querySelector("form");

const productId = getIdFromQuery();

fetchProductById(productId).then(populateFormInputs);

function populateFormInputs({ product }) {
  document.querySelector("#title").value = product.title;
  document.querySelector("#description").value = product.description;
  document.querySelector("#price").value = product.price;
  document.querySelector("#quantity").value = product.quantity;
  document.querySelector("#image").value = product.image;
}

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();

  const product = validateInputReturnProduct(form, alertBlock);

  updateProduct(productId, product)
    .then(() => {
      window.location = `/product.html?id=${productId}`;
    })
    .catch((err) => {
      alertBlock.classList.remove("d-none");
      alertBlock.textContent = err;
    });
}

function updateProduct(id, product) {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
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
