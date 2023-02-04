const displayGameboards = (arrayOfArrays, el, cellClass) => {
    //el.innerHTML = "";
    for(let i = 0; i < arrayOfArrays.length; i++){
        for(let j = 0; j < arrayOfArrays[i].length; j++){
            const div = document.createElement("div");
            div.setAttribute("class", cellClass);
            el.append(div);
        }
    }
}

// eslint-disable-next-line no-undef
module.exports = displayGameboards;