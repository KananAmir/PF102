// web storages

//local storage
//session storage
//cookies

// console.log(localStorage);

localStorage.setItem("username", "jhon_doe");
localStorage.setItem("mode", "dark");
localStorage.setItem("lang", "az");
localStorage.setItem("number", 55);
localStorage.setItem("isLogged", true);

console.log(localStorage.getItem("username"));

const clearBtn = document.querySelector(".clear");
const removeItem = document.querySelector(".remove-item");

clearBtn.addEventListener("click", () => {
  localStorage.clear();
});
removeItem.addEventListener("click", () => {
  localStorage.removeItem("username");
});

console.log(localStorage.length);
console.log(localStorage);
console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));

// session storage

// sessionStorage.setItem("id", 123);

//counter

const incBtn = document.querySelector(".inc");
const decBtn = document.querySelector(".dec");
const countResult = document.querySelector(".count");

// let count = localStorage.getItem("count") || 0;
let count = parseInt(localStorage.getItem("count")) ?? 0;
countResult.textContent = count;

incBtn.onclick = () => {
  count++;
  countResult.textContent = count;
  localStorage.setItem("count", count);
};
decBtn.onclick = () => {
  count--;
  countResult.textContent = count;
  localStorage.setItem("count", count);
};

const products = [
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
];

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

localStorage.setItem("techs", JSON.stringify(webTechs));

console.log(localStorage.getItem("techs"));
console.log(typeof localStorage.getItem("techs"));

console.log(JSON.parse(localStorage.getItem("techs")));

const product = {
  id: "6403c49deb0d73a0453b6c6e",
  title: "iPhone X 128GB",
  brand: "Apple",
  description:
    "The iPhone X was Apple's flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition, 3D camera functionality, a glass body, and an A11 Bionic processor.",
  price: 960,
  thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
  category: "smartphones",
  stock: 55,
  tags: ["mobile phone", "smartphone", "ios"],
  rating: 5,
};

localStorage.setItem("product", JSON.stringify(product));

console.log(JSON.parse(localStorage.getItem("product")));
