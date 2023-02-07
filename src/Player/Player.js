class Player {
    static computerMoves = new Set();
    static hits = [];
    static randomValidMove(){
        let row;
        let col;
        while(
            !this.computerMoves.has(`${row}, ${col}`)
            ){
            row = Math.floor(Math.random() * 9);
            col = Math.floor(Math.random() * 9);

                this.computerMoves.add(`${row}, ${col}`)
        
        }
        return [row, col]
    }
    static addMoveToHit(_row,_col){
        this.hits.push([_row, _col]);
    }

    static triangulateShip(){
        //everytime with a randomvalid move a ship is hitted that move
        //is added to hits
        //it should calculate all the moves 
    }
}

// eslint-disable-next-line no-undef
module.exports = Player;