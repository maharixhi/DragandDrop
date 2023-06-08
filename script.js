let draggedItem = null;

function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text", event.target.id);
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.dropEffect = "move";
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add("dragover");
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function dragLeave(event) {
  event.target.classList.remove("dragover");
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("dragover");

  const data = event.dataTransfer.getData("text");
  const item = document.getElementById(data);

  if (event.target.id === "container2") {
    event.target.appendChild(item);
    document.getElementById('successMessage').innerHTML = 'Item dropped successfully!';
  }
}

function reset() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
  }

  document.getElementById('successMessage').innerHTML = '';
}
