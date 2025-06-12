"use strict";
/* 
              ====/ CONSOLE EDITION TIC-TAC-TOE /====
  When the game restarts/page loads, the game should be initialized.
  There should be 49 elements, 7 in each row (R) and 7 in each column (C).
  Each row element should have a similar and predictable name (e.g: R2C3).

  They should also have different states: 'filled', 'physics', and 'color'.
  'filled' is a boolean stating whether a piece can be placed there. 'physics'
  is a numerical value that can be: 1 (bottom), 2 (top),  3 (sky), and 4(space).
  1s can no longer be interacted with, 2s cannot move but can be placed on top
  of, 3s are not visible as they must be filled first, and 4s cannot be placed
  as they are too high up.

  The game should switch turns between two players: 'Player Orange' and 'Player 
  Blue', which will have color-coded pieces. Stating the piece's name in the
  console (e.g: R2C3) will set off the 'placer' function. It will check the
  pieces' states, and will only place it down if the piece is not filled and
  its physics value is '3'.
  (? perhaps physics should be calculated in placer?)

  Once 'placer()' is finished, it will call 'winnerCheck()'. That function will
  [check for completed rows, diagonals, and columns (? how)]. If a player has
  won, it will call 'gameEnd()'. Otherwise, it will call 'switch()'.

  'switch()' is fairly self-explanatory, 
*/

const gameboard  = function (){
  class init {
    constructor() {
      for (let i = 0; i < 7; i++) {
        console.log(new Object(R[i]));
      }
    }
  }
}





