import { products } from "./data.js";

const productsWrapper = document.querySelector(".products");

renderCards(products);
function renderCards(arr) {
  productsWrapper.innerHTML = "";

  arr.forEach((product) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col col-md-6 col-lg-3 mb-3";
    cardWrapper.innerHTML = `
            <div class="card">
                <img src="${product.thumbnail}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">
                   ${product.description}
                  </p>
                  <a href="details.html?id=${product.id}" class="btn btn-primary"><i class="fa-solid fa-circle-info"></i></a>
                </div>
              </div>
    
    `;

    productsWrapper.appendChild(cardWrapper);
  });
}
