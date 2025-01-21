import { endpoints } from "../constants";
import { deleteDataById, getAllData } from "../services";
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
