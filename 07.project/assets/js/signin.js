import { setDataToLocalStorage, getDataFromLocalStorage } from "./helpers.js";
const loginForm = document.querySelector("form");

const users = getDataFromLocalStorage("users") ?? [];

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameOrEmail = document
    .querySelector("#usernameOrEamil")
    .value.trim();
  const password = document.querySelector("#password").value.trim();

  const foundUser = users.find(
    (user) =>
      user.password === password &&
      (user.username === usernameOrEmail || user.email === usernameOrEmail)
  );

  //   console.log(foundUser);

  if (foundUser) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Signed Up Successfully!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      foundUser.isLogged = true;
      setDataToLocalStorage("users", users);
      window.location.replace("index.html");
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Wrong credientials!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

const eyeIcon = document.querySelector(".eye-icon");

eyeIcon.addEventListener("click", (e) => {
  const pwInput = document.querySelector("#password");
  if (e.target.classList.contains("fa-eye")) {
    e.target.classList.remove("fa-eye");
    e.target.classList.add("fa-eye-slash");
    pwInput.type = "password";
  } else {
    e.target.classList.remove("fa-eye-slash");
    e.target.classList.add("fa-eye");
    pwInput.type = "text";
  }
});
