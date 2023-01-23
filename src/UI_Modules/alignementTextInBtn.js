const positionBtn = document.querySelector("button.positionBtn");
const alignementArray = ["Vertical", "Horizontal"];


const alignementTextInBtn = () => {
    positionBtn.addEventListener('click', () => {
        const first = alignementArray.shift();
        positionBtn.textContent = first;
        alignementArray.push(first)
    })
}

// eslint-disable-next-line no-undef
module.exports = alignementTextInBtn;