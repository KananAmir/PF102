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
              <div class="raiting">
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
                  <span class="star"></span>
              </div>
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

function renderStars(rating) {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star, index) => {
    const fillPercentage = Math.max(0, Math.min(1, rating - index)) * 100;
    // Ulduzun doldurulma faizini `linear-gradient` ilə təyin et
    star.style.background = `linear-gradient(to right, gold ${fillPercentage}%, #ddd ${fillPercentage}%)`;
  });
}

renderStars(product.rating);
