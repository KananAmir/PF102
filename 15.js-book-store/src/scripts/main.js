import BASE_URL, { endpoints } from "../constants";
import { getAllData } from "../services";

const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const getBooks = async () => {
  try {
    const books = await getAllData(endpoints.books);
    console.log(books);
    renderCards(books);
  } catch (error) {
    console.log(error);
  }
};

getBooks();

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

//search

let timer = null;
searchInput.addEventListener("keyup", (e) => {
  clearTimeout(timer);
  const searchQuery = e.target.value.toLowerCase().trim();
  try {
    timer = setTimeout(async () => {
      const filteredBooks = await getAllData(
        `${BASE_URL}${endpoints.books}?title_like=${searchQuery}`
      );
      renderCards(filteredBooks);
    }, 500);
  } catch (error) {
    console.log(error);
  }
});

sortSelect.addEventListener("change", async (e) => {
  try {
    let sortedBooks = null;
    switch (e.target.value) {
      case "asc":
        sortedBooks = await getAllData(
          `${BASE_URL}${endpoints.books}?_sort=price&_order=asc`
        );
        break;
      case "desc":
        sortedBooks = await getAllData(
          `${BASE_URL}${endpoints.books}?_sort=price&_order=desc`
        );
        break;

      default:
        sortedBooks = await getAllData(`${BASE_URL}${endpoints.books}`);
        break;
    }
    renderCards(sortedBooks);
  } catch (error) {
    console.log(error);
  }
});
