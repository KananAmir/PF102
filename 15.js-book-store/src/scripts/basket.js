import { endpoints } from "../constants";
import { editDataById, getAllData, getDataById } from "../services";
const clearBtn = document.querySelector(".clear");
const { userId } = JSON.parse(localStorage.getItem("userInfo"));

if (userId) {
  getUser();
}

async function getUser() {
  try {
    const user = await getDataById(endpoints.users, userId);
    console.log(user);

    const books = await getAllData(endpoints.books);

    const cart = user.basket.map((q) => {
      const book = books.find((book) => +book.id === +q.bookId);

      return { ...book, quantity: q.quantity };
    });

    renderBasketTable(cart, user);
  } catch (error) {
    console.log(error);
  } finally {
  }
}
const renderBasketTable = (basketArr, user) => {
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = "";

  basketArr.forEach((product) => {
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
    photo.setAttribute("src", product.coverImageURL);
    photo.setAttribute("alt", product.title);
    photo.setAttribute("width", 100);

    tdTitle.textContent = product.title;
    tdUnitPrice.textContent = `$ ${product.price}`;

    const incBtn = document.createElement("button");
    incBtn.className = "btn btn-outline-warning";
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-plus";

    incBtn.appendChild(icon);

    incBtn.addEventListener("click", async (e) => {
      try {
        const basket = user.basket;
        console.log(basket);
        const idx = basket.findIndex((q) => q.bookId == product.id);

        // console.log(basket[idx]);
        basket[idx].quantity++;

        const res = await editDataById(endpoints.users, user.id, {
          ...user,
          basket: basket,
        });
        e.target.closest("tr").remove();
      } catch (error) {
        console.log(error);
      }
    });

    tdQuantity.textContent = product.quantity;

    const decBtn = document.createElement("button");
    decBtn.className = "btn btn-outline-warning";
    decBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;

    tdSubTotal.textContent = product.price * product.quantity;
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-outline-danger";
    removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

    removeBtn.addEventListener("click", async (e) => {
      try {
        const idx = user.basket.findIndex((q) => q.bookId == product.id);
        user.basket.splice(idx, 1);

        await editDataById(endpoints.users, user.id, {
          ...user,
          basket: user.basket,
        });
        e.target.closest("tr").remove();
      } catch (error) {
        console.log(error);
      }
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
