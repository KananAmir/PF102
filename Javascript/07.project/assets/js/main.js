import { products } from "./data.js";
import {
  setDataToLocalStorage,
  getDataFromLocalStorage,
  calcWishlistCount,
  getUserInfo,
} from "./helpers.js";

const productsWrapper = document.querySelector(".products");
const logout = document.querySelector(".logout-btn");
const profileImage = document.querySelector("#profileImage");

const users = getDataFromLocalStorage("users") || [];
const user = users.find((u) => u.isLogged);

// console.log(user);

window.addEventListener("DOMContentLoaded", () => {
  getUserInfo(user);

  renderCards(products);

  calcWishlistCount(user);

  if (user) {
    profileImage.src = user.profile;
  }
});

function renderCards(arr) {
  productsWrapper.innerHTML = "";

  arr.forEach((product) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col col-md-6 col-lg-3 mb-3";

    // cardWrapper.innerHTML = `
    //         <div class="card">
    //             <img src="${product.thumbnail}" class="card-img-top" alt="..." />
    //             <div class="card-body">
    //               <h5 class="card-title">${product.title}</h5>
    //               <p class="card-text">
    //                ${product.description}
    //               </p>
    //               <a href="details.html?id=${product.id}" class="btn btn-primary"><i class="fa-solid fa-circle-info"></i></a>
    //             </div>
    //           </div>

    // `;

    const productCard = createProductCard(product);
    cardWrapper.appendChild(productCard);
    productsWrapper.appendChild(cardWrapper);
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

  console.log(favoriteButton);

  if (user) {
    const found = user.wishlist.includes(product.id);

    if (found) {
      favoriteButton.children[0].className = "fas fa-heart";
    } else {
      favoriteButton.children[0].className = "fa-regular fa-heart";
    }
  }
  favoriteButton.addEventListener("click", (e) => {
    if (user) {
      toggleWishlist(product.id, user);

      if (e.target.classList.contains("fas")) {
        e.target.classList.replace("fas", "fa-regular");
      } else {
        e.target.classList.replace("fa-regular", "fas");
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You should login first!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.replace("signin.html");
      });
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

logout.addEventListener("click", () => {
  if (user) {
    user.isLogged = false;
    setDataToLocalStorage("users", users);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logged out successfully!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("signin.html");
    });
  }
});

const toggleWishlist = (id, user) => {
  const foundIdx = user.wishlist.findIndex((q) => q === id);

  if (foundIdx === -1) {
    user.wishlist.push(id);
  } else {
    user.wishlist.splice(foundIdx, 1);
  }

  setDataToLocalStorage("users", users);
  calcWishlistCount(user);
};

[
  { productId: "123", quantity: 3 },
  { productId: "asd21", quantity: 1 },
];
