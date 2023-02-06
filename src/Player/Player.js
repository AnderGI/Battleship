class Player {
    static playerTurn = true;
    static computerMoves = new Set();

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
}

// eslint-disable-next-line no-undef
module.exports = Player;