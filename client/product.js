import { getIdFromQuery, fetchProductById, generateContent } from "./shared.js";
const productSection = document.querySelector("main section");

const productId = getIdFromQuery();

fetchProductById(productId).then(displayProduct);

function displayProduct({ product }) {
  const btn = `<a href="edit.html?id=${product.id}" class="btn btn-success mt-2">Edit Product</a>`;
  generateContent(product, 12, btn, productSection);
}
