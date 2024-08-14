function init() {
    const wordGrid = document.querySelector(".grid");
    const wordWidth = 5;
    const wordCellCount = wordWidth * wordWidth + 5;
    const wordCells = [];

    const keyboardGrid = document.querySelector(".keyboard");
    const keyboardWidth = 10;
    const keyboardCellCount = keyboardWidth * 3;
    const keyboardCells = [];

    // lets //

    let gameActive = true;
    let lives = 6;



    // functions below //

    function createWordGrid() {
        for (let i = 0; i < wordCellCount; i++) { 
            const wCell = document.createElement("div"); 
            wordGrid.appendChild(wCell); 
            wCell.innerText = i;
            wordCells.push(wCell); 
        }
    }

    function createKeyboardGrid() {
        for (let i = 0; i < keyboardCellCount; i++) { 
            const kCell = document.createElement("div"); 
            keyboardGrid.appendChild(kCell); 
            kCell.innerText = i;
            keyboardCells.push(kCell); 
        }
    }

    createWordGrid();
    createKeyboardGrid();









}

window.addEventListener("DOMContentLoaded", init)