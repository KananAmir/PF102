const dragItem = document.querySelector("#drag-item");
const dropZones = document.querySelectorAll(".drop-zone");

dragItem.addEventListener("dragstart", (e) => {
  //   console.log("drag start");
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
  for (zone of dropZones) {
    zone.classList.remove("hover");
  }
});

dragItem.addEventListener("dragend", (e) => {
  e.target.classList.remove("hide");
});

dropZones.forEach((zone) => {
  zone.addEventListener("dragenter", (e) => {
    e.target.classList.add("hover");
  });
  zone.addEventListener("dragleave", (e) => {
    e.target.classList.remove("hover");
  });
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const dragableItem = document.getElementById(id);
    e.target.appendChild(dragableItem);
  });
});

// for (zone of dropZones) {
//   zone.addEventListener("dragenter", (e) => {
//     e.target.classList.add("hover");
//   });
//   zone.addEventListener("dragleave", (e) => {
//     e.target.classList.remove("hover");
//   });
//   zone.addEventListener("dragover", (e) => {
//     e.preventDefault();
//   });

//   zone.addEventListener("drop", (e) => {
//     e.preventDefault();
//     const id = e.dataTransfer.getData("text/plain");
//     const dragableItem = document.getElementById(id);
//     e.target.appendChild(dragableItem);
//   });
// }
