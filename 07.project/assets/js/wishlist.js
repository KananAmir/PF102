import {
  calcWishlistCount,
  getDataFromLocalStorage,
  getUserInfo,
  setDataToLocalStorage,
} from "./helpers.js";

import { products } from "./data.js";

const wishlistCards = document.querySelector(".wishlist");
const users = getDataFromLocalStorage("users") || [];
const user = users.find((u) => u.isLogged);

window.addEventListener("DOMContentLoaded", () => {
  getUserInfo(user);
  renderWishlistCards(user.wishlist);
  calcWishlistCount(user);
});
function renderWishlistCards(arr) {
  wishlistCards.innerHTML = "";
  arr.forEach((productId) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col-12 col-md-6 col-lg-3 card-wrapper";
    const favProduct = products.find((q) => q.id === productId);

    const card = createProductCard(favProduct);

    cardWrapper.appendChild(card);
    wishlistCards.appendChild(cardWrapper);
  });
}
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  // Image container
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("product-image");

  const image = document.createElement("img");
  image.src = product.images[0];
  image.alt = product.title;
  imageContainer.appendChild(image);

  // Details container
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("product-details");

  // Brand
  const brand = document.createElement("div");
  brand.classList.add("product-brand");
  brand.textContent = product.brand;

  // Title
  const title = document.createElement("h2");
  title.classList.add("product-title");
  title.textContent = product.title;

  // Description
  const description = document.createElement("p");
  description.classList.add("product-description");
  description.textContent = product.description;

  // Price
  const price = document.createElement("div");
  price.classList.add("product-price");
  price.textContent = `$${product.price.toFixed(2)}`;

  // Meta information
  const meta = document.createElement("div");
  meta.classList.add("product-meta");

  const rating = document.createElement("div");
  rating.classList.add("product-rating");
  rating.textContent = `${product.rating?.toFixed(1)}`;

  const stock = document.createElement("div");
  stock.classList.add("product-stock");
  stock.textContent = `In Stock: ${product.stock}`;

  meta.appendChild(rating);
  meta.appendChild(stock);

  // Action buttons
  const actions = document.createElement("div");
  actions.classList.add("product-actions");

  const createActionButton = (label, iconClass) => {
    const button = document.createElement("button");
    button.classList.add("action-button");
    button.innerHTML = `<i class="${iconClass}"></i>`;
    return button;
  };

  const favoriteButton = createActionButton(
    "Add to favorites",
    "fa-regular fa-heart"
  );
  const basketButton = createActionButton(
    "Add to basket",
    "fas fa-shopping-cart"
  );

  if (user) {
    const found = user.wishlist.includes(product.id);
    console.log(favoriteButton);

    if (found) {
      favoriteButton.children[0].className = "fas fa-heart";
    } else {
      favoriteButton.children[0].className = "fa-regular fa-heart";
    }
  }
  favoriteButton.addEventListener("click", (e) => {
    // console.log(e.target);

    if (user) {
      const idx = user.wishlist.findIndex((id) => id === product.id);
      user.wishlist.splice(idx, 1);

      e.target.closest(".card-wrapper").remove();
      calcWishlistCount(user);
      setDataToLocalStorage("users", users);

      //   Swal.fire({
      //     position: "top-end",
      //     icon: "error",
      //     title: "You should login first!",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
    }
  });

  const detailsButton = document.createElement("a");
  detailsButton.innerHTML = `<i class="fa-solid fa-circle-info"></i>`;
  detailsButton.href = `details.html?id=${product.id}`;

  actions.appendChild(favoriteButton);
  actions.appendChild(detailsButton);
  actions.appendChild(basketButton);

  // Tags
  const tags = document.createElement("div");
  tags.classList.add("product-tags");

  product.tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.classList.add("product-tag");
    tag.textContent = tagText;
    tags.appendChild(tag);
  });

  // Append all elements
  detailsContainer.appendChild(brand);
  detailsContainer.appendChild(title);
  detailsContainer.appendChild(description);
  detailsContainer.appendChild(price);
  detailsContainer.appendChild(meta);
  detailsContainer.appendChild(actions);
  detailsContainer.appendChild(tags);

  card.appendChild(imageContainer);
  card.appendChild(detailsContainer);

  return card;
}
