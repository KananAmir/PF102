const textFile = document.getElementById("textFile");

// textFile.addEventListener("change", (e) => {
//   //   console.log(e.target.files[0]);
//   const file = e.target.files[0];
//   const reader = new FileReader();

//   reader.readAsText(file);

//   reader.onload = function () {
//     console.log(reader.result);
//   };

//   //   reader.addEventListener("load", () => {
//   //     console.log(reader.result);
//   //   });

//   reader.onerror = function () {
//     console.log(reader.error);
//   };
// });

const text = document.querySelector(".wrapper .text");
textFile.addEventListener("change", (e) => {
  //   console.log(e.target.files[0]);
  const file = e.target.files[0];

  if (file && file.type === "text/plain") {
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
      //   console.log(reader.result);

      text.textContent = reader.result;
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  } else {
    window.alert("select only text files!");
  }
});

const profileImage = document.querySelector(".profile");
const profileImageFile = document.querySelector("#profileImage");

profileImageFile.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file && file.type.startsWith("image")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      console.log(reader.result);
      //   profileImage.setAttribute("src", reader.result);
      profileImage.src = reader.result;
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
  } else {
    window.alert("only images!");
  }
});

const dropZone = document.querySelector(".box.drop-zone");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];

  if (file && file.type.startsWith("image")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
      // console.log(reader.result);
      profileImage.src = reader.result;
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  } else {
    window.alert("only images!");
  }
});
