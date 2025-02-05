import { products } from "./data.js";
import { calcBasketCount, calcFavoritesCount } from "./helpers.js";
const favorites = JSON.parse(localStorage.getItem("favs")) || [];
const basket = JSON.parse(localStorage.getItem("basket")) || [];

const productCards = document.querySelector(".products");
const renderCards = (arr) => {
  productCards.innerHTML = "";
  arr.forEach((element) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col col-md-6 col-lg-4 mb-3";
    const card = document.createElement("div");
    card.className = "card d-flex align-items-center gap-2 p-3";
    const title = document.createElement("h4");
    title.className = "text-center";
    const img = document.createElement("img");
    const heartIcon = document.createElement("i");
    const addToCartBtn = document.createElement("button");

    if (!basket.find((q) => q.productId === element.id)) {
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.className = "btn btn-primary";
    } else {
      addToCartBtn.textContent = "Already in Card";
      addToCartBtn.className = "btn btn-warning";
    }

    const isFav = favorites.find((q) => q.id === element.id);
    if (isFav) {
      heartIcon.className = "fa-solid fa-heart";
    } else {
      heartIcon.className = "fa-regular fa-heart";
    }

    heartIcon.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-regular")) {
        e.target.classList.replace("fa-regular", "fa-solid");
      } else {
        e.target.classList.replace("fa-solid", "fa-regular");
      }

      const idx = favorites.findIndex(
        (favProduct) => favProduct.id === element.id
      );

      if (idx === -1) {
        favorites.push(element);
      } else {
        favorites.splice(idx, 1);
      }

      calcFavoritesCount(favorites);
      // console.log(favorites);
      localStorage.setItem("favs", JSON.stringify(favorites));
    });

    addToCartBtn.addEventListener("click", () => {
      addToCartBtn.textContent = "Already in Card";
      addToCartBtn.className = "btn btn-warning";

      const found = basket.find((q) => q.productId === element.id);
      if (!found) {
        basket.push({ productId: element.id, quantity: 1 });
      } else {
        found.quantity = found.quantity + 1;
      }
      calcBasketCount(basket);
      localStorage.setItem("basket", JSON.stringify(basket));
    });

    title.textContent = element.title;
    img.src = element.image;
    img.width = 100;
    card.append(title, img, heartIcon, addToCartBtn);
    cardWrapper.append(card);
    productCards.append(cardWrapper);
  });
};

renderCards(products);

calcFavoritesCount(favorites);
calcBasketCount(basket);
