const API_URL = "http://localhost:3000/api/v1/products";
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

export { API_URL, getIdFromQuery, generateContent };
