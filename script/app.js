function init() {
    const wordGrid = document.querySelector(".grid");
    const wordCellCount = 5;
    const wordRows = [];
    const request = new Request("/myEndpoint", {
        method: "POST",
        body: "Hello world",
      });
      
      request.body;
      

    // Selected elements

    const submitButton = document.querySelector(".submit-button")

    // Game state
    let gameActive = true;
    let guesses = 0;
    let currentWord = 'ATONE'

    // Functions
    function createWordRow(rowIndex) {
        const wordRow = [];
        for (let i = 0; i < wordCellCount; i++) {
            const cell = document.createElement("div");
            wordGrid.appendChild(cell);
            cell.innerText = i;
            wordRow.push(cell);
        }
        wordRows.push(wordRow);
    }

    function wordCheck() {
        if (!gameActive) return;
        
    }

    for (let i = 0; i < 6; i++) {
        createWordRow(i);
    }

    // Event listeners

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
    })
    


}



window.addEventListener("DOMContentLoaded", init);
