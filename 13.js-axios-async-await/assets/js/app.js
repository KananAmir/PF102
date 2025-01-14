const BASE_URL = "https://northwind.vercel.app/api/";

const list = document.querySelector(".list");

// get all data
function getCategories() {
  axios(`${BASE_URL}categories`)
    .then((res) => {
      console.log(res.data);
      createList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
getCategories();

// get data by id
function getCategoryById(id) {
  axios(`${BASE_URL}categories/${id}`)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

//delete data
function deleteCategory(id, btn) {
  axios.delete(`${BASE_URL}categories/${id}`).then(() => {
    // getCategories();
    btn.parentElement.remove();
  });
}

// function addNewData(categoryObj) {
//   fetch(`${BASE_URL}categories`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(categoryObj),
//   });
// }

//post data
function addNewData(categoryObj) {
  axios
    .post(`${BASE_URL}categories`, categoryObj)
    .then((res) => {
      //   console.log(res);
      if (res.status === 201) {
        getCategories();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const newCategory = {
  name: "PF102",
  description: "lorem ipsum dolor",
};

const postBtn = document.getElementById("post");
postBtn.addEventListener("click", () => {
  // addNewData(newCategory);
  addNewData({ name: "test", description: "test" });
});

//edit data by id

function editDataById(id, categoryObj) {
  axios
    .put(`${BASE_URL}categories/${id}`, categoryObj)
    .then((res) => {
      //   console.log(res);
      if (res.status === 200) {
        getCategories();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

const editBtn = document.getElementById("edit");

editBtn.addEventListener("click", () => {
  const editedtObj = {
    name: "frontend",
    description: "html css js",
  };
  editDataById(7, editedtObj);
});

const createList = (arr) => {
  list.innerHTML = "";
  arr.forEach((element) => {
    const liElem = document.createElement("li");

    const name = document.createElement("span");
    name.textContent = element.name;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", (e) => {
      deleteCategory(element.id, e.target);
    });

    liElem.append(name, deleteBtn);
    list.appendChild(liElem);
  });
};
