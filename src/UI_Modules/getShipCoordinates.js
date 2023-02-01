//USER CLICKS ON A DIV 
//ITS INDEX GIES THROUGH THIS FUNCTION AND RETURNS
//AN OBJECT WITH THE CORRESPONDIG INDEX FOR ARRAYS 
// IF IT IS NEEDED TO PLACE A SHIP WITH PLACESHIP METHOD ROW SHOULD INCREASE BY ONE
const getShipCoordinates = (index) => {
    let col = 0;
    let row = 0;
    if(index >=0 && index <=9){
        row = 0;
        col = index;
    }else if(index >=10 && index <=19){
        row = 1;
        col = index - 10;
    }else if(index >=20 && index <=29){
        row = 2;
        col = index - 20;
    }else if(index >=30 && index <=39){
        row = 3;
        col = index - 30;
    }else if(index >=40 && index <=49){
        row = 4;
        col = index - 40;
    }else if(index >=50 && index <=59){
        row = 5;
        col = index - 50;
    }else if(index >=60 && index <=69){
        row = 6;
        col = index - 60;
    }else if(index >=70 && index <=79){
        row = 7;
        col = index - 70;
    }else if(index >=80 && index <=89){
        row = 8;
        col = index - 80;
    }else{
        row = 9;
        col = index - 90;
    }

    return {
        row:  (row + 1),
        col : (col + 1)
    }
    
}

// eslint-disable-next-line no-undef
module.exports = getShipCoordinates;