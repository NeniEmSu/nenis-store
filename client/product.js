import { getIdFromQuery, API_URL, generateContent } from "./shared.js";
const productSection = document.querySelector("main section");

const productId = getIdFromQuery();

console.log(productId);

getProduct(productId).then(displayProduct);

function getProduct(id) {
  return fetch(`${API_URL}/${id}`).then((res) => res.json());
}

function displayProduct({ product }) {
  const btn = `<a href="edit.html?id=${product.id}" class="btn btn-success mt-2">Edit Product</a>`;
  generateContent(product, 12, btn, productSection);
}
