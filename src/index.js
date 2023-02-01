/* eslint-disable no-undef */
import "./styles.css";

(function () {
  const Ship = require("./ship/ship");
  const Gameboard = require("./gameboard/gameBoard");
  const Player = require("./Player/Player");
  const userSection = document.querySelector("section#userGameboard");
  const computerSection = document.querySelector("section#computerGameboard");
  const userGameboard = new Gameboard();
  const computerGameboard = new Gameboard();

  const positionBtn = document.querySelector("button.positionBtn");
  const battleBtn = document.querySelector("button.battleBtn");
  const shipNameBtn = document.querySelector("button.shipName");

  const userGameboardSection = document.querySelector("section#userGameboard");
  const computerGameboardSection = document.querySelector("section#computerGameboard");

  const ships = {
    Cruise: 5,
    Battleship: 4,
    Submarine: 3,
    Destroyer: 3,
    "Patrol Boat": 2,
  };
  const shipsArray = Object.entries(ships);

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

      computerGameboard.placeShip(shipCoordinates.row, shipCoordinates.col, ship);
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
  };
  battleBtn.addEventListener("click", show);
  closingModalBtn.addEventListener("click", close);

  const attack = (e) => {
    const cell = e.target;
    const coordinates = getShipCoordinates(computerCells.indexOf(cell));
    const {row, col} = coordinates;
    const attackResp = computerGameboard.receiveAttack(row, col);
    if(attackResp === "X"){
      cell.classList.add("hit");
    }
    if(attackResp !== "X" && attackResp !== false && attackResp !== "*"){
      cell.classList.add("hit");
      console.log("sunk");
      console.log(attackResp);
    }
  }



  computerCells.forEach( cell => cell.addEventListener("click", attack))

})();
