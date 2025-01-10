const id = new URLSearchParams(window.location.search).get("id");

const supplierName = document.querySelector(".name");
const supplierDesc = document.querySelector(".desc");
// console.log(id);

const getOneSupplier = () => {
  fetch(`https://northwind.vercel.app/api/suppliers/${id}`).then((res) =>
    res
      .json()
      .then((data) => {
        console.log(data);
        supplierName.textContent = data.companyName;
        supplierDesc.textContent = data.contactTitle;
      })
      .catch((err) => {
        console.log(err);
      })
  );
};

getOneSupplier();
