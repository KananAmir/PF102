import { endpoints } from "../constants";
import { getAllData } from "../services";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = await getAllData(endpoints.users);

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    localStorage.setItem(
      "userInfo",
      JSON.stringify({ userId: user.id, role: user.role })
    );
    if (user.role === "client") {
      window.location.replace("/");
    } else {
      window.location.replace("/dashboard");
    }
  } else {
    alert("wrong credientials!");
  }

  console.log(user);
});
