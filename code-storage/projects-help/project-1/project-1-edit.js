const CORRECT_GUESS = "phone";
let guesses = 6;

function checkForWinner() {
  const resultsArray = [];
  const correctArray = CORRECT_GUESS.split("");
  const guessArray = GUESS.split("");
  const incorrectLetters = [];
  const unmatchedCorrect = [];
  const unmatchedGuess = [];

  for (let i = 0; i < correctArray.length; i++) {
    if (correctArray[i] === guessArray[i]) {
      resultsArray.push(guessArray[i]); // Correct letter in the correct position
    } else {
      resultsArray.push(false); // Incorrect or misplaced letter
      unmatchedCorrect.push(correctArray[i]); // Track unmatched letters from the correct guess
      unmatchedGuess.push(guessArray[i]); // Track unmatched letters from the guess
    }
  }

  // Calculate partial matches (correct letters but wrong positions)
  const partialMatches = unmatchedGuess.filter(letter => {
    const index = unmatchedCorrect.indexOf(letter);
    if (index !== -1) {
      unmatchedCorrect.splice(index, 1); // Remove the matched letter to prevent counting it again
      return true;
    }
    return false;
  });

  if (resultsArray.some((i) => i === false)) {
    guesses--;
  }

  console.log({
    incorrectLetters: unmatchedGuess,
    partialMatches: partialMatches,
  });
}

checkForWinner();




//! 


function init() {
  const wordGrid = document.querySelector(".grid");
  const wordCellCount = 5;
  const wordRows = [];

  //! Game state
  let gameActive = true;
  let guesses = 6;
  const CORRECT_GUESS = "ATONE";

  //! Element grabbing
  const remainingGuessesElement = document.querySelector('#guesses');
  remainingGuessesElement.innerText = guesses;

  //! Functions

  function createWordRow() {
      const wordRow = [];
      for (let i = 0; i < wordCellCount; i++) {
          const cell = document.createElement("div");
          cell.className = "cell";
          wordGrid.appendChild(cell);
          wordRow.push(cell);
      }
      wordRows.push(wordRow);
  }

  for (let i = 0; i < 6; i++) {
      createWordRow();
  }

  //! Capture form data and analyze
  document.querySelector("#submit-button").addEventListener("click", function(event) {
      event.preventDefault();
      const GUESS = document.querySelector(".text-input").value.toUpperCase();
      if (!gameActive) return;

      if (GUESS.length !== 5) {
          alert('Please enter a 5-letter word.');
          return;
      }

      console.log("Your guess:", GUESS);

      checkForWinner(GUESS);

      remainingGuessesElement.innerText = guesses;
  });

  function checkForWinner(GUESS) {
      const resultsArray = [];
      const correctArray = CORRECT_GUESS.split("");
      const guessArray = GUESS.split("");
      const unmatchedCorrect = [];
      const unmatchedGuess = [];

      for (let i = 0; i < correctArray.length; i++) {
          if (correctArray[i] === guessArray[i]) {
              resultsArray.push("correct");
          } else {
              resultsArray.push("incorrect");
              unmatchedCorrect.push(correctArray[i]);
              unmatchedGuess.push(guessArray[i]);
          }
      }

      const partialMatches = unmatchedGuess.filter(letter => {
          const index = unmatchedCorrect.indexOf(letter);
          if (index !== -1) {
              unmatchedCorrect.splice(index, 1);
              return true;
          }
          return false;
      });

      updateGrid(resultsArray, partialMatches, GUESS);

      if (resultsArray.every(result => result === "correct")) {
          alert("Congratulations! You've guessed the word!");
          gameActive = false;
      } else {
          guesses--;
          if (guesses === 0) {
              alert(`Game over! The correct word was ${CORRECT_GUESS}.`);
              gameActive = false;
          }
      }
  }

  function updateGrid(resultsArray, partialMatches, GUESS) {
      const currentRow = wordRows[6 - guesses];
      for (let i = 0; i < currentRow.length; i++) {
          currentRow[i].innerText = GUESS[i];
          if (resultsArray[i] === "correct") {
              currentRow[i].classList.add("correct");
          } else if (partialMatches.includes(GUESS[i])) {
              currentRow[i].classList.add("partial");
          } else {
              currentRow[i].classList.add("incorrect");
          }
      }
  }
}

window.addEventListener("DOMContentLoaded", init);

