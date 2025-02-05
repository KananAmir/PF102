import { endpoints } from "../constants";
import { addNewData, getAllData } from "../services";
import Toastify from "toastify-js";

const addBookForm = document.getElementById("addBookForm");

addBookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const price = parseFloat(document.getElementById("price").value);
  const description = document.getElementById("description").value;
  const stock = parseInt(document.getElementById("stock").value);
  const genre = document.getElementById("genre").value;
  const language = document.getElementById("language").value;
  const coverImageURL = document.getElementById("coverImageURL").value;

  const newBook = {
    title,
    author,
    price,
    description,
    stock,
    genre,
    language,
    coverImageURL,
    rating: 0,
    sold: 0,
  };

  const response = await addNewData(endpoints.books, newBook);
  //   window.location.href = "/";

  e.target.reset();
  Toastify({
    text: "book added successfully!",
    duration: 3000,
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

const getGenres = async () => {
  try {
    const genres = await getAllData(endpoints.genres);
    fillGenres(genres);
  } catch (error) {
    console.log(error);
  }
};

getGenres();

const fillGenres = (genres) => {
  const genreSelect = document.getElementById("genre");
  genres.forEach((g) => {
    const option = document.createElement("option");
    // option.setAttribute("value", g.name.toLowerCase());
    option.setAttribute("value", g.id);
    option.textContent = g.name;
    genreSelect.appendChild(option);
  });
};
