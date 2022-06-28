let color = "rgb(0, 0, 0)";
let random = false;

const colorInput = document.querySelector("#colorInput");
const gridSize = document.querySelector("#gridSize");
const clearBtn = document.querySelector(".clear-btn")

window.addEventListener('load', setUpGrid());
// colorInput.addEventListener('click', callColorInput);
gridSize.addEventListener('input', changeGridSizeLabel);
gridSize.addEventListener('change', changeBoxSize);
clearBtn.addEventListener('click', clearGrid);

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
  const size = e.target.value;

  setUpGrid(size);
}

function changeGridSizeLabel(e) {
  let size = e.target.value;
  let message = `${size} x ${size}`;

  const gridSizeLabel = document.querySelector('.grid-size-label');

  gridSizeLabel.innerText = message;
}