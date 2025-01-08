import { setDataToLocalStorage, getDataFromLocalStorage } from "./helpers.js";

const signUpForm = document.querySelector("form");
const profileImageWrapper = document.querySelector(".profile-image");
const profileInput = document.querySelector("#profile");
// const users = JSON.parse(JSON.stringify("users")) ?? [];
const users = getDataFromLocalStorage("users") ?? [];
let profileImage = null;

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
      profile: profileImage,
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

profileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file && file.type.startsWith("image")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      profileImage = reader.result;
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
  }
});

//drop zone
profileImageWrapper.addEventListener("dragover", (e) => {
  e.preventDefault();
});
profileImageWrapper.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  console.log(file);

  if (file && file.type.startsWith("image")) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      profileImage = reader.result;
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
  }
});
