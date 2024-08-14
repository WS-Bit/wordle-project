
const keyboardGrid = document.querySelector(".keyboard");
const keyboardWidth = 10;
const keyboardCellCount = keyboardWidth * 3;
const keyboardCells = [];

function createKeyboardGrid() {
    for (let i = 0; i < keyboardCellCount; i++) { 
        const kCell = document.createElement("div"); 
        keyboardGrid.appendChild(kCell); 
        kCell.innerText = i;
        keyboardCells.push(kCell); 
    }
}