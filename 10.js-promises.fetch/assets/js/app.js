// API - application programming interface

// json - javascript object notation
//base url - https://jsonplaceholder.typicode.com/
//endpoint - users, comments, posts

//fetch

// console.log(fetch("https://northwind.vercel.app/api/categories"));

const BASE_URL = "https://northwind.vercel.app/api";

// fetch(`${BASE_URL}/suppliers`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getData("categoriessssssss");
getData("suppliers");
getData("customers");

//get by id

getDataById("customers", "BERGS");
// http status codes

// 2xx - success
// 4xx - client side errors
// 5xx - server side errors

// http request methods: get, post, delete, put, patch
