const BASE_URL = "https://northwind.vercel.app/api";

fetch(`${BASE_URL}/categories`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {});
