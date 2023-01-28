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
  
  const getShipCoordinates = require("./UI_Modules/getShipCoordinates");
  const fromSetToNodeListIndexes = require("./UI_Modules/fromSetIndexesToSectionDivIndexes");
  const displayShip = (e) => {
    const cell = e.target;
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
    const objNameAndLenght = shipValuesNameLength(shipBtnText);
    const objAlignement = shipValuesAlignement(positionBtnText);
    const obj = { ...objNameAndLenght, ...objAlignement };
    const ship = new Ship(obj.length, obj.alignement, obj.name);
    const shipCoordinates = getShipCoordinates(userCells.indexOf(cell));
    userGameboard.placeShip(shipCoordinates.row + 1, shipCoordinates.col, ship);
    /**
     * Ship is correctly positioned both int the gameboard and it also has
     * in his set the gamebioard coordinates
     * take those coordinates of an array (are strings indeed; set elements)
     * and make them be indexes of the div section (from 0 to 99)
     * */
    const nodeListIndexesArray = fromSetToNodeListIndexes(ship.coordinates);
    console.log(userGameboard.table);
    console.log(nodeListIndexesArray);
    //console.log(userCells.indexOf(cell));
    nodeListIndexesArray.forEach(index => userCells[index].classList.add("placedShip"))
    nodeListIndexesArray.forEach(index => console.log(userCells[index]))
  }
  
  userCells.forEach((cell) => {
    cell.addEventListener("mouseenter", displayShipShadow);
    cell.addEventListener("mouseleave", removeShipShadow);
    cell.addEventListener("click", displayShip)
  });
})();
