/* eslint-disable no-undef */
import "./styles.css";

(function () {
  const Ship = require("./ship/ship");
  const Gameboard = require("./gameboard/gameBoard");
  const userSection = document.querySelector("section#userGameboard");
  const computerSection = document.querySelector("section#computerGameboard");
  const userGameboard = new Gameboard();
  const computerGameboard = new Gameboard();
  const positionBtn = document.querySelector("button.positionBtn");
  const shipNameBtn = document.querySelector("button.shipName");

  const displayShipNameInBtn = require("./UI_Modules/displayShipNameInBtn");
  displayShipNameInBtn();

  const alignementTextInBtn = require("./UI_Modules/alignementTextInBtn");
  alignementTextInBtn();

  const displayGameboards = require("./UI_Modules/displayGameboards");
  displayGameboards(userGameboard.table, userSection, "userGbCell");
  displayGameboards(computerGameboard.table, computerSection, "computerGbCell");

  const userCells = [...document.querySelectorAll("div.userGbCell")];

  const displayShipShadow = require("./UI_Modules/displayShipShadow");
  const removeShipShadow = require("./UI_Modules/removeShipShadow");

  const shipValuesNameLength = require("./UI_Modules/shipValuesNameLength");
  const shipValuesAlignement = require("./UI_Modules/shipValuesAlignement");
  const displayShip = (e) => {
    const cell = e.target;
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
    const objNameAndLenght = shipValuesNameLength(shipBtnText);
    const objAlignement = shipValuesAlignement(positionBtnText);
    const obj = { ...objNameAndLenght, ...objAlignement };
    alert(`${obj.name}, ${obj.length}, ${obj.alignement}, ${userCells.indexOf(cell)}`)
  }
  userCells.forEach((cell) => {
    cell.addEventListener("mouseenter", displayShipShadow);
    cell.addEventListener("mouseleave", removeShipShadow);
    cell.addEventListener("click", displayShip)
  });
})();
