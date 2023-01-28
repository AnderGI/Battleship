//NO CHANGES NEEDED
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

  // eslint-disable-next-line no-undef
  module.exports = shipValuesNameLength;