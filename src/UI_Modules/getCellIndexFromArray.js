const getCellIndex = (row, col) => {
    let index = 0;
    if(row === 0) index += 0;
    else if(row === 1) index += 10;
    else if(row === 2) index += 20;
    else if(row === 3) index += 30;
    else if(row === 4) index += 40;
    else if(row === 5) index += 50;
    else if(row === 6) index += 60;
    else if(row === 7) index += 70;
    else if(row === 8) index += 80;
    else index += 90;
    
    return index + col;
}

// eslint-disable-next-line no-undef
module.exports = getCellIndex;