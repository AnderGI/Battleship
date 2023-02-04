/**
 * FUNCTION WILL RECEIVE ROW AND COL
 * IN GAMEBOARD IT WILL SEARCH FOR SHIP WITH THAT POSITION IT WILL RETURN IT
 */

const getShipFromUICoords = (row, col, gameboard) => {
    const shipsArray = gameboard.ships;
    for(const ship of shipsArray){
        if(ship.coordinates.has(`${row}, ${col}`)) return ship;
    }
}

// eslint-disable-next-line no-undef
module.exports = getShipFromUICoords;