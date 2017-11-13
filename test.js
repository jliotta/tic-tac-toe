const expect = require('chai').expect;
const Game = require('./index.js');

var t = new Game();

describe('board setup', () => {
  it('should display a three by three board', () => {
    expect(t.board).to.eql([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
  it('should log a player\'s move', () => {
    t.move();
  })
});