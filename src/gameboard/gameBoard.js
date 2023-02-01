
class GameBoard {
  constructor() {
    this.table = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.ships = [

    ];
    this.shipCoord = new Set();
    this.missedShots = [

    ];
  }

  placeShip(_row, _col, _ship) {
    if (_row > 10 || _col > 10) return false;
    //calc the space available taking into accout ship length and its
    //startin position (from left to right when horizontal and from top to
    //bottom when vertical)
    let availableSpace;
    if (_ship.vertical) {
      //ship is vertical
      availableSpace = 10 - (_row - 1); //the user will not introduce the index
      if (availableSpace < _ship.length) return false; //not enought space
      
    } else {
      //ship is horizontal
      availableSpace = 10 - (_col - 1);
      if (availableSpace < _ship.length) return false; //not enought space
    }

    const coordinates = [];
    //all posible coordinates
    for(let i = 0; i < _ship.length; i++){
        if(_ship.vertical){
            coordinates.push([(_row - 1) + i, (_col - 1)]);
        }else{
            coordinates.push([(_row - 1), (_col - 1) + i]);
        }
    }

  
    let possibleShip = true;
      coordinates.forEach(el => {
        const [row, col] = el;
        if(this.shipCoord.has(`${row}, ${col}`)) {
          possibleShip = false
          return false;
        };
      })      
    

    if(possibleShip === true){
      coordinates.forEach(el => {
        const [r, c] = el;
        this.shipCoord.add(`${r}, ${c}`);
        this.table[r][c] = _ship.name.charAt(0);
        _ship.coordinates.add(`${r}, ${c}`);
      })      
      this.ships.push(_ship);
    }

    
  }

  receiveAttack(_row, _col) {
    if(_row > 10 || _col > 10) return false;
    const rowIndex = _row - 1;
    const colIndex = _col - 1;
    const el = [rowIndex, colIndex];
  
    //if shipCoordinates does not have the el add it to missedShots cause 
    //no ship occupies that coord
    if(!this.shipCoord.has(`${rowIndex}, ${colIndex}`)){
      this.missedShots.push(el);  
      this.table[rowIndex][colIndex] = "*";
      return "*";
    }else{
      //if shipCoord has it
      //look for every ship
      //evaluate if coordinates of ship has el coordinates
      //in that case ship has been hitted
      for(const ship of this.ships){
        if(ship.coordinates.has(`${rowIndex}, ${colIndex}`)){
          this.table[rowIndex][colIndex] = "X";
          ship.hit();
          ship.isSunk();
          if(ship.sunk) return "Sunk";
          return "X";
        }
      }
    }

  }
}

// eslint-disable-next-line no-undef
module.exports = GameBoard;