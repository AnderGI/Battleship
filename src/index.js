/* eslint-disable no-undef */
import "./styles.css";

(function () {
  const Ship = require("./ship/ship");
  const Gameboard = require("./gameboard/gameBoard");
  let playerWins = true;
  const Player = require("./Player/Player");
  const userSection = document.querySelector("section#userGameboard");
  const computerSection = document.querySelector("section#computerGameboard");
  const userGameboard = new Gameboard();
  const computerGameboard = new Gameboard();

  const positionBtn = document.querySelector("button.positionBtn");
  const battleBtn = document.querySelector("button.battleBtn");
  const shipNameBtn = document.querySelector("button.shipName");
  const getCellIndexFromArray = require("./UI_Modules/getCellIndexFromArray");
  const userGameboardSection = document.querySelector("section#userGameboard");
  const computerGameboardSection = document.querySelector(
    "section#computerGameboard"
  );

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
  const computerCells = [...document.querySelectorAll("div.computerGbCell")];

  const displayShipShadow = require("./UI_Modules/displayShipShadow");
  const removeShipShadow = require("./UI_Modules/removeShipShadow");

  const shipValuesNameLength = require("./UI_Modules/shipValuesNameLength");
  const shipValuesAlignement = require("./UI_Modules/shipValuesAlignement");

  const getShipCoordinates = require("./UI_Modules/getShipCoordinates");
  const fromSetToNodeListIndexes = require("./UI_Modules/fromSetIndexesToSectionDivIndexes");
  const getShipFromUICoords = require("./UI_Modules/getShipFromUICoords");

  const footerSection = document.querySelector("footer>section");

  shipNameBtn.addEventListener("click", () => {
    if (shipsArray.length === 0) {
      shipNameBtn.textContent = "Ships prepared!";
      battleBtn.classList.remove("notPrepared");
      battleBtn.classList.add("startBattle");
      shipNameBtn.classList.add("notPrepared");
      positionBtn.classList.add("notPrepared");
      userGameboardSection.classList.remove("prepared");
      userGameboardSection.classList.add("notPrepared");
    } else {
      const first = shipsArray.shift();
      const text = first[0];
      shipNameBtn.textContent = text;
    }
  });

  const displayShip = (e) => {
    const cell = e.target;
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
    if (shipBtnText !== "Ships" && positionBtnText !== "Alignement") {
      const objNameAndLenght = shipValuesNameLength(shipBtnText);
      const objAlignement = shipValuesAlignement(positionBtnText);
      const obj = { ...objNameAndLenght, ...objAlignement };
      const ship = new Ship(obj.length, obj.alignement, obj.name);
      const shipCoordinates = getShipCoordinates(userCells.indexOf(cell));
      userGameboard.placeShip(shipCoordinates.row, shipCoordinates.col, ship);
      const nodeListIndexesArray = fromSetToNodeListIndexes(ship.coordinates);
      nodeListIndexesArray.forEach((index) =>
        userCells[index].classList.add("placedShip")
      );
    }
  };

  const placeComputerShipsRandomly = () => {
    //coordenadas validas random
    //mientras placeships devuelva false seguir con coordenadas random
    //ships vnames and alignement
    let moves;
    const shipNames = [
      "Cruise",
      "Battleship",
      "Destroyer",
      "Submarine",
      "Patrol Boat",
    ];
    const shipsAlignement = ["Vertical", "Horizontal"];
    let nameIndex = 0;
    let nameLengthObj;
    let alignementIndex;
    let alignementObj;
    let currentGameboardShipsLenght = computerGameboard.ships.length; //0
    while (computerGameboard.ships.length !== 5) {
      moves = Player.randomValidMove();
      nameLengthObj = shipValuesNameLength(shipNames[nameIndex]);
      alignementIndex = Math.floor(Math.random() * 2);
      alignementObj = shipValuesAlignement(shipsAlignement[alignementIndex]);
      const obj = { ...nameLengthObj, ...alignementObj };
      const ship = new Ship(obj.length, obj.alignement, obj.name);
      computerGameboard.placeShip(moves[0] + 1, moves[1] + 1, ship);
      if (currentGameboardShipsLenght < computerGameboard.ships.length) {
        nameIndex++;
        currentGameboardShipsLenght++;
      }
    }
  };

  placeComputerShipsRandomly();

  userCells.forEach((cell) => {
    cell.addEventListener("mouseenter", displayShipShadow);
    cell.addEventListener("mouseleave", removeShipShadow);
    cell.addEventListener("click", displayShip);
  });

  const show = () => {
    fightModal.showModal();
    battleBtn.classList.remove("startBattle");
  };
  const close = () => {
    fightModal.close();
    computerGameboardSection.classList.remove("notPrepared");
    computerGameboardSection.classList.add("prepared");
    footerSection.classList.add("visible");
    shipNameBtn.classList.add("notVisible");
    positionBtn.classList.add("notVisible");
  };
  battleBtn.addEventListener("click", show);
  closingModalBtn.addEventListener("click", close);

  const displayWinningMessage = () => {
    const winningDialog = document.querySelector("dialog#winningDialog");
    const winningDialogBtn = document.querySelector(
      "dialog#winningDialog>button"
    );
    winningDialog.showModal();
    winningDialogBtn.textContent = playerWins ? "You win!" : "Computer wins!";
    winningDialogBtn.addEventListener("click", () => {
      computerGameboard.reset();
      userGameboard.reset();
      userCells.forEach((cell) => cell.classList.remove("placedShip"));
      computerCells.forEach((cell) =>
        cell.classList.remove("missed", "used", "hit")
      );
      userCells.forEach((cell) =>
        cell.classList.remove("missed", "used", "hit")
      );
      
      userGameboardSection.classList.remove("notPrepared");
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

      placeComputerShipsRandomly();
      winningDialog.close();
    });
  };

  /**PROBLE COMES WITH TIMMING OF COMOPUTER MOVES AND THE COMPUTER SHOULD ALSO HAVE THE LOGIC OF
   * MAKING THE NEXT BEST MOVE
   */
  const computerMoves = () => {
    let shipHitted = true;
    let moves;
    let cell;
    while (shipHitted) {
      moves = Player.randomValidMove();
      const [row, col] = moves;
      /**POSSIBLE SHIP INFO */
      //const attackResp = userGameboard.receiveAttack(row, col);
      //const ship = getShipFromUICoords(row + 1, col + 1, userGameboard);
      const cellIndex = getCellIndexFromArray(row, col);
      cell = userCells[cellIndex];
      if (cell.classList.contains("placedShip")) {
        cell.classList.add("hit");
        userGameboard.receiveAttack(row + 1, col + 1);
       // footerSection.textContent = `Computer hitted!`;
        if (userGameboard.ships.every((ship) => ship.sunk === true)) {
          footerSection.textContent = `A computer has sunk all your ships idiot! Shame on you!`;
          playerWins = false;
          displayWinningMessage();
        }
      } else {
        cell.classList.add("missed");
        shipHitted = false;
        //footerSection.textContent = `Computer missed!`;
      }
    }

    //it is not available anymore
    cell.classList.add("used");
  };

  const handleUserClick = (e) => {
    const cell = e.target;
    const coordinates = getShipCoordinates(computerCells.indexOf(cell));
    const { row, col } = coordinates;
    const attackResp = computerGameboard.receiveAttack(row, col);
    const ship = getShipFromUICoords(row - 1, col - 1, computerGameboard);
    //DISPLAY HITS AND MISSED HITS
    //FOR ONE AND/OR ALL SHIPS
    if (attackResp === "X") {
      //hits
      cell.classList.add("hit");
      footerSection.textContent = `${ship.name} hitted!`;
      if (ship.sunk) {
        footerSection.textContent = `${ship.name} has been sunk!`;
      }
      if (computerGameboard.ships.every((ship) => ship.sunk === true)) {
        footerSection.textContent = `${ship.name} and all ships have been sunk!`;
        displayWinningMessage();
      }
    }
    //MISSED
    if (attackResp === "*") {
      footerSection.textContent = "Missed";
      cell.classList.add("missed");
      //WHNE MISSSED COMPUTER MAKES MOVE
      computerMoves();
    }
    //EVERY CELL THAT HAS BEEN HITTED OR MISSED SHOULD NOT BE USED AGAIN
    cell.classList.add("used");
  };

  computerCells.forEach((cell) => {
    cell.addEventListener("click", handleUserClick);
  });
  console.log(computerGameboard.table);
})();
