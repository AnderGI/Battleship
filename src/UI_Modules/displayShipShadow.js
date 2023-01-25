/* eslint-disable no-undef */
const userCells = [...document.querySelectorAll("div.userGbCell")];
  //Ship name button and its corresponding length
  const shipValuesNameLength = require("./shipValuesNameLength");
  //Alignement text content button
  const shipValuesAlignement = require("./shipValuesAlignement");
  const positionBtn = document.querySelector("button.positionBtn");
  const shipNameBtn = document.querySelector("button.shipName");

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
      const visualShipPlacement = require("./correctVisualShipPlacement");
      let goodPositioning = visualShipPlacement(cellIndex, obj);
      if (obj.alignement === "Horizontal") {
        for (let i = 0; i < obj.length; i++) {
          if (goodPositioning) {
            userCells[cellIndex + i].style.backgroundColor =
              "rgba(0, 0, 0, 0.5)";
          } else {
            if(cellIndex + i <= 99){
                userCells[cellIndex + i].style.backgroundColor = "red";
                cell.style.cursor = "not-allowed";
            }
          }
        }
      }

      if (obj.alignement === "Vertical") {
        for (let i = 0; i < obj.length * 10; i += 10) {
          if (goodPositioning) {
            userCells[cellIndex + i].style.backgroundColor =
              "rgba(0, 0, 0, 0.5)";
          } else {
            if (cellIndex + i <= 100) {
              userCells[cellIndex + i].style.backgroundColor = "red";
              cell.style.cursor = "not-allowed";
            }
          }
        }
      }
    }
  };

  module.exports=displayShipShadow;