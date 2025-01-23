import { endpoints } from "../constants";
import { addNewData, getAllData } from "../services";
import Toastify from "toastify-js";

const addGenreForm = document.getElementById("addGenreForm");

addGenreForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const bookCount = parseFloat(document.getElementById("bookCount").value);

  const newGenre = {
    name,
    description,
    bookCount,
  };

  const response = await addNewData(endpoints.genres, newGenre);
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
