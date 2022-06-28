function setUpGrid() {
  const grid = document.querySelector(".grid");
  let squaresPerSide = 16;

  for (let i = 1; i <= squaresPerSide ** 2; i++) {
    addBox(grid, i);
  }
}

function addBox(grid, id) {
  const gridBox = document.createElement("div");
  gridBox.classList.add('grid-box');
  gridBox.id = id;
  grid.appendChild(gridBox);
}

window.addEventListener('load', setUpGrid);