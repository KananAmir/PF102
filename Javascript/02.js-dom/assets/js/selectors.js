// DOM - document object model
// BOM - browser object model

// global object - window

// console.log(window);
// console.log(window.document);
// console.log(window.document.head);
// console.log(window.document.body);

const heading = document.getElementById("heading");
const langInputs = document.getElementsByName("language");
const paragElements = document.getElementsByTagName("p");
// console.log(heading.textContent);
console.log(langInputs);
console.log(paragElements);

const addParagBtn = document.getElementById("add-parag");

addParagBtn.addEventListener("click", function () {
  const pElem = document.createElement("p");
  pElem.textContent = "lorem ipsum";
  document.body.append(pElem);
  console.log(paragElements);
});

// const allListElems = document.getElementsByClassName("item");
const allListElems = document.querySelectorAll("nav #menu .item");
const listElem = document.querySelector("nav #menu .item");

console.log(allListElems);
console.log(listElem);

// paragElements.forEach((element) => {
//   console.log(element);
// });
Array.from(paragElements).forEach((element) => {
  console.log(element);
});
//textContent, innerText, innerHTML
