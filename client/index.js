import { API_URL, generateContent } from "./shared.js";
const productsSection = document.querySelector("main section");

getProducts().then(displayProducts);

function getProducts() {
  return fetch(`${API_URL}`).then((res) => res.json());
}

function displayProducts({ products }) {
  products.forEach((product) => {
    const btn = `<a href="product.html?id=${product.id}" class="btn btn-primary mt-2">View Product</a>`;
    generateContent(product, 4, btn, productsSection);
  });
}
