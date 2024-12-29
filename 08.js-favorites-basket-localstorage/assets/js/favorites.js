import { products } from "./data.js";
import { calcBasketCount, calcFavoritesCount } from "./helpers.js";
const favorites = JSON.parse(localStorage.getItem("favs")) || [];
const basket = JSON.parse(localStorage.getItem("basket")) || [];
const favoritesCards = document.querySelector(".favorites");
const renderCards = (arr) => {
  favoritesCards.innerHTML = "";
  arr.forEach((element) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "col col-md-6 col-lg-4 mb-3 card-wrapper";
    const card = document.createElement("div");
    card.className = "card";
    const title = document.createElement("h4");
    const img = document.createElement("img");
    const heartIcon = document.createElement("i");

    heartIcon.className = "fa-solid fa-heart";

    heartIcon.addEventListener("click", (e) => {
      const idx = favorites.findIndex(
        (favProduct) => favProduct.id === element.id
      );

      favorites.splice(idx, 1);

      e.target.closest(".card-wrapper").remove();
      // console.log(favorites);
      localStorage.setItem("favs", JSON.stringify(favorites));
    });
    title.textContent = element.title;
    img.src = element.image;
    img.width = 100;
    card.append(title, img, heartIcon);
    cardWrapper.append(card);
    favoritesCards.append(cardWrapper);
  });
};

renderCards(favorites);
calcBasketCount(basket);
calcFavoritesCount(favorites);
