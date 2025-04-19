const puzzle = document.getElementById("puzzle");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");
const movesCount = document.getElementById("moves");
const message = document.getElementById("message");

let tiles = [];
let moves = 0;

// Positions gagnantes
const solved = [1, 2, 3, 4, 5, 6, 7, 8, 0];

// Créer les tuiles
function createTiles(state) {
  puzzle.innerHTML = '';
  state.forEach((num, index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    if (num === 0) {
      tile.classList.add("empty");
    } else {
      tile.textContent = num;
      tile.addEventListener("click", () => moveTile(index));
    }
    puzzle.appendChild(tile);
  });
  tiles = state;
}

// Vérifier si deux cases sont voisines
function isNeighbor(index1, index2) {
  const x1 = index1 % 3, y1 = Math.floor(index1 / 3);
  const x2 = index2 % 3, y2 = Math.floor(index2 / 3);
  return (Math.abs(x1 - x2) + Math.abs(y1 - y2)) === 1;
}

// Déplacement des tuiles
function moveTile(index) {
  const emptyIndex = tiles.indexOf(0);
  if (isNeighbor(index, emptyIndex)) {
    [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
    createTiles(tiles);
    moves++;
    movesCount.textContent = moves;
    checkWin();
  }
}

// Mélanger de manière solvable
function shuffleTiles() {
  let array;
  do {
    array = solved.slice().sort(() => Math.random() - 0.5);
  } while (!isSolvable(array) || JSON.stringify(array) === JSON.stringify(solved));
  moves = 0;
  message.textContent = "";
  movesCount.textContent = moves;
  createTiles(array);
}

// Vérifier si le puzzle est solvable
function isSolvable(arr) {
  let inv = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] && arr[j] && arr[i] > arr[j]) inv++;
    }
  }
  return inv % 2 === 0;
}

// Réinitialiser
function resetPuzzle() {
  moves = 0;
  message.textContent = "";
  movesCount.textContent = moves;
  createTiles(solved.slice());
}

// Vérification de victoire
function checkWin() {
  if (JSON.stringify(tiles) === JSON.stringify(solved)) {
    message.textContent = "Bravo ! Puzzle résolu 🎉";
  }
}

// Événements
shuffleBtn.addEventListener("click", shuffleTiles);
resetBtn.addEventListener("click", resetPuzzle);

// Initialiser
createTiles(solved.slice());
