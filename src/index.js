/* eslint-disable no-undef */
import "./styles.css";

(function () {
  const Ship = require("./ship/ship");
  const Gameboard = require("./gameboard/gameBoard");
  const userSection = document.querySelector("section#userGameboard");
  const computerSection = document.querySelector("section#computerGameboard");
  const userGameboard = new Gameboard();
  const computerGameboard = new Gameboard();

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

  //Ship name button and its corresponding length
  const shipValuesNameLength = require("./UI_Modules/shipValuesNameLength");
  //Alignement text content button
  const shipValuesAlignement = require("./UI_Modules/shipValuesAlignement");

  const displayShipShadow = (e) => {
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
    const cell = e.target;
    if (shipBtnText !== "Place Ship" && positionBtnText !== "Alignement") {
      //cell.style.backgroundColor = "white";
      const objNameAndLenght = shipValuesNameLength(shipBtnText);
      const objAlignement = shipValuesAlignement(positionBtnText);
      //object with name, length and alignement
      const obj = { ...objNameAndLenght, ...objAlignement };
      /* When cell is clicked a ship will be created and it will be placed in userGameboard and new gameboard will be rendered
      const vertical = obj.alignement === "Vertical";
      const ship = new Ship(obj.length, vertical, obj.name);
      */
      const cellIndex = userCells.indexOf(cell);
      const visualShipPlacement = require("./UI_Modules/correctVisualShipPlacement");
      let goodPositioning = visualShipPlacement(cellIndex, obj);
      if (obj.alignement === "Horizontal") {
        for (let i = 0; i < obj.length; i++) {
          if (goodPositioning) {
            userCells[cellIndex + i].style.backgroundColor =
              "rgba(0, 0, 0, 0.5)";
          } else {
            userCells[cellIndex + i].style.backgroundColor = "red";
          }
        }
      }

      if (obj.alignement === "Vertical") {
        for (let i = 0; i < obj.length * 10; i += 10) {
          if (goodPositioning) {
            userCells[cellIndex + i].style.backgroundColor =
              "rgba(0, 0, 0, 0.5)";
          } else {
            userCells[cellIndex + i].style.backgroundColor = "red";
          }
        }
      }
    }
  };
  const removeShipShadow = (e) => {
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
    const cell = e.target;
    if (shipBtnText !== "Place Ship" && positionBtnText !== "Alignement") {
      //cRepeated Code
      const objNameAndLenght = shipValuesNameLength(shipBtnText);
      const objAlignement = shipValuesAlignement(positionBtnText);
      //object with name, length and alignement
      const obj = { ...objNameAndLenght, ...objAlignement };
      const cellIndex = userCells.indexOf(cell);

      if (obj.alignement === "Horizontal") {
        for (let i = 0; i < obj.length; i++) {
          userCells[cellIndex + i].style.backgroundColor =
            "rgba(0, 0, 0, 0.15)";
        }
      }

      if (obj.alignement === "Vertical") {
        for (let i = 0; i < obj.length * 10; i += 10) {
          userCells[cellIndex + i].style.backgroundColor =
            "rgba(0, 0, 0, 0.15)";
        }
      }
    }
  };
  userCells.forEach((cell) =>
    cell.addEventListener("mouseover", displayShipShadow)
  );
  userCells.forEach((cell) =>
  cell.addEventListener("mouseout", removeShipShadow)
);
})();
