"use strict";

function storage() {
  // STORAGE : Contains miscellaneous functions/classes/variables that would
  // formerly go in the global scope.

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
  boarder();

  return {
    playerer,
    players,
    boarder,
    board,
    playGame,
  };
}

const storageVar = storage();

//

function DOMstorage() {
  // DOMstorage: Stores all DOM queries/DOM related functions into one
  // convenient package.

  const starterModal = document.querySelector(".starterModal");
  const overlay = document.querySelector(".overlay");
  const oneTXT = document.querySelector(".oneTXT");
  const twoTXT = document.querySelector(".twoTXT");
  const orName = document.querySelector(".orangeName");
  const grName = document.querySelector(".greenName");
  const core = document.querySelector(".core");

  const R1C1 = document.querySelector(".sq1");
  const R1C2 = document.querySelector(".sq2");
  const R1C3 = document.querySelector(".sq3");
  const R2C1 = document.querySelector(".sq4");
  const R2C2 = document.querySelector(".sq5");
  const R2C3 = document.querySelector(".sq6");
  const R3C1 = document.querySelector(".sq7");
  const R3C2 = document.querySelector(".sq8");
  const R3C3 = document.querySelector(".sq9");

  function hideModal() {
    starterModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function showModal() {
    starterModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  return {
    hideModal,
    showModal,
    oneTXT,
    twoTXT,
    orName,
    grName,
    R1C1,
    R1C2,
    R1C3,
    R2C1,
    R2C2,
    R2C3,
    R3C1,
    R3C2,
    R3C3,
    core,
  };
}
const DOMvar = DOMstorage();

///// /=====================/* STORAGE END!! */=====================/
//

function tictactoe() {
  // TICTACTOE: Super-function that contains all game functions.

  let switchBool = true;
  const player_X = storageVar.players[0];
  const player_O = storageVar.players[1];
  let activePlayer = player_X;
  const core = DOMvar.core;

  const DOMsquareArr = [
    DOMvar.R1C1,
    DOMvar.R1C2,
    DOMvar.R1C3,
    DOMvar.R2C1,
    DOMvar.R2C2,
    DOMvar.R2C3,
    DOMvar.R3C1,
    DOMvar.R3C2,
    DOMvar.R3C3,
  ];

  const sqValues = [
    `R1C1`,
    `R1C2`,
    `R1C3`,
    `R2C1`,
    `R2C2`,
    `R2C3`,
    `R3C1`,
    `R3C2`,
    `R3C3`,
  ];

  function initializer() {
    // INITIALIZER: Runs when "Play Game!" is clicked. Hides the prompt
    // modal and creates players
    // Replaces: old initializer(), starter()

    const ans1 = DOMvar.oneTXT.value;
    const ans2 = DOMvar.twoTXT.value;
    DOMvar.hideModal();
    storageVar.playerer(ans1, ans2, "X", "O");
    DOMvar.orName.textContent = ans1;
    DOMvar.grName.textContent = ans2;
  }

  function round(sqNum) {
    // ROUND: Runs when a square is clicked. Updates the display, checks for
    // a win, and switches the turns between players.
    // Calls: display(), adieu(), switcher()
    // Replaces: game()

    for (let i = 0; i < sqValues.length; i++) {
      if (sqNum === sqValues[i] && sqValues[i]) {
        const selectedSq = DOMsquareArr[i];
        const childTXT = selectedSq.children;
        if (switchBool) {
          selectedSq.style.backgroundColor = "rgb(253, 194, 83)";
          childTXT[0].textContent = "X";
          childTXT[0].style.color = "rgb(245, 172, 37)";
        } else if (!switchBool) {
          selectedSq.style.backgroundColor = "rgb(134, 255, 104)";
          childTXT[0].textContent = "O";
          childTXT[0].style.color = "rgb(83, 247, 42)";
        }
      }
    }
    adieu();
    switcher();
  }

  function switcher() {
    // SWITCH: Switches the active player.
    const orange = document.querySelector(".orangeSide");
    const green = document.querySelector(".greenSide");

    if (switchBool) {
      switchBool = false;
      activePlayer = player_O;
      green.classList.remove("mediocre");
      orange.classList.add("mediocre");
      core.style.border = "2rem solid rgb(134, 255, 104)";
    } else if (!switchBool) {
      switchBool = true;
      activePlayer = player_X;
      green.classList.add("mediocre");
      orange.classList.remove("mediocre");
      core.style.border = "2rem solid rgb(253, 194, 83)";
    }
  }

  function adieu () {

  }

  return { initializer, round };
}

const bouncer = tictactoe();

//
///// /=====================/* COMMENTS START!! */=====================/
/*

function ansVar(val) {
  return (ansVar = val);
}

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
  storageVar.boarder();
  playerer(strOne, strTwo, "X", "O");

  let player_X = players[0];
  let player_O = players[1];
  let activePlayer = player_X;
  let bool = true;

  function switcher() {
    if (bool) {
      activePlayer = player_O;
      bool = false;
    } else if (!bool) {
      activePlayer = player_X;
      bool = true;
    }
  }

  return {
    playerer,
    players,
    boarder,
    board,
    playGame,
    player_X,
    player_O,
    switcher,
    bool,
    activePlayer,
  };
}
const storageVar = storage();

function DOMstorage() {
  const starterModal = document.querySelector(".starterModal");
  const overlay = document.querySelector(".overlay");
  const oneTXT = document.querySelector(".oneTXT");
  const twoTXT = document.querySelector(".twoTXT");
  const orName = document.querySelector(".orangeName");
  const grName = document.querySelector(".greenName");

  const R1C1 = document.querySelector('.sq1');
  const R1C2 = document.querySelector('.sq1');
  const R1C3 = document.querySelector('.sq1');
  const R2C1 = document.querySelector('.sq1');
  const R2C2 = document.querySelector('.sq1');
  const R2C3 = document.querySelector('.sq1');
  const R3C1 = document.querySelector('.sq1');
  const R3C2 = document.querySelector('.sq1');
  const R3C3 = document.querySelector('.sq1');

  function hideModal() {
    starterModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  function showModal() {
    starterModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  return {
    hideModal,
    showModal,
    oneTXT,
    twoTXT,
    orName,
    grName,
    R1C1,
    R1C2,
    R1C3,
    R2C1,
    R2C2,
    R2C3,
    R3C1,
    R3C2,
    R3C3,
  };
}
const DOMvar = DOMstorage();

function initializer() {
  if (storageVar.playGame) {
    const ans1 = DOMvar.oneTXT.value;
    const ans2 = DOMvar.twoTXT.value;
    DOMvar.hideModal();
    starter(ans1, ans2);
  }
}

function starter(strOne, strTwo) {
  //let plr1 = storageVar.players[0];
  let plr2 = storageVar.players[1];
  plr1.name = strOne;
  plr2.name = strTwo; //
  DOMvar.orName.textContent = strOne;
  DOMvar.grName.textContent = strTwo;
  //game(plr1, plr2);
}

function round(sqString) {
  let j = 0;
  for (const sq of storageVar.board) {
    if (sqString == sq.squareID && !sq.filled) {
      sq.filled = true;
      sq.marker = storageVar.activePlayer.marker;

      const domCaller = function () {
        `DOMvar.${sqString}.color`
      };
      domCaller();
      break;
    }
    j++;
  }
}

function endgame(winner, tieStatus) {
  console.log(`${winner} has won the game! Congrats!`);
  console.log("Reload to play again!");
}

function reset() {
  // DOES NOT WORK CURRENTLY!!
}

//

//

//

/*
function game(player_X, player_O) {
  let activePlayer = player_X;
  let bool = true;
  let sqFilled = 0;
  let selectedSq;

  function switcher() {
    if (bool) {
      activePlayer = player_O;
      bool = false;
    } else if (!bool) {
      activePlayer = player_X;
      bool = true;
    }
  }

  // Updates the display to reflect the logic state of the board
  function display() {
    function checker() {
      if (selectedSq === `R1C1`) {
        if (bool) DOMvar.R1C1.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R1C1.backgroundColor = rgb(253, 194, 83);
        DOMvar.R1C1.textContent = activePlayer.marker;
      } else if (selectedSq === `R1C2`) {
        if (bool) DOMvar.R1C2.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R1C2.backgroundColor = rgb(253, 194, 83);
        DOMvar.R1C2.textContent = activePlayer.marker;
      } else if (selectedSq === `R1C3`) {
        if (bool) DOMvar.R1C3.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R1C3.backgroundColor = rgb(253, 194, 83);
        DOMvar.R1C3.textContent = activePlayer.marker;
      } else if (selectedSq === `R2C1`) {
        if (bool) DOMvar.R2C1.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R2C1.backgroundColor = rgb(253, 194, 83);
        DOMvar.R2C1.textContent = activePlayer.marker;
      } else if (selectedSq === `R2C2`) {
        if (bool) DOMvar.R2C2.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R2C2.backgroundColor = rgb(253, 194, 83);
        DOMvar.R2C2.textContent = activePlayer.marker;
      } else if (selectedSq === `R2C3`) {
        if (bool) DOMvar.R2C3.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R2C3.backgroundColor = rgb(253, 194, 83);
        DOMvar.R2C3.textContent = activePlayer.marker;
      } else if (selectedSq === `R3C1`) {
        if (bool) DOMvar.R3C1.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R3C1.backgroundColor = rgb(253, 194, 83);
        DOMvar.R3C1.textContent = activePlayer.marker;
      } else if (selectedSq === `R3C2`) {
        if (bool) DOMvar.R3C2.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R3C2.backgroundColor = rgb(253, 194, 83);
        DOMvar.R3C2.textContent = activePlayer.marker;
      } else if (selectedSq === `R3C3`) {
        if (bool) DOMvar.R3C3.backgroundColor = rgb(134, 255, 104);
        if (!bool) DOMvar.R3C3.backgroundColor = rgb(253, 194, 83);
        DOMvar.R3C3.textContent = activePlayer.marker;
      }
      checker()
    }
    return {};
  }

  function logic(boardNum) {
    let resolved = false;
    if (typeof boardNum === `string`) {
      for (const sq of storageVar.board) {
        if (boardNum === sq.squareID && !sq.filled) {
          sq.marker = activePlayer.marker;
          sq.filled = true;
          console.log(`${activePlayer.name} has claimed ${sq.squareID}!`);
          selectedSq = boardNum;
          resolved = true;
          break;
        } else if (boardNum === sq.squareID) {
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

  // Checks for all win scenarios
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
}
*/
