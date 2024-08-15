
// const keyboardGrid = document.querySelector(".keyboard");
// const keyboardWidth = 10;
// const keyboardCellCount = keyboardWidth * 3;
// const keyboardCells = [];

// function createKeyboardGrid() {
//     for (let i = 0; i < keyboardCellCount; i++) { 
//         const kCell = document.createElement("div"); 
//         keyboardGrid.appendChild(kCell); 
//         kCell.innerText = i;
//         keyboardCells.push(kCell); 
//     }
// }

// const emptyField = document.getElementById(".text-input").value;
// if (emptyField === "") {
// alert("Please fill out all fields.");
// return;
// }

// ! previous working word code below

// const correctWord = currentWord.split('');
          
// console.log(remiainingGuessesElement.innerText)

// if (remiainingGuessesElement.innerText === '5' && GUESS === currentWord) {
//     rowTwoColours();
//     console.log("You win!");
// } 
// else if (GUESS === currentWord) {
//       rowOneColours();
//       console.log("You win!");
// } 

// else if (GUESS.slice(-3) === correctWord.slice(-3).join('')) {
//     guesses--
//     console.log("Last three letters are correct!");
// }

// else if (GUESS.slice(-2) === correctWord.slice(-2).join('')) {
//     guesses--
//     console.log("Last two letters are correct!");
// } 

// else if (GUESS.startsWith(correctWord.slice(0, 4).join('')) && GUESS[4] !== correctWord[4]) {
//     guesses--
//     console.log("First four letters are correct, fifth letter is incorrect!");
// } 

// else if (GUESS[0] === correctWord[0] && GUESS[1] === correctWord[1] && GUESS[2] === correctWord[2] && GUESS[4] === correctWord[4] && GUESS[3] !== correctWord[3]) {
//     guesses--
//     console.log("First, second, third, and fifth letters are correct, fourth letter is incorrect!");
// } 

// else if (GUESS.startsWith(correctWord.slice(0, 3).join('')) && GUESS[3] !== correctWord[3]) {
//     guesses--
//     console.log("First three letters correct, fourth and fifth letters are incorrect!");
// } 

// else if (GUESS.startsWith(correctWord.slice(0, 3).join('')) && GUESS.endsWith(correctWord.slice(3).join(''))) {
//     guesses--
//     console.log("First three, fourth, and fifth letters are correct!");
// } 

// else if (GUESS.startsWith(correctWord.slice(0, 3).join(''))) {
//     guesses--
//     console.log("First three letters correct!");
// } 

// else if (GUESS[0] === correctWord[0] && GUESS[1] === correctWord[1] && GUESS[3] === correctWord[3] && GUESS[4] !== correctWord[4]) {
//     guesses--
//     console.log("First two and fourth letters correct!");
// } 

// else if (GUESS.startsWith(correctWord.slice(0, 2).join('')) && GUESS[2] !== correctWord[2]) {
//     guesses--
//     console.log("First two letters correct!");
// } 

// else if (GUESS[0] === correctWord[0] && GUESS[2] === correctWord[2] && GUESS[4] === correctWord[4]) {
//     guesses--
//     console.log("First, third and fifth letters correct!");
// } 

// else if (GUESS[0] === correctWord[0] && GUESS[4] === correctWord[4]) {
//     guesses--
//     console.log("First and fifth letters correct!");
// } 

// else if (GUESS[2] === correctWord[2] && GUESS[4] === correctWord[4]) {
//     guesses--
//     console.log("Third and fifth letters correct!");
// } 

// else if (GUESS[0] === correctWord[0]) {
//     guesses--
//     console.log("First letter correct!");
// } 

// else if (GUESS[1] === correctWord[1]) {
//     guesses--
//     console.log("Second letter correct!");
// } 

// else if (GUESS[2] === correctWord[2]) {
//     guesses--
//     console.log("Third letter correct!");
// } 

// else if (GUESS[3] === correctWord[3]) {
//     guesses--
//     console.log("Fourth letter correct!");
// } 

// else if (GUESS[4] === correctWord[4]) {
//     guesses--
//     console.log("Fifth letter correct!");
// } 

// else {
//     guesses--
//     console.log("No letters are correct!");
// }

// remiainingGuessesElement.innerText = guesses


  
// //! FUNCTIONS FOR COLOUR ADDED TO EACH CELL

// function rowOneColours() {
//     if (remiainingGuessesElement.innerText !== '6'); {
//         if (GUESS === currentWord) {
//             for (let i = 0; i < wordRows[0].length; i++) {
//                 wordRows[0][i].classList.add('correctLetter');
//             }
//         }
//     }
// }

// function rowTwoColours() {
//     if (remiainingGuessesElement.innerText === '5') {
//         if (GUESS === currentWord) {
//             console.log("this was called")
//             for (let i = 0; i < wordRows[1].length; i++) {
//                 wordRows[1][i].classList.add('correctLetter');
//             }
//         }
//     }
// }





// //! END OF FORM CAPTURE AND ANALYSIS
// });