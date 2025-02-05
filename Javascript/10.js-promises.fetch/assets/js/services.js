import { BASE_URL } from "./constant.js";

//get all data
function getAllData(endpoint) {
  const response = fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
}
// get data by id
function getDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
// delete data by id

function deleteDataById(endpoint, id) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, { method: "DELETE" })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// post data
function addNewData(endpoint, payload) {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// edit data
//put
function editData(endpoint, id, payload) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
//patch
function editDataWithSpecificFields(endpoint, id, payload) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
export {
  getAllData,
  getDataById,
  deleteDataById,
  addNewData,
  editData,
  editDataWithSpecificFields,
};
