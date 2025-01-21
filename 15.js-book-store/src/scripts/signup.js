import { endpoints } from "../constants";
import { addNewData, getAllData } from "../services";

const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const profilePicture = document.getElementById("profilePicture").value.trim();

  const users = await getAllData(endpoints.users);

  const bool = users.some(
    (user) => user.username === username || user.email === email
  );

  if (!bool) {
    const newUser = {
      username,
      email,
      password,
      profilePicture,
      role: "user",
      balance: 0,
      totalSpentMoney: 0,
      accountCreationDate: new Date().toLocaleDateString("en-CA"),
      favorites: [],
      basket: [],
    };
    console.log(newUser);

    await addNewData(endpoints.users, newUser);
  } else {
    alert("username or email already used!");
  }
});
