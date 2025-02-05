const BASE_URL = "https://book-store-api-liard-three.vercel.app/";

function getBooks() {
  axios(`${BASE_URL}books`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getBooks();
