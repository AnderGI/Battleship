/* eslint-disable no-undef */
const userCells = [...document.querySelectorAll("div.userGbCell")];
  //Ship name button and its corresponding length
  const shipValuesNameLength = require("./shipValuesNameLength");
  //Alignement text content button
  const shipValuesAlignement = require("./shipValuesAlignement");
  const positionBtn = document.querySelector("button.positionBtn");
  const shipNameBtn = document.querySelector("button.shipName");

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
          if(cellIndex + i <= 99){
            userCells[cellIndex + i].classList.remove("ship");         
          }

        }
      }

      if (obj.alignement === "Vertical") {
        for (let i = 0; i < obj.length * 10; i += 10) {
          if (cellIndex + i <= 99) {
            userCells[cellIndex + i].classList.remove("ship");
          }

        }
      }
    }
  };

  module.exports = removeShipShadow;