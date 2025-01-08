//promises

//sinxron vs asinxron
// console.log(1);
// console.log(2);
// console.log(3);

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);

//promise states: pending, fullfilled, rejected

// const promise = new Promise((resolve, reject) => {
//   resolve("success");
//   //   reject("failed");
// });

const students = ["farid", "gunel", "miri"];

// students.length = 0;

const promise = new Promise((resolve, reject) => {
  if (students.length > 0) {
    resolve(students);
  } else {
    reject("failed!");
  }
});

//blocks: then, catch, finally

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally block worked!");
//   });
// console.log(promise);

// promise chaning

const techs = ["html", "css", "js"];

const myPromise = new Promise((resolve, reject) => {
  if (techs.length > 0) {
    // resolve({ data: techs, error: null, message: "success!" });
    resolve(techs);
  } else {
    reject({
      data: null,
      message: "array is empty!",
    });
  }
});

console.log(myPromise);

myPromise
  .then((res) => {
    res.push("react");
    return res;
  })
  .then((data) => {
    data.shift();
    return data;
  })
  .then((q) => {
    console.log(q);
  })
  .catch((err) => {
    console.log(err);
  });

//HOC - high order function
function main(func) {
  func();
}

main(cb);

//callback function
function cb() {}

//callback hell

// setTimeout(() => {
//   console.log("operation 1");
// }, 1000);
// setTimeout(() => {
//   console.log("operation 2");
// }, 1000);
// setTimeout(() => {
//   console.log("operation 3");
// }, 1000);

// setTimeout(() => {
//   console.log("operation 1");
//   setTimeout(() => {
//     console.log("operation 2");
//     setTimeout(() => {
//       console.log("operation 3");
//       setTimeout(() => {
//         console.log("operation 4");
//         setTimeout(() => {
//           console.log("operation 5");
//           setTimeout(() => {
//             console.log("operation 6");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function getUser(userId, callback) {
  setTimeout(() => {
    console.log("İstifadəçi məlumatları gətirildi");
    callback({ id: userId, name: "Ali" });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Sifarişlər gətirildi");
    callback([
      { orderId: 1, amount: 50 },
      { orderId: 2, amount: 100 },
    ]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    console.log(`Sifariş ${orderId} detalları gətirildi`);
    callback({ orderId: orderId, product: "Kitab", quantity: 2 });
  }, 1000);
}

// Callback Hell
getUser(1, (user) => {
  console.log("İstifadəçi:", user);

  getOrders(user.id, (orders) => {
    console.log("Sifarişlər:", orders);

    getOrderDetails(orders[0].orderId, (orderDetails) => {
      console.log("Sifariş detalları:", orderDetails);
    });
  });
});

// request, response
