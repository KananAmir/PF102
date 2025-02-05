// async and await

import { getData } from "../services.js";
import { endpoints } from "./constants.js";

async function sum(a, b) {
  return a + b;
}

const sayHi = async (userName) => {
  return `Hello ${userName}!`;
};

// console.log(sum(1, 2)); //promise

// console.log(sayHi("Jhon Doe")); //promise

// sum(1, 2)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// sayHi("miri").then((result) => {
//   console.log(result);
// });

const BASE_URL = "https://book-store-api-liard-three.vercel.app/";

// axios
//   .get(`${BASE_URL}books`)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   try catch blocks

//axios
// async function getBooks() {
//   try {
//     const response = await axios.get(`${BASE_URL}books`);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}books`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

// getBooks();

//fetch
async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}${endpoints.users}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// getUsers();

// async function getGenres() {
//   try {
//     const data = await getData(endpoints.genres);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getGenres();

// getData(endpoints.genres)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteBook = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const addBook = async (endpoint, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteBtn = document.querySelector(".delete-btn");
const addBtn = document.querySelector(".add-btn");

deleteBtn.addEventListener("click", () => {
  deleteBook("books", "nSdflQ6").then((res) => {
    console.log(res);
  });
});
// addBtn.addEventListener("click", () => {
//   addBook("categories", { name: "lorem", description: "ipsum" }).then((res) => {
//     console.log(res);
//   });
// });
addBtn.addEventListener("click", () => {
  addBook("books", { name: "lorem", description: "ipsum" }).then((res) => {
    console.log(res);
  });
});

const editDataById = async (endpoint, id, payload) => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

editDataById("books", "wXBH_sr", { name: "aa", description: "bb" });
