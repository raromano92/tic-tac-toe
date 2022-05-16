// Setting up the players and turn variable
const squares = document.querySelectorAll(".square");
console.log(squares);

const player1 = "X"
const player2 = "O"
let activePlayer = player1;

const arr = Array(squares.length);
arr.fill(null)

// creating DOM getters
const button = document.getElementById("btn");
const gameOvermsg = document.getElementById("gameovermsg");
const reset = document.getElementById("gameover")

// Event listener for new game
button.addEventListener('click', buttonClick);

// Event Listener for clicking of each square on board
squares.forEach(function(square) {
    square.addEventListener('click', squareClick);
  });


// Setting up some back and forth game logic for X and O
function squareClick(event) {

    const square = event.target;
    const squareNumber = square.dataset.index;

    if (reset.className.contains("shown")) {
        return;

    }
    // if square is filled already then don't allow click
    if (square.innerText != "") {
        return;
    }
    // if it's player1 turn then fill the square with "X" and switch to player2 turn afterwards
    if (activePlayer === player1) {
        square.innerText = player1;
        arr[squareNumber] = player1;
        activePlayer = player2;
        // Now it's player2 turn aka "O"
    } else {
        square.innerText = player2;
        arr[squareNumber - 1] = player2;
        activePlayer = player1;

    }


        }
      
