function setUpGrid() {
  const grid = document.querySelector(".grid");
  let squaresPerSide = 16;

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

function changeBoxSize() {
  
}

window.addEventListener('load', setUpGrid);

const gridSizeBtn = document.querySelector(".custom-btn");
gridSizeBtn.addEventListener('click', changeBoxSize);