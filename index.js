const prompt = require('prompt');

const Game = function() {
  this.board = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  this.currentPlayer = 'p1';
  this.display();
}

Game.prototype.display = function() {
  this.board.forEach(row => console.log(row));
}

Game.prototype.move = function(space) {
  prompt.start();
  prompt.get(['move'], (err, result) => {
    var space = Number(result.move);
    var count = 1;
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        if (count === space) {
          count++;
          if (this.board[i][j] === space) {
            if (this.currentPlayer === 'p1') {
              this.board[i][j] = 'X';
              this.currentPlayer = 'p2';
              this.display();
              this.move();
            } else {
              this.board[i][j] = 'O';
              this.currentPlayer = 'p1';
              this.display();
              this.move();
            }
          } else {
            console.log('Invalid Move, Try Again');
            this.move();
          }
        } else {
          count++;
        }
      }
    }
  });
}

module.exports = Game;