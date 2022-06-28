let color = "rgb(0, 0, 0)";
let random = false;

const colorInput = document.querySelector("#colorInput");
const gridSizeBtn = document.querySelector(".custom-btn");

window.addEventListener('load', setUpGrid());
colorInput.addEventListener('click', callColorInput);
gridSizeBtn.addEventListener('click', changeBoxSize);

function setUpGrid(size = 16) {
  const grid = document.querySelector(".grid");
  grid.innerHTML = "";
  let squaresPerSide = size;

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 1; i <= squaresPerSide ** 2; i++) {
    addBox(grid, i);
  }

  gridBoxes = document.querySelectorAll('.grid-box');
  gridBoxes.forEach(box => {
    box.addEventListener('mouseover', addColor)
  });
}

function addBox(grid, id) {
  const gridBox = document.createElement("div");
  gridBox.classList.add('grid-box');
  gridBox.id = id;
  grid.appendChild(gridBox);
}

function randomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  const r = randomRGBNumber();
  const g = randomRGBNumber();
  const b = randomRGBNumber();

  return `rgb(${r}, ${g}, ${b})`;
}

function addColor(e) {
  const id = e.target.id;
  const box = document.getElementById(`${id}`);

  box.style.backgroundColor = randomColor();
}

function changeBoxSize(e) {

  while (true) {
    const size = Number.parseInt(prompt("How many boxes do you want per side?"));

    if (Number.isInteger(size) && (size > 0 && size <= 100)) {
      setUpGrid(size);
      break;
    } else {
      alert("Enter in a number between 1 and 100");  
    }
  }
}

function callColorInput() {
  
}