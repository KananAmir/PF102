import { endpoints } from "../constants";
import { getAllData } from "../services";

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
  booksWrapper.innerHTML = "";
  books.forEach((book) => {
    const col = document.createElement("div");
    col.className =
      "col-12 col-md-6 col-lg-4 col-xl-3 mb-3 d-flex justify-content-center";
    col.innerHTML = `
       <div class="book-card">
                <div class="book-actions">
                  <button
                    class="action-button wishlist-button"
                    title="Add to wishlist"
                  >
                    <i class="fas fa-heart"></i>
                  </button>
                  <a
                    class="action-button details-button"
                    title="View details"
                    href="/src/pages/client/details.html?id=${book.id}"
                  >
                    <i class="fas fa-info-circle"></i>
                  </a>
                </div>
                <img
                  src="${book.coverImageURL}"
                  alt="The Pragmatic Programmer"
                  class="book-cover"
                />
                <div class="book-info">
                  <h2 class="book-title">${book.title}</h2>
                  <p class="book-author">by ${book.author}</p>
                  <div class="info">
                    <p class="book-price">$${book.price}</p>
                    <div class="book-rating">
                      <span class="star">★</span>
                      <span class="rating-value">${book.rating} (${book.sold} sold)</span>
                    </div>
                  </div>
                  <p class="book-stock">In stock: ${book.stock}</p>
                </div>
              </div>
`;
    booksWrapper.append(col);
  });
};
