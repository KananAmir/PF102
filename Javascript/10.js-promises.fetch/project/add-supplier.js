import { BASE_URL } from "../assets/js/constant.js";
import { editData, editDataWithSpecificFields } from "../assets/js/services.js";

const addForm = document.getElementById("add-form");

addForm.addEventListener("submit", (e) => {
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

  fetch(`${BASE_URL}/suppliers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(supplier),
  })
    .then((res) => {
      if (res.status === 201) {
        resetForm();
        window.location.replace("project.html");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(supplier);
});

const resetForm = () => {
  addForm.reset();
};

// editData("suppliers", 8, { companyName: "code", test: "lorem" });
// editDataWithSpecificFields("suppliers", 5, {
//   companyName: "code",
//   contactTitle: "pf102",
// });
