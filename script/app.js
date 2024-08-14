function init() {
    const wordGrid = document.querySelector(".grid");
    const wordCellCount = 5;
    const wordRows = [];
    console.log(wordRows)

    //! Game state

    let gameActive = true;
    let guesses = 0;
    let currentWord = 'ATONE'

    //! Basic validation

    //? empty field error

    //! Capture form data

    document.querySelector("#submit-button").addEventListener("click", function(event) {
        event.preventDefault();
        if (!gameActive) return;
        const guess = document.querySelector(".text-input").value;
        console.log("Your guess of:", guess);
        if (guess === currentWord) { 
            console.log("You win!")
            }
    });

    //! Functions

    function createWordRow() {
        const wordRow = [];
        for (let i = 0; i < wordCellCount; i++) {
            const cell = document.createElement("div");
            wordGrid.appendChild(cell);
            cell.innerText = "";
            wordRow.push(cell);
        }
        wordRows.push(wordRow);
    }
    for (let i = 0; i < 6; i++) {
        createWordRow(i);
    }

    function gameStart() {
        if (!gameActive) return;
        let guesses = 0;
    }

    function wordIncludes() {

    }

    gameStart();

}

window.addEventListener("DOMContentLoaded", init);
