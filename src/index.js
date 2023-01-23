/* eslint-disable no-undef */
import "./styles.css";

(function () {
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
 
  const shipValuesNameLength = (elementTextContent) => {
    let shipNameAndLength = null;
    switch(elementTextContent){
      case "Cruise":
        shipNameAndLength = {
          name:"Cruise",
          length: 5,
        }
        break;
      case "Battleship":
        shipNameAndLength = {
          name:"Battleship",
          length: 4,
        }
        break;
      case "Destroyer":
        shipNameAndLength = {
          name:"Destroyer",
          length: 3,
        }
        break;
      case "Submarine":
        shipNameAndLength = {
          name:"Submarine",
          length: 3,
        }
        break;
      case "Patrol Boat":
        shipNameAndLength = {
          name:"Patrol Boat",
          length: 2,
        }
        break;
    }

    return shipNameAndLength;
  }
  const shipValuesAlignement = (elementTextContent) => {
    let obj = null;
    switch (elementTextContent){
      case "Vertical":
        obj = {
          alignement: "Vertical"
        }
        break;
      case "Horizontal":
        obj = {
          alignement: "Horizontal"
        }
        break;
    }
    return obj;
  }
  const displayShipShadow = () => {
    const shipBtnText = shipNameBtn.textContent;
    const positionBtnText = positionBtn.textContent;
   // const cell = e.target;
    if(shipBtnText !== "Place Ship" && positionBtnText !== "Alignement"){
      //cell.style.backgroundColor = "white";
      const objNameAndLenght = shipValuesNameLength(shipBtnText);
      const objAlignement = shipValuesAlignement(positionBtnText);
      const obj = {...objNameAndLenght, ...objAlignement};
      console.log(obj);
    }
  }

  userCells.forEach(cell => cell.addEventListener('click',displayShipShadow))
})();
