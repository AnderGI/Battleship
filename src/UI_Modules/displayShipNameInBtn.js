//relate name with its length
const ships = {
  Cruise: 5,
  Battleship: 4,
  Submarine: 3,
  Destroyer: 3,
  "Patrol Boat": 2,
};
let shipNameIndex = 0;
const shipNameBtn = document.querySelector("button.shipName");

const displayShipNameInBtn = () => {
  shipNameBtn.addEventListener("click", () => {
    const shipsArray = Object.entries(ships);
    if (shipNameIndex >= shipsArray.length) shipNameIndex = 0;
    const text = shipsArray[shipNameIndex][0];
    shipNameBtn.textContent = text;
    shipNameIndex++;
  });
};

// eslint-disable-next-line no-undef
module.exports = displayShipNameInBtn;
