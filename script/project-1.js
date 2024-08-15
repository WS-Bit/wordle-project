console.log("java script is working")
const wordGrid = document.querySelector(".grid");
const wordCellCount = 5;
const wordRows = [];
const CORRECT_GUESS = "ATONE";
const submitButton = document.querySelector("#submit-button")
const guessesElement = document.querySelector("#guesses")
let guesses = 6;

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

function checkForWinner() {
  const GUESS = document.querySelector("input").value;
  if (GUESS.length !== 5) {
    alert('Please enter a 5-letter word.');
    return;
  }
  const resultsArray = [];
  const correctArray = CORRECT_GUESS.split("");
  const guessArray = GUESS.split("");
  const incorrectLetters = [];
  for (let i = 0; i < CORRECT_GUESS.length; i++) {
    if (correctArray[i] === guessArray[i]) {
      resultsArray.push(guessArray[i]);
    } else {
      resultsArray.push(false);
      incorrectLetters.push(guessArray[i]);
    }
  }

  // find the indexes that are false in the resultsArray and check if any of the indexes of the incorrect letters array match those indexes
  const falseIndexes = resultsArray
    .map((item, index) => {
      if (item === false) {
        return index;
      }
    })
    .filter((i) => typeof i !== "undefined");

  const wrongLettersFromCorrectArray = correctArray
    .map((item, index) => {
      if (falseIndexes.includes(index)) {
        return item;
      }
    })
    .filter((i) => i);

  if (resultsArray.some((i) => i === false)) {
    guesses--;
    guessesElement.innerText = guesses;
    if (guesses === 0) {
      endGame()
    }
  } 

  const correctButWrongPlace = wrongLettersFromCorrectArray
    .map((letter) => {
      if (incorrectLetters.includes(letter)) {
        return letter;
      }
    })
    .filter((i) => i);

  console.log({
    wrongLettersFromCorrectArray,
    incorrectLetters,
    correctButWrongPlace,
  });
}

function endGame() {
  

}

submitButton.addEventListener('click', checkForWinner)