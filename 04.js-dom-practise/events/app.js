const header = document.querySelector("header");

// window.addEventListener("scroll", (e) => {
//   //   console.log(window.scrollY);
//   if (window.scrollY > 0) {
//     header.classList.add("scroll");
//   } else {
//     header.classList.remove("scroll");
//   }
// });

window.addEventListener("scroll", (e) => {
  header.classList.toggle("scroll", window.scrollY > 0);
});

//load, unload, DOMContentLoaded

const p = {
  id: "6403c49deb0d73a0453b6c6e",
  title: "iPhone X 128GB",
  brand: "Apple",
  description:
    "The iPhone X was Apple's flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition, 3D camera functionality, a glass body, and an A11 Bionic processor.",
  price: 960,
  images: [
    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg",
    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-2.jpg",
    "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-4.jpg",
    "https://fdn.gsmarena.com/imgroot//reviews/17/apple-iphone-x/lifestyle/-728w2/gsmarena_019.jpg",
  ],
  thumbnail: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
  category: "smartphones",
  stock: 55,
  tags: ["mobile phone", "smartphone", "ios"],
  rating: 5,
  info: {
    a: "a",
    b: "b",
  },
};

// let title = p.title;
// let description = p.description;
// let tags = p.tags;

//destructing
const techs = ["html", "css", "js", "react", "redux"];
// const h = techs[0];
// const c = techs[1];
// const j = techs[2];

// const [h, , j] = techs;
const [h, c, j, ...rest] = techs;

const description = "lorem ipsum";
const {
  title,
  description: desc,
  tags,
  stock,
  thumbnail,
  info: { a },
} = p;
