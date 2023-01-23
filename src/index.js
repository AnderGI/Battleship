/* eslint-disable no-undef */
import "./styles.css";

(function () {
  const Gameboard = require("./gameboard/gameBoard");
  const userSection = document.querySelector("section#userGameboard");
  const computerSection = document.querySelector("section#computerGameboard");
  const userGameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const ships = {
    Cruise: 5,
    Battleship: 4,
    Submarine: 3,
    Destroyer: 3,
    "Patrol Boat": 2,
  };

  const displayShipNameInBtn = require("./UI_Modules/displayShipNameInBtn");
  displayShipNameInBtn();

  const alignementTextInBtn = require("./UI_Modules/alignementTextInBtn");
  alignementTextInBtn();

  const displayGameboards = require("./UI_Modules/displayGameboards");
  displayGameboards(userGameboard.table, userSection, "userGbCell");
  displayGameboards(computerGameboard.table, computerSection, "computerGbCell");

  //User Ship Visual display
  const positionBtn = document.querySelector("button.positionBtn");
  const shipNameBtn = document.querySelector("button.shipName");
  const userCells = [...document.querySelectorAll("div.userGbCell")];
 

  const displayShipShadow = (e) => {
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
    if(shipBtnText !== "Place Ship" && positionBtnText !== "Alignement"){
      const cell = e.target;
      cell.style.backgroundColor = "white";
    }
  }

  userCells.forEach(cell => cell.addEventListener('mouseover',displayShipShadow))
})();
