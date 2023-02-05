/* eslint-disable no-undef */
import Player from "./Player/Player";
import "./styles.css";

(function () {
  let playerTurn = true; 

  const Ship = require("./ship/ship");
  const Gameboard = require("./gameboard/gameBoard");
  //const Player = require("./Player/Player");
  const userSection = document.querySelector("section#userGameboard");
  const computerSection = document.querySelector("section#computerGameboard");
  const userGameboard = new Gameboard();
  const computerGameboard = new Gameboard();

  const positionBtn = document.querySelector("button.positionBtn");
  const battleBtn = document.querySelector("button.battleBtn");
  const shipNameBtn = document.querySelector("button.shipName");

  const userGameboardSection = document.querySelector("section#userGameboard");
  const computerGameboardSection = document.querySelector("section#computerGameboard");

  let ships = {
    Cruise: 5,
    Battleship: 4,
    Submarine: 3,
    Destroyer: 3,
    "Patrol Boat": 2,
  };
  let shipsArray = Object.entries(ships);

  const fightModal = document.getElementById("modal");
  const closingModalBtn = document.querySelector("button.modalBtn");

  const alignementTextInBtn = require("./UI_Modules/alignementTextInBtn");
  alignementTextInBtn();

  const displayGameboards = require("./UI_Modules/displayGameboards");
  displayGameboards(userGameboard.table, userSection, "userGbCell");
  displayGameboards(computerGameboard.table, computerSection, "computerGbCell");

  const userCells = [...document.querySelectorAll("div.userGbCell")];
  const computerCells = [...document.querySelectorAll("div.computerGbCell")]

  const displayShipShadow = require("./UI_Modules/displayShipShadow");
  const removeShipShadow = require("./UI_Modules/removeShipShadow");

  const shipValuesNameLength = require("./UI_Modules/shipValuesNameLength");
  const shipValuesAlignement = require("./UI_Modules/shipValuesAlignement");
  
  const getShipCoordinates = require("./UI_Modules/getShipCoordinates");
  const fromSetToNodeListIndexes = require("./UI_Modules/fromSetIndexesToSectionDivIndexes");
  const getShipFromUICoords = require("./UI_Modules/getShipFromUICoords");


  const footerSection = document.querySelector("footer>section");
  shipNameBtn.addEventListener("click", () => {
      if(shipsArray.length === 0) {
        shipNameBtn.textContent = "Ships prepared!";
        battleBtn.classList.remove("notPrepared");
        battleBtn.classList.add("startBattle");
        shipNameBtn.classList.add("notPrepared");
        positionBtn.classList.add("notPrepared");
        userGameboardSection.classList.remove("prepared");
      }else{
        const first = shipsArray.shift();
        const text = first[0];
        shipNameBtn.textContent = text;
      }
  });

  const displayShip = (e) => {
    const cell = e.target;
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
    if(shipBtnText !== "Ships" && positionBtnText !== "Alignement"){
      const objNameAndLenght = shipValuesNameLength(shipBtnText);
      const objAlignement = shipValuesAlignement(positionBtnText);
      const obj = { ...objNameAndLenght, ...objAlignement };
      const ship = new Ship(obj.length, obj.alignement, obj.name);
      const shipCoordinates = getShipCoordinates(userCells.indexOf(cell));
      userGameboard.placeShip(shipCoordinates.row, shipCoordinates.col, ship);

      //JUST FOR "TESTING" THE USERS ACTION IN THE GAMEBOARD

      //computerGameboard.placeShip(shipCoordinates.row, shipCoordinates.col, ship);
      /**------------------------------------------------------------------- */
      const nodeListIndexesArray = fromSetToNodeListIndexes(ship.coordinates);
      nodeListIndexesArray.forEach(index => userCells[index].classList.add("placedShip"));
    }
  }

  userCells.forEach((cell) => {
    cell.addEventListener("mouseenter", displayShipShadow);
    cell.addEventListener("mouseleave", removeShipShadow);
    cell.addEventListener("click", displayShip)
  });

  const show = () => {
    fightModal.showModal()
    battleBtn.classList.remove("startBattle");
  };
  const close = () => {
    fightModal.close()
    computerGameboardSection.classList.add("prepared");
    footerSection.classList.add("visible");
    shipNameBtn.classList.add("notVisible");
    positionBtn.classList.add("notVisible");
    
  };
  battleBtn.addEventListener("click", show);
  closingModalBtn.addEventListener("click", close);


  const displayWinningMessage = () => {
    const winningDialog = document.querySelector("dialog#winningDialog");
    const winningDialogBtn = document.querySelector("dialog#winningDialog>button"); 
    winningDialog.showModal();
    winningDialogBtn.addEventListener("click", () => {
      computerGameboard.reset();
      userGameboard.reset();
      userCells.forEach(cell => cell.classList.remove("placedShip"));
      computerCells.forEach(cell => cell.classList.remove("missed", "used", "hit"))
      userGameboardSection.classList.add("prepared");
      computerGameboardSection.classList.remove("prepared");

      footerSection.classList.remove("visible");

      shipNameBtn.classList.remove("notVisible");
      shipNameBtn.classList.remove("notPrepared");
      shipNameBtn.textContent = "Ships";
      positionBtn.classList.remove("notVisible");
      positionBtn.classList.remove("notPrepared");
      positionBtn.textContent = "Alignement";
      battleBtn.classList.add("notPrepared");

      ships = {
        Cruise: 5,
        Battleship: 4,
        Submarine: 3,
        Destroyer: 3,
        "Patrol Boat": 2,
      };
      shipsArray = Object.entries(ships);
      winningDialog.close();
    })
  }

  const handleUserClick = (e) => {
    const cell = e.target;
    const coordinates = getShipCoordinates(computerCells.indexOf(cell));
    const {row, col} = coordinates;
    const attackResp = computerGameboard.receiveAttack(row, col);
    const ship = getShipFromUICoords(row - 1, col - 1, computerGameboard);
    //DISPLAY HITS AND MISSED HITS
    //FOR ONE AND/OR ALL SHIPS
    if(attackResp === "X"){
      //hits
      cell.classList.add("hit");
      footerSection.textContent = `${ship.name} hitted!`;
      if(ship.sunk){
        footerSection.textContent = `${ship.name} has been sunk!`;
      }
      if(computerGameboard.ships.every(ship => ship.sunk === true)){
        footerSection.textContent = `${ship.name} and all ships have been sunk!`;
        displayWinningMessage();
      }
    }
    //MISSED    
    if(attackResp === "*"){
      footerSection.textContent = "Missed";
      cell.classList.add("missed");
    }
    //EVERY CELL THAT HAS BEEN HITTED OR MISSED SHOULD NOT BE USED AGAIN
    cell.classList.add("used");
  }


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

      console.log(computerGameboard.table);
      console.log(computerGameboard.ships);
    }

    placeComputerShipsRandomly();

})();
