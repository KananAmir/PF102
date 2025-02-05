const clickBtn = document.querySelector(".click");

clickBtn.addEventListener("click", (event) => {
  console.log(event);

  console.log("btn clicked");
});

// clickBtn.onclick = function () {
//   console.log("1");
// };
// clickBtn.onclick = function () {
//   console.log("2");
// };
// clickBtn.onclick = function () {
//   console.log("3");
// };

//event propagation - event bubling, event capturing

const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
const btn = document.querySelector(".btn");

//event bubling
// outer.addEventListener("click", () => {
//   console.log("outer clicked");
// });
// inner.addEventListener("click", () => {
//   console.log("inner clicked");
// });
// btn.addEventListener("click", () => {
//   console.log("btn clicked");
// });

//event capturing
// outer.addEventListener(
//   "click",
//   () => {
//     console.log("outer clicked");
//   },
//   { capture: true }
// );
// inner.addEventListener(
//   "click",
//   () => {
//     console.log("inner clicked");
//   },
//   { capture: true }
// );
// btn.addEventListener(
//   "click",
//   () => {
//     console.log("btn clicked");
//   },
//   { capture: true }
// );

// outer.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("outer clicked");
// });
// inner.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("inner clicked");
// });
// btn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("btn clicked");
// });

const box = document.querySelector(".box");
window.addEventListener("contextmenu", (e) => {
  console.log("contextmenu event worked");

  console.log(e);
});

box.addEventListener("mousedown", (e) => {
  console.log("mousedown");
});
box.addEventListener("mouseup", (e) => {
  console.log("mouseup");
});
box.addEventListener("mouseover", (e) => {
  console.log("mouseover");
  e.target.style.backgroundColor = "teal";
});

// keyboard events

// window.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log("keydown");
// });
// window.addEventListener("keyup", (e) => {
//   console.log(e);
//   console.log("keyup");
// });

let alpha = 0.8;
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") {
    if (alpha < 1) alpha += 0.1;
  } else if (event.code === "ArrowDown") {
    if (alpha > 0) alpha -= 0.1;
  } else {
  }

  document.body.style.backgroundColor = `rgba(255,165,0,${alpha})`;
});

const searchInput = document.getElementById("search");
//keyup
// searchInput.addEventListener("keyup", (event) => {
//   console.log(event.target.value);
// });

//form events
// searchInput.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });
// searchInput.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });
searchInput.addEventListener("focus", (event) => {
  event.target.style.backgroundColor = "cyan";
});
searchInput.addEventListener("blur", (event) => {
  event.target.style.backgroundColor = "#fff";
});

document.querySelector(".focus").addEventListener("click", () => {
  searchInput.focus();
});

//submit

const userForm = document.querySelector(".user-form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const users = [];
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = {
    id: Date.now(),
    username: username.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
  };

  users.push(user);

  console.log(users);

  resetForm();
});

function resetForm() {
  username.value = "";
  email.value = "";
  password.value = "";
}
