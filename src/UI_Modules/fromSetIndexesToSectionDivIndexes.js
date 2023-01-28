//take a set with indexes
//and transform its pair of indexes el[0] and el[3]
//into NodeList indexes from 0 to 99 both included

const fromSetToNodeListIndexes = (set) => {
  const fromSetToArray = Array.from(set);
  const nodeListIndexes = [];

  fromSetToArray.forEach((coord) => {
    let rowIndex = parseInt(coord[0]);
    let colIndex = parseInt(coord[3]);

    //first row from 0 to 9
    //second 10 to 19 and so on until last from 90 to 99
    if (rowIndex === 0);
    else if (rowIndex === 1) rowIndex = 10;
    else if (rowIndex === 2) rowIndex = 20;
    else if (rowIndex === 3) rowIndex = 30;
    else if (rowIndex === 4) rowIndex = 40;
    else if (rowIndex === 5) rowIndex = 50;
    else if (rowIndex === 6) rowIndex = 60;
    else if (rowIndex === 7) rowIndex = 70;
    else if (rowIndex === 8) rowIndex = 80;
    else if (rowIndex === 9) rowIndex = 90;

    const nodeListCoord = rowIndex + colIndex;
    nodeListIndexes.push(nodeListCoord);
  });

  return nodeListIndexes;
};

// eslint-disable-next-line no-undef
module.exports = fromSetToNodeListIndexes;