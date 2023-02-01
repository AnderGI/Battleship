class Player {
    static playerTurn = true;
    static computerMoves = new Set();

    static makeMove(x,y){
        if(this.playerTurn){
            this.playerTurn = !this.playerTurn;
            return [x,y];
        }else{
            this.playerTurn = !this.playerTurn; 
            return this.randomValidMove()
        }
    }

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