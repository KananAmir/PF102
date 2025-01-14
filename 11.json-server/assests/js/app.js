const BASE_URL = "http://localhost:3000/";

fetch(`${BASE_URL}products`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
