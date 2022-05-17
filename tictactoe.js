// Setting up the players and turn variable

const player1 = "X"
const player2 = "O"
let activePlayer = player1;

const gameover = false
let squares = Array.from(document.querySelectorAll(".square"));
const played = document.querySelectorAll(".square").innerText;
let gameboard = ["", "", "", "","","","","",""]
const wincon = [
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 1, 2],
    [2, 4, 6],
    [2, 5, 8],
    [0, 5, 9]
]

console.log(wincon[3]) 

// const arr = Array(squares);
// arr.fill(null)

// creating DOM getters
const button = document.getElementById("btn");
const gameOvermsg = document.getElementById("gameovermsg");
const reset = document.getElementById("gameover")


// Event listener for new game

// button.addEventListener("click", buttonClick);
function gameRestart() {
    console.log("reset button works")
// reset gameboard and reset inner text of all squares
    gameboard = ["", "", "", "","","","","",""]
    console.log("gameboard reset")
    squares.forEach(square => square.innerText = "")
    
}

// Event Listener for X and O

//  Check for winner
function checkForWin () {
    for(let i = 0; i < wincon.length; i++) {
        console.log("all Winning Conditions", wincon[i])
        console.log(gameboard)
        console.log(gameboard[wincon[i][2]])

    let check1 = gameboard[wincon[i][0]]
    let check2 = gameboard[wincon[i][1]]
    let check3 = gameboard[wincon[i][2]]
    // if (gameover === false && gameboard === wincon) 
    //     alert("it works!")
    if (check1 === "" || check2 === "" || check3 === "") {
        continue;
    }

    if (check2 === check1 && check2 === check3) {
        console.log(activePlayer, "is the winner") }
}
    
}

// Setting up some back and forth game logic for X and O
function squareClick(square, index) {
console.log(square, index);

// If board is filled up then dont allow clicks
// if (reset.classList.contains("filled")) {
//     return;
//  commenting out, might use later
// }
// if square is filled already then don't allow click
 if (square.innerText != "") {
    return;
}
// if it's player1 turn then fill the square with "X" and switch to player2 turn afterwards
else if (activePlayer === player1) {
    square.innerText = player1;
    gameboard[index] = player1;
    console.log(gameboard);
    checkForWin();
    activePlayer = player2;
    // Now it's player2 turn aka "O"
} else {
    square.innerText = player2;
    gameboard[index] = player2;
    console.log(gameboard);
    checkForWin();
    activePlayer = player1;

}
}

squares.forEach((square, index) => {
square.addEventListener("click",() => squareClick(square, index)) 
    
// if gameboard is filled up don't allow clicks

    
});

button.addEventListener("click", gameRestart)
    

