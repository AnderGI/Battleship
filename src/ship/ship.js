
class Ship{
    constructor(_length, _verticalPosition, _name){
        this.length = _length;
        this.vertical = _verticalPosition === "Vertical" ? true : false;
        this.timesHitted = 0;
        this.sunk = false;
        this.coordinates = new Set();
        this.name = _name;
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