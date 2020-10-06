import { getIdFromQuery, API_URL } from "./shared.js";

const productId = getIdFromQuery();

console.log(productId);

getProduct(productId).then(displayProduct);

function getProduct(id) {
  return fetch(`${API_URL}/product/${id}`).then((res) => res.json());
}

function displayProduct({ product }) {
  console.log(product);
}
