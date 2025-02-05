import { BASE_URL } from "../assets/js/constant.js";
import {
  deleteDataById,
  getAllData,
  getDataById,
} from "../assets/js/services.js";

// getDataById("suppliers", 8);

// deleteDataById("suppliers", 4);

// getAllData("suppliers").then((data) => {
//   console.log(data);
// });

function getData(endpoint) {
  const loadingMessage = document.querySelector(".loading");
  loadingMessage.classList.replace("d-none", "d-block");
  fetch(`${BASE_URL}/${endpoint}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);

      drawTable(data);
      // console.table(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadingMessage.classList.replace("d-block", "d-none");
    });
}

getData("suppliers");

function drawTable(arr) {
  const tBody = document.querySelector("tbody");
  tBody.innerHTML = "";
  arr.forEach((element) => {
    const trElem = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdContact = document.createElement("td");
    const tdAddress = document.createElement("td");
    const tdActions = document.createElement("td");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.className = "btn btn-danger";

    const details = document.createElement("a");
    details.className = "btn btn-primary";
    details.textContent = "details";
    details.setAttribute("href", `details.html?id=${element.id}`);

    deleteBtn.addEventListener("click", (e) => {
      if (window.confirm("are u sure to delete?")) {
        deleteData("suppliers", element.id, e.target);
      }
    });
    tdId.textContent = element.id;
    tdName.textContent = element.companyName;
    tdContact.textContent = element.contactTitle;
    tdAddress.textContent = `${element.address?.city}, ${element.address?.country}`;

    const editBtn = document.createElement("a");
    editBtn.textContent = "edit";
    editBtn.className = "btn btn-success";
    editBtn.href = `edit-supplier.html?id=${element.id}`;

    tdActions.className = "d-flex gap-2";
    tdActions.append(details, deleteBtn, editBtn);
    trElem.append(tdId, tdName, tdContact, tdAddress, tdActions);
    tBody.appendChild(trElem);
  });
}

const deleteData = (endpoint, id, btn) => {
  //   console.log(id);

  fetch(`${BASE_URL}/${endpoint}/${id}`, { method: "DELETE" })
    .then((response) => {
      if (response.status === 200) {
        // getData("suppliers");
        btn.closest("tr").remove();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
