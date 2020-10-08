import { API_URL } from "./shared.js";
const form = document.querySelector("form");
const alertBlock = document.querySelector("#error");

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();

  alertBlock.classList.add("d-none");

  const formData = new FormData(form);
  const title = formData.get("title");
  const description = formData.get("description");
  const price = Number(formData.get("price"));
  const quantity = Number(formData.get("quantity"));
  const image = formData.get("image");

  if (title.trim() === "") {
    alertBlock.classList.remove("d-none");
    alertBlock.textContent = "Title is required!";
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 0) {
    alertBlock.classList.remove("d-none");
    alertBlock.textContent = "Quantity must be a positive whole number";
    return;
  }

  if (isNaN(price) || price <= 0) {
    alertBlock.classList.remove("d-none");
    alertBlock.textContent = "Price has to be a more than 0";
    return;
  }

  const product = {
    title,
    description,
    price,
    quantity,
    image,
  };

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
