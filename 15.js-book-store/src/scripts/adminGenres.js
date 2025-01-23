import { endpoints } from "../constants";
import {
  deleteDataById,
  editDataById,
  getAllData,
  getDataById,
} from "../services";
import Swal from "sweetalert2";

const getGenres = async () => {
  try {
    const genres = await getAllData(endpoints.genres);
    renderTable(genres);
  } catch (error) {
    console.log(error);
  }
};

getGenres();

function renderTable(genres) {
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = "";

  genres.forEach((genre) => {
    const trElem = document.createElement("tr");

    const idTd = document.createElement("td");
    idTd.textContent = genre.id;

    const nameTd = document.createElement("td");
    nameTd.textContent = genre.name;

    const descTd = document.createElement("td");
    descTd.textContent = genre.description;

    const bookCountTd = document.createElement("td");
    bookCountTd.textContent = genre.bookCount;

    // Actions sütunu
    const actionsTd = document.createElement("td");
    actionsTd.className = "d-flex gap-2";
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning btn-sm me-2";
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#editBook");

    editBtn.addEventListener("click", async (e) => {
      fillInputFields(genre);

      const editGenreForm = document.querySelector("#editGenreForm");

      async function handleEditGenre(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const bookCount = document.getElementById("bookCount").value;

        const editedGenre = {
          name,
          description,
          bookCount,
        };

        await editDataById(endpoints.genres, genre.id, editedGenre);
        getGenres();
      }

      editGenreForm.onclick = handleEditGenre;
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
    trElem.appendChild(idTd);
    trElem.appendChild(nameTd);
    trElem.appendChild(descTd);
    trElem.appendChild(bookCountTd);
    trElem.appendChild(actionsTd);

    tBody.appendChild(trElem);
  });
}

// function editBook(id) {
//   console.log("Edit book with id:", id);
// }

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
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const bookCount = document.getElementById("bookCount");

  name.value = book.name;
  description.value = book.description;
  bookCount.value = book.bookCount;
};
