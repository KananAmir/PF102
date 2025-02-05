import { products } from "./data.js";
import { calcBasketCount, calcFavoritesCount } from "./helpers.js";

const basket = JSON.parse(localStorage.getItem("basket")) ?? [];
const favorites = JSON.parse(localStorage.getItem("favs")) ?? [];
const tBody = document.querySelector("tbody");
const clearBtn = document.querySelector(".clear");

const renderBasketTable = (basketArr) => {
  tBody.innerHTML = "";

  basketArr.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);

    const trElem = document.createElement("tr");

    const tdPhoto = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdUnitPrice = document.createElement("td");
    const tdInc = document.createElement("td");
    const tdQuantity = document.createElement("td");
    const tdDec = document.createElement("td");
    const tdSubTotal = document.createElement("td");
    const tdRemove = document.createElement("td");

    const photo = document.createElement("img");
    photo.setAttribute("src", product.image);
    photo.setAttribute("alt", product.title);
    photo.setAttribute("width", 100);

    tdTitle.textContent = product.title;
    tdUnitPrice.textContent = `$ ${product.price}`;

    const incBtn = document.createElement("button");
    incBtn.className = "btn btn-outline-warning";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-plus";

    incBtn.appendChild(icon);
    incBtn.addEventListener("click", (e) => {
      const found = basket.find((q) => q.productId === item.productId);
      found.quantity++;
      e.currentTarget.parentElement.nextElementSibling.textContent =
        found.quantity;

      e.currentTarget.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.textContent = `$ ${(
        item.quantity * product.price
      ).toFixed(2)}`;
      calcTotalPrice(basket);
      calcBasketCount(basket);

      //   renderBasketTable(basket);
      localStorage.setItem("basket", JSON.stringify(basket));

      Toastify({
        text: "quantity incremented!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    });

    tdQuantity.textContent = item.quantity;

    const decBtn = document.createElement("button");
    decBtn.className = "btn btn-outline-warning";
    decBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;

    decBtn.addEventListener("click", (e) => {
      const found = basket.find((q) => q.productId === item.productId);
      found.quantity--;
      e.currentTarget.parentElement.previousElementSibling.textContent =
        found.quantity;

      e.currentTarget.parentElement.nextElementSibling.textContent = `$ ${(
        item.quantity * product.price
      ).toFixed(2)}`;
      //   renderBasketTable(basket);
      calcTotalPrice(basket);
      calcBasketCount(basket);

      localStorage.setItem("basket", JSON.stringify(basket));

      Toastify({
        text: "quantity decremented!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    });

    tdSubTotal.textContent = `$ ${(item.quantity * product.price).toFixed(2)}`;

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-outline-danger";
    removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    removeBtn.addEventListener("click", (e) => {
      Swal.fire({
        title: "Are you sure to delete basket item!?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const idx = basket.findIndex((q) => q.productId === item.productId);
          basket.splice(idx, 1);
          e.target.closest("tr").remove();
          calcTotalPrice(basket);
          calcBasketCount(basket);
          localStorage.setItem("basket", JSON.stringify(basket));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });

    tdRemove.appendChild(removeBtn);
    tdDec.appendChild(decBtn);
    tdInc.appendChild(incBtn);
    tdPhoto.appendChild(photo);
    trElem.append(
      tdPhoto,
      tdTitle,
      tdUnitPrice,
      tdInc,
      tdQuantity,
      tdDec,
      tdSubTotal,
      tdRemove
    );
    tBody.appendChild(trElem);
  });
};

renderBasketTable(basket);
calcBasketCount(basket);
calcFavoritesCount(favorites);

const calcTotalPrice = (basketArr) => {
  const totalPrice = document.querySelector(".total-price");

  const total = basketArr.reduce((sum, curr) => {
    const product = products.find((p) => p.id === curr.productId);
    return sum + curr.quantity * product.price;
  }, 0);

  totalPrice.textContent = `$ ${total.toFixed(2)}`;
};

calcTotalPrice(basket);

clearBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      basket.length = 0;
      localStorage.setItem("basket", JSON.stringify(basket));
      renderBasketTable(basket);
      calcTotalPrice(basket);
      calcBasketCount(basket);

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});
