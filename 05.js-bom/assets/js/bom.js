// DOM - document object model
// BOM - browser object model

//global object - window

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.screen.width);
// console.log(window.screen.height);

// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.hash);

const goBack = document.querySelector(".go-back");
const copyTextBtn = document.querySelector(".copy");
const text = document.querySelector(".text");

goBack.addEventListener("click", () => {
  //   window.history.back();
  window.history.forward();
});

copyTextBtn.addEventListener("click", () => {
  window.navigator.clipboard.writeText(text.textContent);
});

// popup alerts

// window.alert("alert message");

// let bool = window.confirm("Are u sure??");

// console.log(bool);

// window.prompt("Enter ur name!")
// let userName = window.prompt("Enter ur name!", "Jhon Doe");

// console.log(userName);

// timing functions: settimeout vs setinterval

// const timeoutId = setTimeout(() => {
//   console.log("hello");
// }, 2000);

// clearTimeout(timeoutId);
// let count = 0;
// const intervalId = setInterval(() => {
//   //   console.log("interval");
//   console.log(++count);

//   if (count === 1000) {
//     clearInterval(intervalId);
//   }
// }, 10);

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const result = document.querySelector(".count");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".increment");
const decBtn = document.querySelector(".decrement");

let counterInverval = null;
let counter = 0;
startBtn.addEventListener("click", (e) => {
  //   clearInterval(counterInverval);
  e.target.disabled = true;
  stopBtn.disabled = false;

  counterInverval = setInterval(() => {
    counter++;
    result.textContent = counter;
  }, 500);
});

stopBtn.addEventListener("click", (e) => {
  clearInterval(counterInverval);
  startBtn.disabled = false;
  e.target.disabled = true;
});
resetBtn.addEventListener("click", () => {
  clearInterval(counterInverval);
  counter = 0;
  result.textContent = counter;
});
incBtn.addEventListener("click", () => {
  counter++;
  result.textContent = counter;
});
decBtn.addEventListener("click", () => {
  counter--;
  result.textContent = counter;
});

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

window.addEventListener("load", () => {
  getCurrentTime();
});

function getCurrentTime() {
  const date = new Date();
  //   console.log(date.getHours());
  //   console.log(date.getMinutes());
  //   console.log(date.getSeconds());
  if (date.getSeconds() < 10) {
    seconds.textContent = `0${date.getSeconds()}`;
  } else {
    seconds.textContent = `${date.getSeconds()}`;
  }
  if (date.getMinutes() < 10) {
    minutes.textContent = `0${date.getMinutes()}`;
  } else {
    minutes.textContent = `${date.getMinutes()}`;
  }
  if (date.getHours() < 10) {
    hours.textContent = `0${date.getHours()}`;
  } else {
    hours.textContent = `${date.getHours()}`;
  }
}

setInterval(() => {
  getCurrentTime();
}, 1000);
