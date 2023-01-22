/* eslint-disable no-undef */
const Player = require("../Player/Player");

test("Test player turns", () => {
  //Player
  expect(Player.playerTurn).toBe(true);
  //Computer
  Player.makeMove();
  expect(Player.playerTurn).toBe(false);
  //Player
  Player.makeMove();
  expect(Player.playerTurn).toBe(true);
});

//just a visualizer
test("Test player turns", () => {
  //expect(value).toBeGreaterThanOrEqual(0);
  //expect(value).toBeLessThanOrEqual(9)
  //Computer
  Player.makeMove();
  //Player
  Player.makeMove();
  //Computer
  Player.makeMove();
  //Player
  Player.makeMove();
  //Computer
  Player.makeMove();
  // expect(1).toBe(Player.computerMoves);
});
