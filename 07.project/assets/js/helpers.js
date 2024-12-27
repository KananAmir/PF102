const setDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

function calcWishlistCount(user) {
  const wishlistCount = document.querySelector(".wishlist-count");
  wishlistCount.textContent = user.wishlist.length;
}

const getUserInfo = (user) => {
  const userName = document.querySelector(".user-name");
  const signUpBtn = document.querySelector(".sign-up-btn");
  const signInBtn = document.querySelector(".sign-in-btn");
  const logoutBtn = document.querySelector(".logout-btn");
  if (user) {
    userName.textContent = user.username;
    signInBtn.classList.replace("d-block", "d-none");
    signUpBtn.classList.replace("d-block", "d-none");
    logoutBtn.classList.replace("d-none", "d-block");
  } else {
    signInBtn.classList.replace("d-none", "d-block");
    signUpBtn.classList.replace("d-none", "d-block");
    logoutBtn.classList.replace("d-block", "d-none");
  }
};

export {
  setDataToLocalStorage,
  getDataFromLocalStorage,
  calcWishlistCount,
  getUserInfo,
};
