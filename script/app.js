function init() {
    const wordGrid = document.querySelector(".grid");
    const wordCellCount = 5;
    const wordRows = [];
    // Selected elements

    const submitButton = document.querySelector("#submit-button")
    const wordGuess = document.querySelector(".form")
    // wordGuess.submit();

    // Game state
    let gameActive = true;
    let guesses = 0;

    // Functions
    function createWordRow(rowIndex) {
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
        let currentWord = 'ATONE'
    }

    function wordCheck() {
        if (!gameActive) return;
        function submitGuess() {
            document.querySelector(".form").submit();

        }
        
    }

    // Event listeners

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
    })
    
    gameStart();

}

window.addEventListener("DOMContentLoaded", init);
