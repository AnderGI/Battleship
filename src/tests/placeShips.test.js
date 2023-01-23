/* eslint-disable no-undef */
const Gameboard = require("../gameboard/gameBoard");
const Ship = require("../ship/ship");

test("Posible coordinates", () => {
  const game = new Gameboard();
  const ship = new Ship(5, false, "Ship 1");

  const correctCoordinates = game.placeShip(4, 5, ship);
  expect(correctCoordinates).not.toBe(false);

  const incorrectCoordinates = game.placeShip(11, 5, ship);
  expect(incorrectCoordinates).toBe(false);
});

test("Not enough available space", () => {
  const game = new Gameboard();
  const ship = new Ship(5, true, "Ship 1");
  //vertically positioned on the 10th row and 5th column
  const availableSpace = game.placeShip(10, 5, ship);

  expect(availableSpace).toBe(false);
});

test("Available space", () => {
  const game = new Gameboard();
  const ship = new Ship(5, true, "Ship 1");
  //vertically positioned on the 10th row and 5th column
  const availableSpace = game.placeShip(5, 5, ship);

  expect(availableSpace).not.toBe(false);
});

test("Correct ship positions or coordinates inside gameboard table", () => {
  const game = new Gameboard();
  const ship = new Ship(5, true, "Ship 1");
  game.placeShip(5, 5, ship);
  expect(game.table[4][4]).toBe("S");
  expect(game.table[5][4]).toBe("S");
  expect(game.table[6][4]).toBe("S");
  expect(game.table[7][4]).toBe("S");
  expect(game.table[8][4]).toBe("S");
});

test("Correct ship positions or coordinates inside gameboard coordinates", () => {
  const game = new Gameboard();
  const ship1 = new Ship(5, false, "Ship 1");

  game.placeShip(4, 2, ship1);

  const ship2 = new Ship(5, true, "Ship 2");

  game.placeShip(2, 8, ship2);

  const ship3 = new Ship(3, true, "Ship 3");

  game.placeShip(3, 2, ship3);

  expect(game.shipCoord.has("3, 4")).toBe(true);
  expect(game.shipCoord.has("5, 7")).toBe(true);
});

test("Add coordinates to the respective ships set", () => {
  const game = new Gameboard();
  const ship1 = new Ship(4, true, "Ship 1");

  game.placeShip(3, 2, ship1);
  expect(ship1.coordinates.has("2, 1")).toBe(true);
  expect(ship1.coordinates.has("3, 1")).toBe(true);
  expect(ship1.coordinates.has("4, 1")).toBe(true);
  expect(ship1.coordinates.has("5, 1")).toBe(true);
});

test("Do not add coord to ships set when it tries to occupy an already occupied space", () => {
  const game = new Gameboard();
  const ship1 = new Ship(4, true, "Ship 1");
  game.placeShip(3, 2, ship1);

  const ship2 = new Ship(3, false, "Ship 2");
  game.placeShip(4, 1, ship2);
  expect(ship2.coordinates.has("3, 0")).toBe(false);
});

test("ship coord and game ship", () => {
  const game = new Gameboard();
  const ship1 = new Ship(5, false, "Ship 1");
  game.placeShip(4, 2, ship1);
  const ship2 = new Ship(5, true, "Ship 2");
  game.placeShip(2, 8, ship2);
  const ship3 = new Ship(3, true, "Ship 3");
  game.placeShip(3, 4, ship3);
  expect(game.shipCoord.has("2, 3")).toBe(false);
});
