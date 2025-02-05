//drag, dragstart, dragend, dragenter, dragover, dragleave, drop

const dropZone = document.getElementById("drop-zone");
const dragItem = document.getElementById("drag-item");
dragItem.addEventListener("dragstart", (e) => {
  //   console.log("dragstart");
  //   console.log(e.target.id);
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
});
dragItem.addEventListener("dragend", (e) => {
  //   console.log("dragend");
  e.target.classList.remove("hide");
});
dragItem.addEventListener("drag", (e) => {
  //   console.log("drag");
});

dropZone.addEventListener("dragenter", (e) => {
  //   console.log("dragenter");
});
dropZone.addEventListener("dragleave", (e) => {
  //   console.log("draglevae");
});
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  //   console.log("dragover");
});
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  //   console.log("drop");
  //   console.log("id", e.dataTransfer.getData("text/plain"));
  const id = e.dataTransfer.getData("text/plain");
  const dragableItem = document.getElementById(id);
  console.log(dragableItem);
  e.target.appendChild(dragableItem);
});

//set data data types: text/plain, text/html, application/json, file
