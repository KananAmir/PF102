import { getAllData, getDataById } from "../services";
import { endpoints } from "../constants";
const goBackBtn = document.querySelector("#goBack");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const getBookDetails = async () => {
  try {
    const bookDetails = await getDataById(endpoints.books, id);
    renderBookDetails(bookDetails);
  } catch (error) {
    console.log(error);
  }
};

if (id) {
  getBookDetails();
}

const renderBookDetails = (book) => {
  const bookDetailsContainer = document.querySelector(
    "#book-details .container"
  );

  // Kitab detalları bölməsi
  const bookDetails = document.createElement("div");
  bookDetails.className = "book-details";

  // Kitab şəkli
  const bookImageDiv = document.createElement("div");
  bookImageDiv.className = "book-image";

  const bookImage = document.createElement("img");
  bookImage.src = book.coverImageURL;
  bookImage.alt = `${book.title} book cover`;

  bookImageDiv.appendChild(bookImage);
  bookDetails.appendChild(bookImageDiv);

  // Kitab məlumatları
  const bookInfo = document.createElement("div");
  bookInfo.className = "book-info";

  // Başlıq
  const bookTitle = document.createElement("h1");
  bookTitle.className = "book-title";
  bookTitle.textContent = book.title;

  // Müəllif
  const bookAuthor = document.createElement("p");
  bookAuthor.className = "book-author";
  bookAuthor.textContent = `by ${book.author}`;

  // Meta məlumatlar
  const bookMeta = document.createElement("div");
  bookMeta.className = "book-meta";

  const bookPrice = document.createElement("span");
  bookPrice.className = "book-price";
  bookPrice.textContent = `$${book.price}`;

  const bookRating = document.createElement("div");
  bookRating.className = "book-rating";

  const stars = document.createElement("span");
  stars.className = "stars";
  stars.textContent = "★";

  const ratingInfo = document.createElement("span");
  ratingInfo.textContent = `${book.rating} (${book.sold} sold)`;

  bookRating.appendChild(stars);
  bookRating.appendChild(ratingInfo);
  bookMeta.appendChild(bookPrice);
  bookMeta.appendChild(bookRating);

  // Təsvir
  const bookDescription = document.createElement("div");
  bookDescription.className = "book-description";

  const descriptionText = document.createElement("p");
  descriptionText.textContent = book.description;

  bookDescription.appendChild(descriptionText);

  // Ətraflı məlumat gridi
  const bookDetailsGrid = document.createElement("div");
  bookDetailsGrid.className = "book-details-grid";

  // Ətraflı məlumat elementləri
  const details = [
    { label: "Genre", value: book.genre },
    { label: "Language", value: book.language },
    { label: "Stock", value: `${book.stock} available` },
    { label: "ID", value: book.id },
  ];

  details.forEach((detail) => {
    const detailItem = document.createElement("div");
    detailItem.className = "detail-item";

    const detailLabel = document.createElement("div");
    detailLabel.className = "detail-label";
    detailLabel.textContent = detail.label;

    const detailValue = document.createElement("div");
    detailValue.textContent = detail.value;

    detailItem.appendChild(detailLabel);
    detailItem.appendChild(detailValue);
    bookDetailsGrid.appendChild(detailItem);
  });

  // Səbətə əlavə et düyməsi
  const addToCartLink = document.createElement("a");
  addToCartLink.href = "#";
  addToCartLink.className = "add-to-cart";
  addToCartLink.textContent = "Add to Cart";

  // Elementləri birləşdiririk
  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(bookAuthor);
  bookInfo.appendChild(bookMeta);
  bookInfo.appendChild(bookDescription);
  bookInfo.appendChild(bookDetailsGrid);
  bookInfo.appendChild(addToCartLink);

  bookDetails.appendChild(bookInfo);

  // Container-ə əlavə edirik
  bookDetailsContainer.appendChild(bookDetails);
};

goBackBtn.addEventListener("click", () => {
  window.history.back();
});
