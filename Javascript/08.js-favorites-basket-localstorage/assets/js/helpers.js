// export const calcBasketCount = (basketArr) => {
//   const basketCount = document.querySelector(".basket-count");
//   basketCount.textContent = basketArr.length;
// };
export const calcBasketCount = (basketArr) => {
  const basketCount = document.querySelector(".basket-count");
  basketCount.textContent = basketArr.reduce((sum, curr) => {
    return sum + curr.quantity;
  }, 0);
};
export const calcFavoritesCount = (favoritesArr) => {
  const favoritesCount = document.querySelector(".favorites-count");
  favoritesCount.textContent = favoritesArr.length;
};
