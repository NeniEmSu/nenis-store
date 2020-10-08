const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000/api/v1/products"
    : "https://nenis-store.herokuapp.com/api/v1/products";
const alertBlock = document.querySelector("#error");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function getIdFromQuery() {
  const path = window.location.search.match(/\?id=([0-9]+)/);
  return path[1];
}

function fetchProductById(id) {
  return fetch(`${API_URL}/${id}`).then((res) => res.json());
}

function parseDate(date) {
  return new Date(date).toLocaleDateString("en-US", options);
}

function generateContent(product, size, button, parent) {
  const productArticle = document.createElement("article");
  parent.appendChild(productArticle);
  productArticle.outerHTML = `
    <article class="card col-sm-${size}">
      <img class="card-img-top" src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <p class="card-text">$ ${product.price}</p>
        <p class="card-text">
          ${product.quantity} item(s) left in stock
        </p>
        <time class="card-text" datatime="${product.updated_at}">
          <small class="text-muted">
            Last updated ${parseDate(product.updated_at)}
          </small>
        </time>
        <br>
        ${button}
      </div>
    </article>
    `;
}

function validateInputReturnProduct(form, errorAlertBlock) {
  errorAlertBlock.classList.add("d-none");

  const formData = new FormData(form);
  const title = formData.get("title");
  const description = formData.get("description");
  const price = Number(formData.get("price"));
  const quantity = Number(formData.get("quantity"));
  const image = formData.get("image");

  if (title.trim() === "") {
    errorAlertBlock.classList.remove("d-none");
    errorAlertBlock.textContent = "Title is required!";
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 0) {
    errorAlertBlock.classList.remove("d-none");
    errorAlertBlock.textContent = "Quantity must be a positive whole number";
    return;
  }

  if (isNaN(price) || price <= 0) {
    errorAlertBlock.classList.remove("d-none");
    errorAlertBlock.textContent = "Price has to be a more than 0";
    return;
  }

  const product = {
    title,
    description,
    price,
    quantity,
    image,
  };
  return product;
}

export {
  API_URL,
  alertBlock,
  fetchProductById,
  getIdFromQuery,
  generateContent,
  validateInputReturnProduct,
};
