"use strict";
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
  3A. stateOfTheBoard
  Controls and updates game's visuals. Does so by looping over itself
  and checks whether or not a Square has been filled.
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
      this.fillMe = function (marker) {
        this.filled = true;
        this.marker = marker;
        console.log(`${squareID} filled!`);
      };
      this.squareID = squareID;
      this.sayID = () => console.log(`SquareID: ${squareID}`);
    }
  }

  let board = [];
  let players = [];
  let rows = 3;
  let columns = 3;
  let playGame = true;

  function playerer(nameOne, nameTwo, markOne, markTwo) {
    players.push(new Player(nameOne, markOne));
    players.push(new Player(nameTwo, markTwo));
    return { players };
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
  return { playerer, players, boarder, board, playGame };
}
const storageVar = storage();

function initializer() {
  if (storageVar.playGame) {
    let ans1;
    let ans2;
    const prompter = (function () {
      ans1 = prompt("Enter Player One's name:");
      ans2 = prompt("Enter Player Two's name:");
    })();
    starter(ans1, ans2);
  }
}

function starter(strOne, strTwo) {
  storageVar.playerer(strOne, strTwo, "X", "O");
  storageVar.boarder();
  let plr1 = storageVar.players[0];
  let plr2 = storageVar.players[1];
  plr1.name = strOne;
  plr2.name = strTwo;
  game(plr1, plr2);
}

function game(player_X, player_O) {
  console.log(`Game Start! ${player_X.name} vs. ${player_O.name}!!`);
  let activePlayer = player_X;
  let bool = true;
  let sqFilled = 0;

  function switcher() {
    if (bool) {
      activePlayer = player_O;
      bool = false;
    } else if (!bool) {
      activePlayer = player_X;
      bool = true;
    }
  }

  function display() {
    function stateOfTheBoard() {
      console.log("Current Board:");
      let co = 0;
      if (sqFilled === 9)
      for (let i = 0; i < 3; i++) {
        let msg = `> ${i}    `;
        for (let i = 0; i < 3; i++) {
          if (storageVar.board[co].filled || storageVar.board[co].marker) {
            msg = msg + `[${storageVar.board[co].marker}]`;
            sqFilled++;
          } else {
            msg = msg + "[ ]";
          }
          co++;
        }
        console.log(msg);
      }
    }
    stateOfTheBoard();
    if (storageVar.playGame) logic();
    return { stateOfTheBoard };
  }
  function logic() {
    const ansVar = prompt(
      `${activePlayer.name}'s turn! Place your piece down!`
    );
    let resolved = false;
    if (ansVar) {
      for (const sq of storageVar.board) {
        if (ansVar === sq.squareID && !sq.filled) {
          sq.marker = activePlayer.marker;
          sq.filled = true;
          console.log(`${activePlayer.name} has claimed ${sq.squareID}!`);
          resolved = true;
          break;
        } else if (ansVar === sq.squareID) {
          console.log("That square is already claimed! Try again!");
          switcher();
          resolved = true;
        }
      }
      if (!resolved) {
        console.log(`Invalid ID! Please log the square you would like to
          use as the row (R#) and number (C#)!
          Example: R2C2 (middle square)`);
        switcher();
      }
      const extraLife = adieu();
      if (!extraLife) {
        switcher();
        display();
      } else if (extraLife) {
        storageVar.playGame = false;
        display();
        endgame(activePlayer.name, false);
      }
    }
  }

  function adieu() {
    const board = storageVar.board;
    const scen1 =
      board[0].filled &&
      board[0].marker === board[1].marker &&
      board[1].marker === board[2].marker;
    const scen2 =
      board[3].filled &&
      board[3].marker === board[4].marker &&
      board[4].marker === board[5].marker;
    const scen3 =
      board[6].filled &&
      board[6].marker === board[7].marker &&
      board[7].marker === board[8].marker;
    const scen4 =
      board[0].filled &&
      board[0].marker === board[3].marker &&
      board[3].marker === board[6].marker;
    const scen5 =
      board[1].filled &&
      board[1].marker === board[4].marker &&
      board[4].marker === board[7].marker;
    const scen6 =
      board[2].filled &&
      board[2].marker === board[5].marker &&
      board[5].marker === board[8].marker;
    const scen7 =
      board[0].filled &&
      board[0].marker === board[4].marker &&
      board[4].marker === board[8].marker;
    const scen8 =
      board[2].filled &&
      board[2].marker === board[4].marker &&
      board[4].marker === board[6].marker;
    if (scen1 || scen2 || scen3 || scen4 || scen5 || scen6 || scen7 || scen8) {
      return true;
    } else {
      return false;
    }
  }
  display();
}

function endgame(winner, tieStatus) {
  console.log(`${winner} has won the game! Congrats!`);
  console.log("Reload to play again!");
}

function reset() {
  // DOES NOT WORK CURRENTLY!!
}

initializer();
