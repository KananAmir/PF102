// #qiyməti 50 dən böyük olan productları tapın (array şəklində)
// #qiyməti 50 dən böyük olan və category Clothes olan productları tapın (array şəklində)
// #category'si electronics olan productları tapın (array şəklində)
// #category'si clothes olan ilk productu tapın (array şəklində)
// #productların qiymətləri cəmini tapın
// #productların qiymətləri ortalamasını tapın

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

// 1)
// const filteredProducts = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 50) {
//     filteredProducts.push(products[i]);
//   }
// }

// console.log(filteredProducts);

// const filteredProducts = products.filter(
//   (product, index, array) => product.price > 50
// );

// 2)
// const filteredProducts = products.filter(
//   (product, index, array) =>
//     product.price > 50 && product.category.toLocaleLowerCase()
// );

// console.log(filteredProducts);

// 3)

// const filteredProducts = products.filter(
//   (product) => product.category.toLocaleLowerCase() === "clothes"
// );

// console.log(filteredProducts);

// 4)

// const found = products.find(
//   (p) => p.category.toLocaleLowerCase() === "clothes"
// );

// console.log(found);

// 5)

// let sumOfPrices = 0;
// products.forEach((p) => {
//   sumOfPrices += p.price;
// });

// console.log(sumOfPrices / products.length);

// const countries = [
//   "Finland",
//   "America",
//   "Denmark",
//   "Sweden",
//   "Azerbaijan",
//   "Norway",
//   "Iceland",
//   "Albania",
// ]; // array of strings, countries

// const updatedCountries = countries.map((q) =>
//   q.slice(0, 3).toLocaleUpperCase("az")
// );

// console.log(updatedCountries);

const nums = [2, 5, 1, 8, 4];

const sumOfNums = nums.reduce((sum, item) => sum + item);
// const sumOfNums = nums.reduce((sum, item) => sum + item, 0);

console.log(sumOfNums);

const sumOfProductPrices = products.reduce(
  (sum, item, index, array) => sum + item.price,
  0
);

console.log(sumOfProductPrices / products.length);

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

// webTechs.splice(2, 3);
// webTechs.splice(2, 1);
webTechs.splice(2, 1, "Javascript", "ExpressJS");

console.log(webTechs);

console.log(webTechs.map((q) => q.toLocaleUpperCase()));

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

// const filteredMilks = milks.filter((q) => q.id !== 2);

// console.log(filteredMilks);

const idx = milks.findIndex((q) => q.id === 3);
console.log(idx);

milks.splice(idx, 1);

console.log(milks);

const numbers = [0, 37, 3.14, 9.81, 100, 98.6]; // array of numbers

// SORT NUMBERS VALUES
// const numbersCopy = [...numbers];
// const numbersCopy = structuredClone(numbers);
// const numbersCopy = JSON.parse(JSON.stringify(numbers));
// numbers.sort((a, b) => a - b); //sort numbers asc
// numbers.sort((a, b) => b - a); //sort numbers asc
const asc = numbers.toSorted((a, b) => a - b); //sort numbers asc
const desc = numbers.toSorted((a, b) => b - a); //sort numbers asc

console.log(numbers);
console.log(asc);
console.log(desc);

const ascByPrice = products.toSorted((a, b) => a.price - b.price);
const descByPrice = products.toSorted((a, b) => b.price - a.price);

console.log("acs by price", ascByPrice);
console.log("desc by price", descByPrice);

// SORT STRING VALUES

const sortByNameAcs = products.toSorted((a, b) =>
  a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
);
const sortByNameDesc = products.toSorted((a, b) =>
  b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase())
);

console.log("sort by name asc", sortByNameAcs);
console.log("sort by name desc", sortByNameDesc);
console.log(products);
