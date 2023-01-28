//NO CHANGES NEEDED
//relate name with its length
const ships = {
  Cruise: 5,
  Battleship: 4,
  Submarine: 3,
  Destroyer: 3,
  "Patrol Boat": 2,
};
const shipNameBtn = document.querySelector("button.shipName");
const shipsArray = Object.entries(ships);
const displayShipNameInBtn = () => {
  shipNameBtn.addEventListener("click", () => {
    const first = shipsArray.shift();
    const text = first[0];
    shipNameBtn.textContent = text;
    shipsArray.push(first);
  });
};

// eslint-disable-next-line no-undef
module.exports = displayShipNameInBtn;
