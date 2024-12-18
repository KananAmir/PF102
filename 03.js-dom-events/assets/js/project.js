const userForm = document.querySelector(".user-form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const users = [];
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value.trim() && email.value.trim() && password.value.trim()) {
    const user = {
      id: Date.now(),
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };

    users.push(user);
    drawTable(users);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User added successfully!",
      showConfirmButton: false,
      timer: 1500,
    });

    resetForm();
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "fill all fields!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

function resetForm() {
  username.value = "";
  email.value = "";
  password.value = "";
}

const tBody = document.querySelector("tbody");

function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
        <td>${element.id}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        <td>${element.password}</td>
        <td><button class="btn btn-danger delete" data-id="${element.id}">delete</button></td>
    `;
    tBody.append(trElem);
  });
  const allDeleteBtns = document.querySelectorAll(".delete");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //   console.log(e.target.closest("tr"));
      //   e.target.closest("tr").remove();

      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const id = btn.getAttribute("data-id");

          const idx = users.findIndex((q) => q.id == id);
          //   console.log(idx);
          users.splice(idx, 1);
          drawTable(users);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });
}
