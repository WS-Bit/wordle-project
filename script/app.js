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

    //! Element grabbing

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


    
    gameStart();
    

    //! Capture form data and analyse
    document.querySelector("#submit-button").addEventListener("click", function(event) {
        event.preventDefault();
        if (!gameActive) return;

        const guess = document.querySelector(".text-input").value;
        if (guess.length !== 5) {
            alert('Please enter a 5-letter word.');
            return;
          }
          console.log("Your guess of:", guess);

          const correctWord = currentWord.split('');
          
          if (guess === currentWord) {
              rowOneColours();
              console.log("You win!");
          } 
        
        else if (guess.slice(-3) === correctWord.slice(-3).join('')) {
            console.log("Last three letters are correct!");
        }

        else if (guess.slice(-2) === correctWord.slice(-2).join('')) {
            console.log("Last two letters are correct!");
        } 

        else if (guess.startsWith(correctWord.slice(0, 4).join('')) && guess[4] !== correctWord[4]) {
            console.log("First four letters are correct, fifth letter is incorrect!");
        } 
        
        else if (guess[0] === correctWord[0] && guess[1] === correctWord[1] && guess[2] === correctWord[2] && guess[4] === correctWord[4] && guess[3] !== correctWord[3]) {
            console.log("First, second, third, and fifth letters are correct, fourth letter is incorrect!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 3).join('')) && guess[3] !== correctWord[3]) {
            console.log("First three letters correct, fourth letter is incorrect!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 3).join('')) && guess.endsWith(correctWord.slice(3).join(''))) {
            console.log("First three, fourth, and fifth letters are correct!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 3).join(''))) {
            console.log("First three letters correct!");
        } 
        
        else if (guess[0] === correctWord[0] && guess[1] === correctWord[1] && guess[3] === correctWord[3] && guess[4] !== correctWord[4]) {
            console.log("First two and fourth letters correct!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 2).join('')) && guess[2] !== correctWord[2]) {
            console.log("First two letters correct!");
        } 
        
        else if (guess[0] === correctWord[0] && guess[2] === correctWord[2] && guess[4] === correctWord[4]) {
            console.log("First, third and fifth letters correct!");
        } 

        else if (guess[0] === correctWord[0] && guess[4] === correctWord[4]) {
            console.log("First and fifth letters correct!");
        } 

        else if (guess[2] === correctWord[2] && guess[4] === correctWord[4]) {
            console.log("Third and fifth letters correct!");
        } 
        
        else if (guess[0] === correctWord[0]) {
            console.log("First letter correct!");
        } 
        
        else if (guess[1] === correctWord[1]) {
            console.log("Second letter correct!");
        } 
        
        else if (guess[2] === correctWord[2]) {
            console.log("Third letter correct!");
        } 
        
        else if (guess[3] === correctWord[3]) {
            console.log("Fourth letter correct!");
        } 
        
        else if (guess[4] === correctWord[4]) {
            console.log("Fifth letter correct!");
        } 
        
        else {
            console.log("No letters are correct!");
        }
          
          
        

            function rowOneColours() {
                if (guess === currentWord) {
                    for (let i = 0; i < wordRows[0].length; i++) {
                        wordRows[0][i].classList.add('correctLetter');
                    }
                } else if ((guess[0] === 'A' && guess[1] === 'T' && guess[2] === 'O' && guess[3] === 'N' && guess[4] !== 'E')) {
                    for (let i = 0; i < wordRows[0].length - 1; i++) {
                        wordRows[0][i].classList.add('correctLetter');
                    }
                }
            }

    });


}

window.addEventListener("DOMContentLoaded", init);
