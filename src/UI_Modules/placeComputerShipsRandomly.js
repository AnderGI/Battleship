// eslint-disable-next-line no-undef
const Ship = require("../ship/ship");
const Player = require("../Player/Player");
const placeComputerShipsRandomly = () => {
    //coordenadas validas random
    //mientras placeships devuelva false seguir con coordenadas random
    //ships vnames and alignement
    let moves;
    const shipNames = ["Cruise", "Battleship", "Destroyer", "Submarine", "Patrol Boat"];
    const shipsAlignement = ["Vertical", "Horizontal"];
    let nameIndex = 0;
    let nameLengthObj;
    let alignementIndex;
    let alignementObj;
    let currentGameboardShipsLenght = computerGameboard.ships.length; //0
    while(computerGameboard.ships.length !== 5){
      moves = Player.randomValidMove();
      nameLengthObj = shipValuesNameLength(shipNames[nameIndex]);
      alignementIndex = Math.floor(Math.random() * 2);
      alignementObj = shipValuesAlignement(shipsAlignement[alignementIndex]);
      const obj = {...nameLengthObj, ...alignementObj};
      const ship = new Ship(obj.length, obj.alignement, obj.name);
      computerGameboard.placeShip(moves[0] + 1, moves[1] + 1, ship);    
      if(currentGameboardShipsLenght < computerGameboard.ships.length){
        nameIndex++;
        currentGameboardShipsLenght++;
      }  
  }
  }
