"use strict";
/* 
              ====/ CONSOLE EDITION TIC-TAC-TOE /====
  1. Create 'initializer()', which will prompt for the names of both players
  and run the next function.

  2. Create 'gameboard (player_X, player_O)'. This function will contain and
  create the 'Player' and 'Square' prototypes (gridMaker(), playerMaker()).
  It will also run 'gameStart()', which will display a welcome message and run
  the next function.

  3. Create 'playGame()'. Within this main function, there will be many smaller
  functions that control the flow of the game, such as: stateOfTheBoard(), 
  switchTurn(), turn(), and winnerCheck(). 

  4. Create 'endGame(winner)'. This function will take in a winner and 
  congratulates them on their victory. It also freezes all inputs except for
  the 'newGame' button.
*/

/* function globalVariables () {

}

function initializer() {
  const playerOne = prompt("Enter Player One's name!");
  const playerTwo = prompt("Enter Player Two's name!");
  gameboard(playerOne, playerTwo);
}

const gameboard = function (playerOne, playerTwo) {
  class Player {
    constructor(name, marker) {
      this.name = name;
      this.marker = marker;
    }
  }

  class Square {
    constructor(squareID) {
      this.filled = false;
      this.marker = null;
      this.fillMe = function () {
        console.log();
      };
      this.squareID = squareID;
      this.sayID = console.log(`SquareID: ${squareID}`);
    }
  }

  const player_X = new Player(playerOne, "X");
  const player_O = new Player(playerTwo, "O");
  console.log(player_X);
  console.log(player_O);

  let board = [];
  function gridMaker() {
    const rows = 3;
    const columns = 3;
    for (let i = 0; i < rows; i++) {
      const holder = [];
      const rowNum = i + 1;
      for (let i = 0; i < columns; i++) {
        const colNum = i + 1;
        let tempSquare = new Square(`R${rowNum}C${colNum}`);
        holder.push(tempSquare);
      }
    }
    console.log(board);
  }
  gridMaker();
};

function fauxGame () {
  console.log("Game Start! ")
} */

//initializer();
// THIS WILL RUN THE GAME (and be annoying if you are trying to code)

/*
 0. storage
 Contains variables and classes to be used in the future.
 - Player, Square classes
 - board array
 - activePlayer boolean

 1. initializer
 Receives player names and runs 'starter()'.
 - prompter()
 - runs starter()

 2. starter
 Creates board and players, and runs 'game()'.
 - playerer()
 - boarder()
 - runs game()

 3. game
 Handles display as well as logic. Loops over itself until winner is found.
  3A. display
  Controls and updates game's visuals. Relies heavily on CSS and the DOM tree.
  3B. logic
  3C. adieu
  Checks if winner has been found or if game has been tied. News delivered to
  endgame().

 4. endgame
 Takes in news, declares a window and disables all miscellanous

 5. reset
 Resets all display styles and runs initializer()
*/

// FACTORY FUNCTION
function storage() {
  class Player {
    constructor(name, marker) {
      this.name = name;
      this.marker = marker;
    }
  }

  class Square {
    constructor(squareID) {
      this.filled = false;
      this.marker = null;
      this.fillMe = function () {
        console.log();
      };
      this.squareID = squareID;
      this.sayID = console.log(`SquareID: ${squareID}`);
    }
  }

  let board = [];
  let players = [];
  let activePlayer = true;
  let rows = 3;
  let columns = 3;

  function playerer(nameOne, nameTwo, markOne, markTwo) {
    players.push(new Player(nameOne, markOne));
    players.push(new Player(nameTwo, markTwo));
    return {players}
  }

  function boarder() {
    for (let i = 0; i < rows; i++) {
      let rowNum = i + 1;
      for (let i = 0; i < columns; i++) {
        let colNum = i + 1;
        const tempSquare = new Square(`R${rowNum}C${colNum}`);
        board.push(tempSquare);
      }
    }
  }
  return { playerer, players, boarder, activePlayer };
}
const storageVar = storage();

function initializer() {
  let ans1;
  let ans2;
  /* const prompter = (function () {
    ans1 = prompt("Enter Player One's name:");
    ans2 = prompt("Enter Player Two's name:");
  })(); */
  starter(ans1, ans2);
}

function starter(strOne, strTwo) {
  storageVar.playerer(strOne, strTwo, "X", "O");
  storageVar.boarder();
  game();
}

function game() {
  function display () {
    
  }
  function logic () {

  }
  function adieu () {
    
  }
}

initializer();
