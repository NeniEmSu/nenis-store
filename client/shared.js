const API_URL = "http://localhost:3000/api/v1";

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
        <time class="card-text" datatime="${product.updated_at}">
          <small class="text-muted">
            Last updated ${parseDate(product.updated_at)}
          </small>
        </time>
        ${button}
      </div>
    </article>
    `;
}

export { API_URL, getIdFromQuery, generateContent };
