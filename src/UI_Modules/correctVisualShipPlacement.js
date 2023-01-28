//NO CHANGES NEEDED
//IT WILL EVALUATE WHETHER THE SHIP IS HORIZONTAL OR VERTICAL
//IF IT IS CORRECTLY PLACED

const visualShipDisplay = (cellIndex, obj) => {
  /**
   * Take into account the starting index of the ship and while the start and the end are both in the same
   * row or col its going to be a true positioning else it will be false
   */
  const userCells = [...document.querySelectorAll("div.userGbCell")];
  let correctShipPositioning = false;
  const verticalCombinations = [
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
    [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
    [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
    [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
    [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
    [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
    [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
    [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
    [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
  ];
  const verticalOccupiedCells = [];
  if (obj.alignement === "Horizontal") {
    if (
      (0 <= cellIndex && cellIndex + obj.length - 1 <= 9) ||
      (10 <= cellIndex && cellIndex + obj.length - 1 <= 19) ||
      (20 <= cellIndex && cellIndex + obj.length - 1 <= 29) ||
      (30 <= cellIndex && cellIndex + obj.length - 1 <= 39) ||
      (40 <= cellIndex && cellIndex + obj.length - 1 <= 49) ||
      (50 <= cellIndex && cellIndex + obj.length - 1 <= 59) ||
      (60 <= cellIndex && cellIndex + obj.length - 1 <= 69) ||
      (70 <= cellIndex && cellIndex + obj.length - 1 <= 79) ||
      (80 <= cellIndex && cellIndex + obj.length - 1 <= 89) ||
      (90 <= cellIndex && cellIndex + obj.length - 1 <= 99)
    ) {
      if (
        !userCells[cellIndex].classList.contains("placedShip") && 
        !userCells[cellIndex + obj.length - 1].classList.contains("placedShip")
      ){
        correctShipPositioning = true;
      } 
    }
  }

  if (obj.alignement === "Vertical") {
    for (let i = 10; i < obj.length * 10; i += 10) {
      verticalOccupiedCells.push(cellIndex + i);
    }
    /**
     * take some combination of verticalCombinations
     * if every cell the ship will occupy has an index of not -1
     * (it exists) in some combination then return true;
     */
    correctShipPositioning = verticalCombinations.some((combination) => {
      return verticalOccupiedCells.every(cell => {
        return combination.indexOf(cell) !== -1;
      })
    });
  }



  return correctShipPositioning;
};

// eslint-disable-next-line no-undef
module.exports = visualShipDisplay;
