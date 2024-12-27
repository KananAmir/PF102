import { setDataToLocalStorage, getDataFromLocalStorage } from "./helpers.js";

const signUpForm = document.querySelector("form");

// const users = JSON.parse(JSON.stringify("users")) ?? [];
const users = getDataFromLocalStorage("users") ?? [];

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  const bool = users.some(
    (user) => user.username === username || user.email === email
  );

  if (!bool) {
    const user = {
      id: Date.now(),
      username,
      email,
      password,
      isLogged: false,
      wishlist: [],
      basket: [],
    };

    users.push(user);

    //   localStorage.setItem("users", JSON.stringify(users));
    setDataToLocalStorage("users", users);

    resetForm();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User Signed Up Successfully!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      //   window.location.href = "signin.html";
      window.location.replace("signin.html");
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Username or Email already has been used!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

const resetForm = () => {
  signUpForm.reset();
};

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
