import { endpoints } from "../constants";
import {
  deleteDataById,
  editDataById,
  getAllData,
  getDataById,
} from "../services";
import Swal from "sweetalert2";

const getBooks = async () => {
  try {
    const books = await getAllData(endpoints.books);
    renderTable(books);
  } catch (error) {
    console.log(error);
  }
};

getBooks();

function renderTable(books) {
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = "";

  books.forEach((book) => {
    const trElem = document.createElement("tr");

    // Photo sütunu
    const photoTd = document.createElement("td");
    const imgElem = document.createElement("img");
    imgElem.src = book.coverImageURL;
    imgElem.alt = book.title;
    imgElem.style.width = "100px";
    photoTd.appendChild(imgElem);

    // Name sütunu
    const nameTd = document.createElement("td");
    nameTd.textContent = book.title;

    // Price sütunu
    const priceTd = document.createElement("td");
    priceTd.textContent = `$${book.price}`;

    // Genre sütunu
    const genreTd = document.createElement("td");
    genreTd.textContent = book.genre; // Genre id-lərdən insan oxunaqlı dəyərlər alırsınızsa, uyğun dəyəri yazın

    // Description sütunu
    const descTd = document.createElement("td");
    descTd.textContent = book.description;

    // Stock sütunu
    const stockTd = document.createElement("td");
    stockTd.textContent = book.stock;

    // Actions sütunu
    const actionsTd = document.createElement("td");
    actionsTd.className = "d-flex gap-2";
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm me-2"; // Bootstrap sinifləri
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#editBook");

    editBtn.addEventListener("click", async (e) => {
      const bookObj = await getDataById(endpoints.books, book.id);
      // console.log(bookObj);

      fillInputFields(book);

      const editBookForm = document.querySelector("#editBookForm");

      editBookForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const price = parseFloat(document.getElementById("price").value);
        const description = document.getElementById("description").value;
        const stock = parseInt(document.getElementById("stock").value);
        const genre = document.getElementById("genre").value;
        const language = document.getElementById("language").value;
        const coverImageURL = document.getElementById("coverImageURL").value;

        const editedBook = {
          title,
          author,
          price,
          description,
          stock,
          genre,
          language,
          coverImageURL,
        };

        // console.log(editedBook);

        await editDataById(endpoints.books, book.id, editedBook);
        getBooks();
      });
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm"; // Bootstrap sinifləri
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    deleteBtn.addEventListener("click", (e) => {
      const btn = e.currentTarget;
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
          deleteBook(book.id, btn);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);

    // Tablaya sütunları əlavə edirik
    trElem.appendChild(photoTd);
    trElem.appendChild(nameTd);
    trElem.appendChild(priceTd);
    trElem.appendChild(genreTd);
    trElem.appendChild(descTd);
    trElem.appendChild(stockTd);
    trElem.appendChild(actionsTd);

    tBody.appendChild(trElem);
  });
}

function editBook(id) {
  console.log("Edit book with id:", id);
}

async function deleteBook(id, deleteButton) {
  try {
    const response = await deleteDataById(endpoints.books, id);
    // getBooks();
    deleteButton.closest("tr").remove();
  } catch (error) {
    console.log(error);
  }
}

const fillInputFields = (book) => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const price = document.getElementById("price");
  const description = document.getElementById("description");
  const stock = document.getElementById("stock");
  const genre = document.getElementById("genre");
  const language = document.getElementById("language");
  const coverImageURL = document.getElementById("coverImageURL");

  title.value = book.title;
  author.value = book.author;
  price.value = book.price;
  description.value = book.description;
  stock.value = book.stock;
  genre.value = book.genre;
  language.value = book.language;
  coverImageURL.value = book.coverImageURL;
};

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
