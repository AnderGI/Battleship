
class Ship{
    constructor(_length, _verticalPosition){
        this.length = _length;
        this.vertical = _verticalPosition;
        this.timesHitted = 0;
        this.sunk = false;
        this.coordinates = new Set();
    }

    hit(){
        this.timesHitted += 1;
    }

    isSunk(){
        this.sunk = this.timesHitted >= this.length;
    }
}

// eslint-disable-next-line no-undef
module.exports = Ship;