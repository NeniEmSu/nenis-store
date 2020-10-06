import { API_URL, generateContent } from "./shared.js";
const productsSection = document.querySelector("main section");

getProducts().then(displayProducts);

function getProducts() {
  return fetch(`${API_URL}/products`).then((res) => res.json());
}

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function displayProducts({ products }) {
  products.forEach((product) => {
    const btn = `<a href="product.html?id=${product.id}" class="btn btn-primary mt-2">View Product</a>`;
    generateContent(product, 4, btn, productsSection);
  });
}
