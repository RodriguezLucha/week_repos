const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Chess {
  run() {
    // until a player is in checkmate
    // get move from current player
    // make move on board
    // switch current player
  }
}
class Game {
  constructor(){
    this.towers = [[1, 2, 3], [], []];
  }

  
  



}

Game.prototype.promptMove = function (callback) {
  console.log(this.towers);
  reader.question('Where you want to move a disc from/to? ', (answer) => {
    "2 1"
    input = answer.split(" ");
    startTowerIdx = parseInt(input[0]); 
    endTowerIdx = parseInt(input[1]);
    callback(startTowerIdx, endTowerIdx);
  });
};


let game = new Game();
game.promptMove(function(from, to) {
  console.log(from, to);
});

