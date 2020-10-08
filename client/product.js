import {
  API_URL,
  getIdFromQuery,
  fetchProductById,
  generateContent,
  alertBlock,
} from "./shared.js";
const productSection = document.querySelector("main section");

const productId = getIdFromQuery();

fetchProductById(productId).then(displayProduct);

function displayProduct({ product }) {
  const btn = `
  <div class="row">
    <div class="col-6"> 
      <a href="edit.html?id=${product.id}" class="btn btn-success mt-2">
        Edit Product
      </a> 
    </div>
    <div class="col-6">
      <button
        id="delete"
        class="btn btn-danger mt-2">
        Delete Product Product
      </button> 
    </div>
  </div>
  `;
  generateContent(product, 12, btn, productSection);

  const deleteBtn = document.querySelector("#delete");

  deleteBtn.addEventListener("click", () => {
    deleteProduct(productId).then(() => {
      window.location = "/";
    });
  });
}

function deleteProduct(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => {
      alertBlock.classList.remove("d-none");
      alertBlock.textContent = err;
    });
}
