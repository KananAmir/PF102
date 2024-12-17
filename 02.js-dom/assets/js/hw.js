let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"lerinin cemini tapin
// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 5) "name"-i en uzun olan obyekti tapin
// 6) "name"-i en uzun olan obyektin key'ni tapin
// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
// 9)  en boyuk "key" i olan obyektin "name"-i ni tapin
// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.
// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

//   7)
// let maxLengthElement = arr[0];
// let maxLengthElementIndex = null;
// arr.forEach((item, idx) => {
//   if (item.name.length > maxLengthElement.name.length) {
//     maxLengthElement = item;
//     maxLengthElementIndex = idx;
//   }
// });

// console.log(maxLengthElementIndex, maxLengthElement);
// console.log("RESULT:", maxLengthElementIndex ** 2);

// 10)

// arr.forEach((item) => {
//   let lCount = 0;
//   [...item.name].forEach((letter) => {
//     if (letter.toLocaleLowerCase() === "l") {
//       lCount++;
//     }
//   });

//   if (lCount === 2) {
//     console.log(item);
//   }
// });

// 11)
// arr.forEach((item) => {
//   let lCount = 0;
//   [...item.name].forEach((letter) => {
//     if (letter.toLocaleLowerCase() === "t") {
//       lCount++;
//     }
//   });

//   if (lCount >= 2) {
//     console.log(item);
//   }
// });

arr.forEach((item) => {
  if (
    item.name.toLocaleLowerCase().indexOf("t") !==
    item.name.toLocaleLowerCase().lastIndexOf("t")
  ) {
    console.log(item);
  }
});
// 12)

// let result = arr.filter(
//   (q) => q.key > 10 && q.name.toLocaleLowerCase().startsWith("l")
// );

// console.log(result);
