const readlineSync = require('readline-sync');

const gridSize = 10;
const ships = [
  { size: 2, count: 1 },
  { size: 3, count: 2 },
  { size: 4, count: 1 },
  { size: 5, count: 1 }
];

let shipsRemaining, board, shipPositions;

const initializeBoard = () => board = Array.from({ length: gridSize }, () => Array(gridSize).fill(0));

const randomPosition = size => Math.floor(Math.random() * size);

const canPlaceShip = (row, col, size, orientation) =>
  orientation === 'horizontal'
    ? col + size <= gridSize && board[row].slice(col, col + size).every(cell => !cell)
    : row + size <= gridSize && board.slice(row, row + size).every(row => !row[col]);

const placeShip = (row, col, size, orientation) =>
  Array.from({ length: size }, (_, i) => {
    const r = orientation === 'horizontal' ? row : row + i;
    const c = orientation === 'horizontal' ? col + i : col;
    board[r][c] = 1;
    return { row: r, col: c };
  });

const placeShips = () => {
  shipPositions = [];
  shipsRemaining = ships.reduce((total, { count }) => total + count, 0);
  ships.forEach(({ size, count }) =>
    Array(count).fill().forEach(() => {
      let placed = false;
      while (!placed) {
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const row = randomPosition(gridSize - (orientation === 'vertical' ? size : 1));
        const col = randomPosition(gridSize - (orientation === 'horizontal' ? size : 1));
        if (canPlaceShip(row, col, size, orientation)) {
          shipPositions.push({ positions: placeShip(row, col, size, orientation), hits: 0, size });
          placed = true;
        }
      }
    })
  );
};

const processGuess = (guessedLocations, guess) => {
  if (guessedLocations.includes(guess)) return "You have already picked this location. Miss!";
  guessedLocations.push(guess);
  const [row, col] = [guess.charCodeAt(0) - 65, parseInt(guess.substring(1)) - 1];
  if (row < 0 || row >= gridSize || col < 0 || col >= gridSize) return "Invalid location. Please enter a valid location.";
  if (!board[row][col]) return 'You have missed!';

  board[row][col] = 0;
  const ship = shipPositions.find(({ positions }) => positions.some(pos => pos.row === row && pos.col === col));
  ship.hits++;
  return ship.hits === ship.size
    ? (--shipsRemaining === 0 ? "Hit! You have sunk the last battleship. Game over!" : `Hit! You have sunk a battleship. ${shipsRemaining} ship(s) remaining.`)
    : 'Hit!';
};

const playGame = () => {
  initializeBoard();
  placeShips();
  const guessedLocations = [];

  while (true) {
    const guess = readlineSync.question(`Enter a location to strike (e.g., 'A1') or type 'exit' to quit: `).trim().toUpperCase();
    if (guess === 'EXIT') return console.log("Exiting the game. Thank you for playing!");
    console.log(processGuess(guessedLocations, guess));
    if (shipsRemaining === 0) {
      if (readlineSync.question("You have destroyed all battleships. Would you like to play again? (Y/N) ").trim().toUpperCase() !== 'Y') {
        return console.log("Thank you for playing!");
      }
      initializeBoard();
      placeShips();
      guessedLocations.length = 0;
    }
  }
};

playGame();