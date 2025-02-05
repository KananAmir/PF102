import { products } from "./data.js";

const id = new URLSearchParams(window.location.search).get("id");

const product = products.find((p) => p.id === id);

const detailsWrapper = document.querySelector(".details-content");
const swiperWrapper = document.querySelector(".swiper-wrapper");

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: true,
});

detailsWrapper.innerHTML = `
              <h2 class="title">${product.title}</h2>
              <p class="desc">${product.description}</p>
              <p>Price: ${product.price} AZN</p>
              <p class="raiting"></p>
              <button class="go-back btn btn-primary">Go Back</button>
        `;

const goBackBtn = document.querySelector(".go-back");
const raiting = document.querySelector(".raiting");

goBackBtn.addEventListener("click", () => {
  window.history.back();
});

product.images.forEach((img) => {
  const swiperSlide = document.createElement("div");
  const swiperImage = document.createElement("img");
  swiperSlide.className = "swiper-slide";

  swiperImage.src = img;
  swiperSlide.appendChild(swiperImage);
  swiperWrapper.appendChild(swiperSlide);
});

function renderStars(raitingCount) {
  for (let i = 0; i < Math.round(raitingCount); i++) {
    const star = document.createElement("span");
    star.innerHTML = '<i class="fa-solid fa-star"></i>';
    raiting.append(star);
  }

  for (let i = 0; i < 5 - Math.round(raitingCount); i++) {
    const star = document.createElement("span");
    star.innerHTML = '<i class="fa-regular fa-star"></i>';
    raiting.append(star);
  }
}

renderStars(product.rating);
