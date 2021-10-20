const spaces = [];
const tick_circle = 'O';
const tick_x = 'X';
let currentPlayer = tick_x;// takes a value of either 'X' or 'O' according to the game turns

//initialize the game
const cells = document.querySelectorAll("gameboard")
const addPlayerMove = e => {
    if (spaces[e] == "") {
      spaces[e] = currentPlayer;
      render_board();
    }
  };

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl') = tick_circle;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    const gameboard = () => {
        boxes.forEach((box, i) => {
          let styleString = '';
          if (i < 3) {
            styleString += 'border-bottom: 3px solid var(--text);';
          }
          if (i % 3 === 0) {
            styleString += 'border-right: 3px solid var(--text);';
          }
          if (i % 3 === 2) {
            styleString += 'border-left: 3px solid var(--text);';
          }
          if (i > 5) {
            styleString += 'border-top: 3px solid var(--text);';
          }
          box.style = styleString;
          box.addEventListener('click', boxClicked);
        });
      };
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   return gameboard;
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    const boxClicked = (e) => {
        const id = e.target.id;
        if (!spaces[id]) {
          spaces[id] = currentPlayer;
          e.target.innerText = currentPlayer;
        /*When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {  
        var x = document.getElementById(game-over-label).htmlFor()="Game Over";
      text.innerText = `${currentPlayer} has won!`;
      return ;
    }; //the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    {
        if (spaces[0] === currentPlayer) {
          if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins up to top`;
            return true;
          }
          if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins on the left`;
            return true;
          }
          if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins diagonally`;
            return true;
          }
        }
        if (spaces[8] === currentPlayer) {
          if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins on the right`;
            return true;
          }
          if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins on the bottom`;
            return true;
          }
        }
        if (spaces[4] === currentPlayer) {
          if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins vertically on middle`;
            return true;
          }
          if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins horizontally on the middle`;
            return true;
          }
          if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins diagonally`;
            return true;
          }
        }
      };/*  // This function returns true if all the buttons are disabled and false otherwise 
  */ 
}
    }
