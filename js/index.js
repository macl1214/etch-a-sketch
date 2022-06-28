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
randomBtn.addEventListener('click', changeRandomColor)
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

function getRandomColor() {
  let colorHex = "#";
  for (let i = 0; i < 6; i++) {
    colorHex += (Math.floor(Math.random() * 16)).toString(16);
  }
  return colorHex;
}

function addColor(e) {
  const id = e.target.id;
  const box = document.getElementById(`${id}`);

  box.style.backgroundColor = getRandomColor();

  if (mode === "normal") {
    box.style.backgroundColor = curColor;
  } else if (mode === "rainbow") {
    box.style.backgroundColor = getRandomColor();
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

function changeRandomColor() {
  curColor = getRandomColor();
  colorInput.value = curColor;

  mode = "normal";
}

function clearGrid() {
  grid.innerHTML = "";
  setUpGrid(curSize);

  mode = (mode === "erase") ? "normal" : mode;
}