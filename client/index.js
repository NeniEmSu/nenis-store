const API_URL = 'http://localhost:3000/api/v1/products'
const productsSection = document.querySelector('main section')

getProducts()
  .then(displayProducts)

function getProducts() {
  return fetch(API_URL)
    .then(res => res.json())
}

function displayProducts({
  products
}) {
  products.forEach(product => {
    const productArticle = document.createElement('article');
    productsSection.appendChild(productArticle)
    productArticle.outerHTML = `
    <article class="card col-sm-4">
      <img class="card-img-top" src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <a href="/product.html?id=${product.id}" class="btn btn-primary">View Product</a>
      </div>
    </article>
    `
  });
}