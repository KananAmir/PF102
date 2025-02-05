import { BASE_URL } from "../assets/js/constant.js";
import { editData, editDataWithSpecificFields } from "../assets/js/services.js";

const id = new URLSearchParams(window.location.search).get("id");

const editForm = document.getElementById("add-form");

function getDataById() {
  fetch(`${BASE_URL}/suppliers/${id}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      fillFormFields(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataById();

function fillFormFields(supplierObj) {
  const company = document.getElementById("company");
  const contact = document.getElementById("contact");
  const city = document.getElementById("city");
  const country = document.getElementById("country");

  console.log(supplierObj);

  company.value = supplierObj.companyName;
  contact.value = supplierObj.contactTitle;
  city.value = supplierObj.address?.city;
  country.value = supplierObj.address?.country;
}
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const company = document.getElementById("company").value;
  const contact = document.getElementById("contact").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  const supplier = {
    companyName: company,
    contactTitle: contact,
    address: {
      city: city,
      country: country,
    },
  };

  //   console.log(supplier);

  fetch(`${BASE_URL}/suppliers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supplier),
  })
    .then((res) => {
      if (res.status === 200) {
        resetForm();
        window.location.replace("project.html");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const resetForm = () => {
  editForm.reset();
};
