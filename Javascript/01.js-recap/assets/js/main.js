const products = [
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

const milks = [
  {
    id: 1,
    name: "Azersud",
    price: 5,
    FatPercent: 1.5,
    MadeIn: "Azerbaijan",
  },
  {
    id: 2,
    name: "Palsud",
    price: 4,
    FatPercent: 2,
    MadeIn: "Azerbaijan",
  },
  {
    id: 3,
    name: "Atena",
    price: 2,
    FatPercent: 3,
    MadeIn: "Georgia",
  },
];

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const countries = [
  "Finland",
  "America",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
  "Albania",
]; // array of strings, countries
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers

console.log(webTechs.sort());
console.log(numbers.sort());

console.log(sum(1, 2));
//declearation function
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));

//arrow function

// console.log(sum(1, 2)); //error
// const sum = (a, b) => a + b;
// console.log(sum(1, 2)); // 3

//function expression

// const sum = function () {
//   return a + b;
// };

{
  var a = 5;
}
// console.log(a);

{
  let a = "hello";
}

{
}

function sayHi() {
  var userName = "jhon_doe";

  return `Hello ${userName}`;
}

// console.log(className); //annot access 'className' before initialization
// let className = "pf102";

console.log(className);
var className = "pf102";

function foo() {
  let a = 5;
}

console.log(foo());

//HOC - high order function
function mainFunc(cb) {
  return cb();
}

//callback function

// function callback() {
//   return "I am CB function";
// }

// console.log(mainFunc());
console.log(
  mainFunc(function () {
    return "I am CB function";
  })
);
console.log(
  mainFunc(() => {
    return "hii, cb";
  })
);

const btn = document.querySelector(".btn");

console.log(btn);

btn.addEventListener("click", function () {
  console.log("clicked");
});
