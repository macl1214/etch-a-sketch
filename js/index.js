let curColor = "rgb(0, 0, 0)";
let mode = "normal";
let curSize = 16;

const backgroundColor = "rgb(255, 255, 255)";
const grid = document.querySelector('.grid');
const colorInput = document.querySelector("#colorInput");
const randomBtn = document.querySelector(".random-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const eraseBtn = document.querySelector(".erase-btn");
const clearBtn = document.querySelector(".clear-btn");
const gridSize = document.querySelector("#gridSize");

window.addEventListener('load', setUpGrid());
colorInput.addEventListener('change', updateColor);
rainbowBtn.addEventListener('click', () => mode="rainbow");
eraseBtn.addEventListener('click', () => mode="erase");
clearBtn.addEventListener('click', clearGrid);
gridSize.addEventListener('input', changeGridSizeLabel);
gridSize.addEventListener('change', changeBoxSize);

function setUpGrid(size = 16) {
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

  if (mode === "normal") {
    box.style.backgroundColor = curColor;
  } else if (mode === "rainbow") {
    box.style.backgroundColor = randomColor();
  } else if (mode === "erase") {
    box.style.backgroundColor = "#ffffff";
  }
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

function updateColor(e) {
  const chosenColor = e.target.value;
  
  mode = "normal";
  curColor = chosenColor;
}

function clearGrid() {
  grid.innerHTML = "";
  setUpGrid(curSize);

  mode = (mode === "erase") ? "normal" : mode;
}