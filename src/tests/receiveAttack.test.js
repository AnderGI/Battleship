/* eslint-disable no-undef */
const Gameboard = require("../gameboard/gameBoard");
const Ship = require("../ship/ship");

const game = new Gameboard();
const ship1 = new Ship(5, false, "Ship 1");
game.placeShip(4, 2, ship1);

const ship2 = new Ship(5, true, "Ship 2");
game.placeShip(2, 8, ship2);

test('Incorrect coordinates', () => {
    expect(game.receiveAttack(11,2)).toBe(false);
    expect(game.receiveAttack(9,11)).toBe(false);
    expect(game.receiveAttack(11,12)).toBe(false);
    expect(game.receiveAttack(1,22)).toBe(false);
})


test('Correct coordinates but no hit', () => {
    expect(game.receiveAttack(10,2)).toBe("*"); //indexOf(coord) === -1
    expect(game.receiveAttack(5,3)).toBe("*");
    expect(game.receiveAttack(3,4)).toBe("*");
})

test('Correct coordinates and hit', () => {
    //ship 1
    game.receiveAttack(4, 3);
    expect(ship1.timesHitted).toBe(1);
})

test('New gameboard layout with ships, hits and missed shots', () => {
    const game2 = new Gameboard();

    const carrier = new Ship(5, "Horizontal", "Carrier");
    game2.placeShip(4,2,carrier);

    const battleship = new Ship(4, "Vertical", "Battleship");
    game2.placeShip(2,8,battleship);

    const destroyer = new Ship(3, "Horizonatal", "Destroyer");
    game2.placeShip(7,5,destroyer);

    const submarine = new Ship(3, "Vertical", "Submarine");
    game2.placeShip(5,10,submarine);

    const patrolBoat = new Ship(2, "Horizontal", "Patrol Boat");
    game2.placeShip(1,3,patrolBoat);

    //the begining and end of each ship
    //carrier
    expect(game2.table[3][1]).toBe("C");
    expect(game2.table[3][5]).toBe("C");
    //battleship
    expect(game2.table[1][7]).toBe("B");
    expect(game2.table[4][7]).toBe("B");
    //submarine
    expect(game2.table[4][9]).toBe("S");
    expect(game2.table[6][9]).toBe("S");
    //destroyer
    expect(game2.table[6][4]).toBe("D");
    expect(game2.table[6][6]).toBe("D");
    //patrol boat
    expect(game2.table[0][2]).toBe("P");
    expect(game2.table[0][3]).toBe("P");

    //boat that tries to fill occupied space
    const badShip = new Ship(5, "Horizontal", "Not good Ship");
    game2.placeShip(3, 5, badShip);

    expect(game2.table[2][4]).not.toBe("N");
    expect(game2.table[2][5]).not.toBe("N");
    expect(game2.table[2][6]).not.toBe("N");
    expect(game2.table[2][8]).not.toBe("N");

    //attacks to different ships
    //battleship
    game2.receiveAttack(2, 8);
    expect(battleship.timesHitted).toBe(1);
    //carrier
    game2.receiveAttack(4, 6);
    game2.receiveAttack(4, 4);
    expect(carrier.timesHitted).toBe(2);
    //destroyer
    game2.receiveAttack(7, 7);
    game2.receiveAttack(7, 5);
    expect(destroyer.timesHitted).toBe(2);
    //submarine
    game2.receiveAttack(6, 10);
    expect(submarine.timesHitted).toBe(1);

    //SUNK destroyer
    const sunk = game2.receiveAttack(7,6);
    expect(destroyer.timesHitted).toBe(3);
    expect(destroyer.sunk).toBe(true);
    expect(sunk).toBe("Sunk");


    //missed shot
    game2.receiveAttack(5,7);
    expect(game2.table[4][6]).toBe("*");
})
