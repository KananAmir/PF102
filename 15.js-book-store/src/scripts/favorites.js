import BASE_URL, { endpoints } from "../constants";
import {
  editDataById,
  editDataByIdWithPatch,
  getAllData,
  getDataById,
} from "../services";

const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const skeleton = document.getElementById("skeleton");

const { userId } = JSON.parse(localStorage.getItem("userInfo"));

if (userId) {
  getUser();
}

async function getUser() {
  try {
    const user = await getDataById(endpoints.users, userId);
    const books = await getAllData(endpoints.books);

    const favBooks = user.favorites.map((favorite) =>
      books.find((book) => +book.id === +favorite.bookId)
    );

    renderCards(favBooks);
  } catch (error) {
    console.log(error);
  } finally {
  }
}

// getBooks();

const renderCards = (books) => {
  const booksWrapper = document.querySelector(".books");
  booksWrapper.innerHTML = ""; // Mövcud məzmunu təmizləyir

  books.forEach((book) => {
    // Column div
    const col = document.createElement("div");
    col.className =
      "col-12 col-md-6 col-lg-4 col-xl-3 mb-3 d-flex justify-content-center";

    // Book card div
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";

    // Book actions div
    const bookActions = document.createElement("div");
    bookActions.className = "book-actions";

    // Wishlist button
    const wishlistButton = document.createElement("button");
    wishlistButton.className = "action-button wishlist-button";
    wishlistButton.title = "Add to wishlist";
    wishlistButton.innerHTML = `<i class="fas fa-heart"></i>`;
    bookActions.appendChild(wishlistButton);

    wishlistButton.addEventListener("click", (e) => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo) {
        window.alert("login first!");
        window.location.replace("login.html");
        return;
      }

      handleToggleWishlist(book.id);
    });

    // Details link
    const detailsLink = document.createElement("a");
    detailsLink.className = "action-button details-button";
    detailsLink.title = "View details";
    detailsLink.href = `details.html?id=${book.id}`;
    detailsLink.innerHTML = `<i class="fas fa-info-circle"></i>`;
    bookActions.appendChild(detailsLink);

    // Add book actions to book card
    bookCard.appendChild(bookActions);

    // Book cover image
    const bookCover = document.createElement("img");
    bookCover.src = book.coverImageURL;
    bookCover.alt = book.title;
    bookCover.className = "book-cover";
    bookCard.appendChild(bookCover);

    // Book info div
    const bookInfo = document.createElement("div");
    bookInfo.className = "book-info";

    // Book title
    const bookTitle = document.createElement("h2");
    bookTitle.className = "book-title";
    bookTitle.textContent = book.title;
    bookInfo.appendChild(bookTitle);

    // Book author
    const bookAuthor = document.createElement("p");
    bookAuthor.className = "book-author";
    bookAuthor.textContent = `by ${book.author}`;
    bookInfo.appendChild(bookAuthor);

    // Info div
    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    // Book price
    const bookPrice = document.createElement("p");
    bookPrice.className = "book-price";
    bookPrice.textContent = `$${book.price}`;
    infoDiv.appendChild(bookPrice);

    // Book rating div
    const bookRating = document.createElement("div");
    bookRating.className = "book-rating";

    const star = document.createElement("span");
    star.className = "star";
    star.textContent = "★";
    bookRating.appendChild(star);

    const ratingValue = document.createElement("span");
    ratingValue.className = "rating-value";
    ratingValue.textContent = `${book.rating} (${book.sold} sold)`;
    bookRating.appendChild(ratingValue);

    infoDiv.appendChild(bookRating);
    bookInfo.appendChild(infoDiv);

    // Book stock
    const bookStock = document.createElement("p");
    bookStock.className = "book-stock";
    bookStock.textContent = `In stock: ${book.stock}`;
    bookInfo.appendChild(bookStock);

    // Add book info to book card
    bookCard.appendChild(bookInfo);

    // Add book card to column
    col.appendChild(bookCard);

    // Add column to books wrapper
    booksWrapper.appendChild(col);
  });
};

//favorites

const handleToggleWishlist = async (id) => {
  try {
    const { userId } = JSON.parse(localStorage.getItem("userInfo"));
    const user = await getDataById(endpoints.users, userId);
    const bool = user.favorites.find((q) => q.bookId === +id);

    let updatedFavs;
    if (!bool) {
      updatedFavs = [...user.favorites, { bookId: +id }];
    } else {
      updatedFavs = user.favorites.filter((q) => q.bookId !== +id);
    }

    // console.log(updatedFavs);

    await editDataById(endpoints.users, userId, {
      ...user,
      favorites: updatedFavs,
    });

    await getUser();
    // await editDataByIdWithPatch(endpoints.users, userId, {
    //   favorites: updatedFavs,
    // });
  } catch (error) {
    console.log(error);
  }
};
