import { products, categories } from "./data.js";

const tBody = document.querySelector("tbody");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const categorySelect = document.querySelector("#category");
const sortBtn = document.querySelector(".sort-btn");
// console.log(products);

function drawTable(arr) {
  tBody.innerHTML = "";

  arr.forEach((product) => {
    const trElem = document.createElement("tr");

    const imageTd = document.createElement("td");
    const titleTd = document.createElement("td");
    const descTd = document.createElement("td");
    const priceTd = document.createElement("td");
    const categoryTd = document.createElement("td");
    const actionsTd = document.createElement("td");

    const img = document.createElement("img");
    img.setAttribute("src", product.thumbnail);
    img.setAttribute("width", "100");

    titleTd.textContent = product.title;
    descTd.textContent = `${product.description.slice(0, 50)}...`;
    descTd.setAttribute("title", product.description);
    priceTd.textContent = `${product.price} AZN`;
    categoryTd.textContent = product.category;

    // descTd.style.maxWidth = "400px";

    // descTd.addEventListener("mouseover", (e) => {
    //   e.target.textContent = product.description;
    // });
    // descTd.addEventListener("mouseout", (e) => {
    //   e.target.textContent = product.description.slice(0, 50);
    // });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.className = "btn btn-danger";

    deleteBtn.addEventListener("click", () => {
      //   console.log(product.id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(product.id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });

    imageTd.appendChild(img);
    actionsTd.appendChild(deleteBtn);
    trElem.append(imageTd, titleTd, descTd, priceTd, categoryTd, actionsTd);
    tBody.append(trElem);
  });
}

drawTable(products);

const deleteProduct = (pId) => {
  //   const idx = products.findIndex((q) => q.id === pId);
  //   products.splice(idx, 1);
  // drawTable(products);

  const updatedProducts = products.filter((q) => q.id !== pId);
  drawTable(updatedProducts);
};

searchInput.addEventListener("keyup", (e) => {
  const filteredProducts = products.filter(
    (p) =>
      p.title
        .toLocaleLowerCase()
        .includes(e.target.value.trim().toLocaleLowerCase()) ||
      p.description
        .toLocaleLowerCase()
        .includes(e.target.value.trim().toLocaleLowerCase())
  );

  //   console.log(filteredProducts);

  drawTable(filteredProducts);
});

sortSelect.addEventListener("change", (e) => {
  let sortedProducts = null;
  switch (e.target.value) {
    case "asc":
      sortedProducts = products.toSorted((a, b) => a.price - b.price);
      break;
    case "desc":
      sortedProducts = products.toSorted((a, b) => b.price - a.price);
      break;
    default:
      sortedProducts = structuredClone(products);
  }

  drawTable(sortedProducts);
});

sortBtn.addEventListener("click", (e) => {
  let sortedProducts = null;
  switch (e.target.textContent) {
    case "Sort Asc":
      e.target.textContent = "Sort Desc";
      sortedProducts = products.toSorted((a, b) =>
        a.title.toLocaleLowerCase().localeCompare(b.title.toLocaleLowerCase())
      );
      break;
    case "Sort Desc":
      e.target.textContent = "Default";
      sortedProducts = products.toSorted((a, b) =>
        b.title.toLocaleLowerCase().localeCompare(a.title.toLocaleLowerCase())
      );
      break;
    default:
      e.target.textContent = "Sort Asc";
      sortedProducts = structuredClone(products);
  }

  drawTable(sortedProducts);
});

function createCategories() {
  categories.forEach((c) => {
    const option = document.createElement("option");
    option.textContent = c.categoryName;
    option.setAttribute("value", c.categoryName);

    categorySelect.appendChild(option);
  });
}

createCategories();

categorySelect.addEventListener("change", (e) => {
  const filteredProducts = products.filter(
    (p) => p.category.toLocaleLowerCase() === e.target.value
  );

  //   console.log(filteredProducts);

  drawTable(filteredProducts);
});

// add product

const categorySelectForm = document.querySelector("#category-select");
const addProductForm = document.querySelector("#add-product");
const imageUrl = document.querySelector("#img-url");
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const price = document.querySelector("#price");

function fillOptions() {
  categories.forEach((c) => {
    const option = document.createElement("option");
    option.textContent = c.categoryName;
    option.setAttribute("value", c.categoryName);
    categorySelectForm.appendChild(option);
  });
}

fillOptions();

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    const product = {
      id: Date.now(),
      title: title.value.trim(),
      description: desc.value.trim(),
      thumbnail: imageUrl.value.trim(),
      price: price.value.trim(),
      category: categorySelectForm.value,
    };

    products.push(product);

    drawTable(products);
    resetForm();
  } else {
  }
});

function resetForm() {
  addProductForm.reset();
}

function validate() {
  const imageUrlError = document.querySelector(".image-url-error");
  const titleError = document.querySelector(".title-error");
  const descError = document.querySelector(".desc-error");
  const priceError = document.querySelector(".price-error");

  imageUrlError.textContent = "";
  titleError.textContent = "";
  descError.textContent = "";
  priceError.textContent = "";

  let isValid = true;

  if (!imageUrl.value) {
    isValid = false;
    imageUrlError.textContent = "image url is required!";
  }
  if (!title.value) {
    isValid = false;
    titleError.textContent = "title is required!";
  }
  if (!desc.value) {
    isValid = false;
    descError.textContent = "description is required!";
  }
  if (!price.value) {
    isValid = false;
    priceError.textContent = "description is required!";
  }

  return isValid;
}
