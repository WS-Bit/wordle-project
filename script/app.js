function init() {
    const wordGrid = document.querySelector(".grid");
    const wordCellCount = 5;
    const wordRows = [];
    const correctLetters = [];
    console.log(wordRows)

    //! Game state

    let gameActive = true;
    let guesses = 6;
    let currentWord = 'ATONE'

    //! Basic validation

    //? empty field error

    //! Element grabbing

    const remiainingGuessesElement = document.querySelector('#guesses')

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


    //! Capture form data and analyse
    document.querySelector("#submit-button").addEventListener("click", function(event) {
        event.preventDefault();
        const guess = document.querySelector(".text-input").value;
        if (!gameActive) return;
        if (guess.length !== 5) {
            alert('Please enter a 5-letter word.');
            return;
          }
        console.log(guesses)
    
        if (guess.length !== 5) {
            alert('Please enter a 5-letter word.');
            return;
          }
          console.log("Your guess of:", guess);

          const correctWord = currentWord.split('');
          
        console.log(remiainingGuessesElement.innerText)

        if (remiainingGuessesElement.innerText === '5' && guess === currentWord) {
            rowTwoColours();
            console.log("You win!");
        } 
        else if (guess === currentWord) {
              rowOneColours();
              console.log("You win!");
        } 
        
        else if (guess.slice(-3) === correctWord.slice(-3).join('')) {
            guesses--
            console.log("Last three letters are correct!");
        }

        else if (guess.slice(-2) === correctWord.slice(-2).join('')) {
            guesses--
            console.log("Last two letters are correct!");
        } 

        else if (guess.startsWith(correctWord.slice(0, 4).join('')) && guess[4] !== correctWord[4]) {
            guesses--
            console.log("First four letters are correct, fifth letter is incorrect!");
        } 
        
        else if (guess[0] === correctWord[0] && guess[1] === correctWord[1] && guess[2] === correctWord[2] && guess[4] === correctWord[4] && guess[3] !== correctWord[3]) {
            guesses--
            console.log("First, second, third, and fifth letters are correct, fourth letter is incorrect!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 3).join('')) && guess[3] !== correctWord[3]) {
            guesses--
            console.log("First three letters correct, fourth and fifth letters are incorrect!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 3).join('')) && guess.endsWith(correctWord.slice(3).join(''))) {
            guesses--
            console.log("First three, fourth, and fifth letters are correct!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 3).join(''))) {
            guesses--
            console.log("First three letters correct!");
        } 
        
        else if (guess[0] === correctWord[0] && guess[1] === correctWord[1] && guess[3] === correctWord[3] && guess[4] !== correctWord[4]) {
            guesses--
            console.log("First two and fourth letters correct!");
        } 
        
        else if (guess.startsWith(correctWord.slice(0, 2).join('')) && guess[2] !== correctWord[2]) {
            guesses--
            console.log("First two letters correct!");
        } 
        
        else if (guess[0] === correctWord[0] && guess[2] === correctWord[2] && guess[4] === correctWord[4]) {
            guesses--
            console.log("First, third and fifth letters correct!");
        } 

        else if (guess[0] === correctWord[0] && guess[4] === correctWord[4]) {
            guesses--
            console.log("First and fifth letters correct!");
        } 

        else if (guess[2] === correctWord[2] && guess[4] === correctWord[4]) {
            guesses--
            console.log("Third and fifth letters correct!");
        } 
        
        else if (guess[0] === correctWord[0]) {
            guesses--
            console.log("First letter correct!");
        } 
        
        else if (guess[1] === correctWord[1]) {
            guesses--
            console.log("Second letter correct!");
        } 
        
        else if (guess[2] === correctWord[2]) {
            guesses--
            console.log("Third letter correct!");
        } 
        
        else if (guess[3] === correctWord[3]) {
            guesses--
            console.log("Fourth letter correct!");
        } 
        
        else if (guess[4] === correctWord[4]) {
            guesses--
            console.log("Fifth letter correct!");
        } 
        
        else {
            guesses--
            console.log("No letters are correct!");
        }

        remiainingGuessesElement.innerText = guesses
        
    
          
        //! FUNCTIONS FOR COLOUR ADDED TO EACH CELL
        
        function rowOneColours() {
            if (remiainingGuessesElement.innerText !== '6'); {
                if (guess === currentWord) {
                    for (let i = 0; i < wordRows[0].length; i++) {
                        wordRows[0][i].classList.add('correctLetter');
                    }
                }
            }
        }

        function rowTwoColours() {
            if (remiainingGuessesElement.innerText === '5') {
                if (guess === currentWord) {
                    console.log("this was called")
                    for (let i = 0; i < wordRows[1].length; i++) {
                        wordRows[1][i].classList.add('correctLetter');
                    }
                }
            }
        }

    



    //! END OF FORM CAPTURE AND ANALYSIS
    });
    
    function checkForLetters() {
        // go through users guess, letter by letter see if the first letter is in it. (.includes/.contains) push letters in a new array, scan for the correct letters, 
        // two words, for loop, two arrays, correctLetters correctWordsWrongPos , 
        // function check for winner, seperate letters and push into arrays, if correctLetters = 5 run win condition. 
        // clwp, push in with the id of 
    }

}

window.addEventListener("DOMContentLoaded", init);

