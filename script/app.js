console.log("Hello world! Java script is working!")

import { easyWordArray, hardWordArray } from '../words/wordList.js';


// ! CONSTS

const wordGrid = document.querySelector(".grid");
let wordCellCount = 5;
const gridRows = [];
const randomWordIndex = Math.floor(Math.random() * easyWordArray.length);
let CORRECT_GUESS = easyWordArray[randomWordIndex];
console.log(CORRECT_GUESS)
let correctArray = CORRECT_GUESS.split("");


const submitButton = document.querySelector("#submit-button");
const inputBox = document.querySelector(".text-input");
const guessesElement = document.querySelector("#guesses");
const playAgainButton = document.getElementById('play-again');
const rules = document.querySelector(".rules");
const mediaQuery = window.matchMedia('(max-width: 600px)');
const audio = document.querySelector("audio");
audio.volume = 0.25;
let displayingRules = false;

let guesses = 6;
let currentRowIndex = 0;
let gameActive = true;
let wins = localStorage.getItem('wordleWins');
    wins = wins ? parseInt(wins) : 0;

let gameMode ='easy';

// ! ROW CREATION

function createRow() {
const row = [];
for (let i = 0; i < wordCellCount; i++) {
    const cell = document.createElement("div");
    cell.setAttribute('data-index', i);
    wordGrid.appendChild(cell);
    cell.innerText = "";
    cell.classList.add('word-cell');
    row.push(cell);
}
gridRows.push(row);
}

function createGrid() {
  wordGrid.innerHTML = '';
  gridRows.length = 0;
  
  if (gameMode === 'easy') {
      wordGrid.classList.remove('hard-mode');
      wordGrid.classList.add('easy-mode');
  } else {
      wordGrid.classList.remove('easy-mode');
      wordGrid.classList.add('hard-mode');
  }

  // Create the rows
  for (let i = 0; i < 6; i++) {
      createRow();
  }
}

createGrid();

//! MAIN FUNCTION

function checkForWinner() {
  const GUESS = document.querySelector("input").value.trim().toUpperCase();
  const validWordArray = (gameMode === 'easy' ? easyWordArray : hardWordArray).map(word => word.trim().toUpperCase());
    if (!validWordArray.includes(GUESS)) {
        showInvalidWordMessage();
        console.log('GUESS:', GUESS);
        console.log('Valid Words:', validWordArray);
        return;
    }

  audio.play();
  const guessArray = GUESS.split("");
  const displayGuessArray = [...guessArray];
  let correctArray = [...CORRECT_GUESS.split("")];
  const resultsArray = new Array(wordCellCount).fill('incorrect');

  for (let i = 0; i < wordCellCount; i++) {
      if (guessArray[i] === correctArray[i]) {
          resultsArray[i] = 'correct';
          correctArray[i] = null;
          guessArray[i] = null;
      }
  }

  for (let i = 0; i < wordCellCount; i++) {
      if (guessArray[i] !== null) {
          let index = correctArray.indexOf(guessArray[i]);
          if (index !== -1) {
              resultsArray[i] = 'misplaced';
              correctArray[index] = null; 
          }
      }
  }

  colourHandling(displayGuessArray, resultsArray);
  
  if (resultsArray.every((result) => result === 'correct')) {
      winGame();
  } else {
      guesses--;
      guessesElement.innerText = guesses;
      if (guesses === 0) {
          loseGame();
      }
      currentRowIndex++;
  }
}

//! COLOUR CONTROL

function colourHandling(guessArray, resultsArray) {
gridRows[currentRowIndex].forEach((cell, index) => {
    cell.innerText = guessArray[index];
    cell.classList.add(resultsArray[index]);
});
}

//! WIN AND LOSS DISPLAY 

function winGame() {
  incrementWins()
  gameActive = false;
  const winGameMessage = document.createElement('div');

  winGameMessage.id = 'winGameMessage'
  winGameMessage.innerHTML = 'You win!';
  winGameMessage.style.position = 'absolute';
  winGameMessage.style.top = '50%';
  winGameMessage.style.left = '50%';
  winGameMessage.style.transform = 'translate(-50%, -50%)';
  winGameMessage.style.backgroundColor = 'rgb(113, 255, 168)';
  winGameMessage.style.fontSize = '48px';
  winGameMessage.style.textAlign = 'center';
  winGameMessage.style.padding = '20px';
  winGameMessage.style.fontWeight = 'bold'; 
  winGameMessage.style.border = '1px solid black';
  document.body.appendChild(winGameMessage);
  submitButton.removeEventListener('click', checkForWinner)
  playAgainButton.style.display = 'block';

  function handleWinChange(event) {
    if (event.matches) {
      winGameMessage.style.fontSize = '18px'; 
      winGameMessage.style.padding = '15px';  
    } else {
      // ! Screen width is greater than 600px
      winGameMessage.style.fontSize = '48px';  
      winGameMessage.style.padding = '20px';   
    }
  }
  
  handleWinChange(mediaQuery);

  mediaQuery.addEventListener('change', handleWinChange);
  document.body.appendChild(winGameMessage);
}

function loseGame() {
  gameActive = false;
  eraseWins();
  const gameOverContainer = document.createElement('div');

  gameOverContainer.id = 'gameOverContainer';
  gameOverContainer.style.position = 'absolute';
  gameOverContainer.style.top = '50%';
  gameOverContainer.style.left = '50%';
  gameOverContainer.style.transform = 'translate(-50%, -50%)';
  gameOverContainer.style.backgroundColor = 'rgb(255, 91, 91)';
  gameOverContainer.style.fontSize = '28px';
  gameOverContainer.style.padding = '20px';
  gameOverContainer.style.fontWeight = 'bold';
  gameOverContainer.style.textAlign = 'center';
  gameOverContainer.style.border = '1px solid black';

  const gameOverMessage = document.createElement('div');
  gameOverMessage.innerHTML = 'Game Over!';
  gameOverMessage.style.marginBottom = '10px'; 

  const chosenWordMessage = document.createElement('div');
  const chosenWord = 'The chosen word was: ' + CORRECT_GUESS;
  chosenWordMessage.innerHTML = chosenWord;

  gameOverContainer.appendChild(gameOverMessage);
  gameOverContainer.appendChild(chosenWordMessage);
  document.body.appendChild(gameOverContainer);

  submitButton.removeEventListener('click', checkForWinner);
  playAgainButton.style.display = 'block';

  function handleLoseChange(event) {
    if (event.matches) {
      gameOverContainer.style.fontSize = '18px';  
      gameOverContainer.style.padding = '15px';  
    } else {
      // ! Screen width is greater than 600px
      gameOverContainer.style.fontSize = '28px';  
      gameOverContainer.style.padding = '20px';   
    }
  }
  
  handleLoseChange(mediaQuery);

  mediaQuery.addEventListener('change', handleLoseChange);
  
}

playAgainButton.addEventListener('click', () => {
  resetGame();
  playAgainButton.style.display = 'none';
});


// ! INVALID WORD MESSAGE DISPLAY

function showInvalidWordMessage() {
  const invalidWordMessage = document.createElement('div');

  invalidWordMessage.id = 'invalidWordMessage';
  invalidWordMessage.innerHTML = `
    <p>Not a valid word in the word list!</p>
    <button id="ok-button" style="display: none;">OK</button>
  `;
  invalidWordMessage.style.position = 'absolute';
  invalidWordMessage.style.top = '50%';
  invalidWordMessage.style.left = '50%';
  invalidWordMessage.style.transform = 'translate(-50%, -50%)';
  invalidWordMessage.style.backgroundColor = 'rgb(115, 167, 250)';
  invalidWordMessage.style.fontSize = '28px';
  invalidWordMessage.style.textAlign = 'center';
  invalidWordMessage.style.padding = '20px';
  invalidWordMessage.style.fontWeight = 'bold';
  invalidWordMessage.style.border = '1px solid black';

  invalidWordMessage.style.display = 'flex';
  invalidWordMessage.style.flexDirection = 'column';
  invalidWordMessage.style.alignItems = 'center';
  invalidWordMessage.style.justifyContent = 'center';

  document.body.appendChild(invalidWordMessage);

  const okButton = invalidWordMessage.querySelector('#ok-button');
  okButton.style.fontSize = '18px';
  okButton.style.padding = '10px 20px';
  okButton.style.marginTop = '10px';
  okButton.style.display = 'block';
  okButton.style.backgroundColor = 'rgb(253, 243, 235)';

  const inputBox = document.querySelector('.text-input');
  const submitButton = document.getElementById('submit-button');
  inputBox.disabled = true;
  submitButton.disabled = true;

  function disableEnterKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  document.addEventListener('keydown', disableEnterKey);

  okButton.addEventListener('click', function () {
    inputBox.disabled = false;
    submitButton.disabled = false;
    document.removeEventListener('keydown', disableEnterKey);
    document.body.removeChild(invalidWordMessage); 
  });


  function handleInvalidWordChange(event) {
    if (event.matches) {
      invalidWordMessage.style.fontSize = '18px';  
      invalidWordMessage.style.padding = '15px';  
    } else {
      invalidWordMessage.style.fontSize = '24px';  
      invalidWordMessage.style.padding = '10px 20px';   
    }
  }

  function handleOkButtonChange(event) {
    if (event.matches) {
      okButton.style.fontSize = '14px';  
      okButton.style.padding = '8px';  
    } else {
      okButton.style.fontSize = '18px';  
      okButton.style.padding = '10px';   
    }
  }
  
  handleInvalidWordChange(mediaQuery);
  handleOkButtonChange(mediaQuery);

  mediaQuery.addEventListener('change', handleInvalidWordChange);
  mediaQuery.addEventListener('change', handleOkButtonChange);
}


// ! RESET GAME

function resetGame() {
  guesses = 6;
  currentRowIndex = 0;
  inputBox.setAttribute('maxlength', gameMode === 'easy' ? 5:7)

  let randomWordIndex = Math.floor(Math.random() * (gameMode === 'easy' ? easyWordArray.length : hardWordArray.length));
  CORRECT_GUESS = gameMode === 'easy' ? easyWordArray[randomWordIndex] : hardWordArray[randomWordIndex];
  wordCellCount = gameMode === 'easy' ? 5 : 7;

  correctArray = CORRECT_GUESS.split("");
  console.log(CORRECT_GUESS)

  createGrid();
  
  guessesElement.innerText = guesses;
  document.querySelector("input").value = "";
  
  const gameOverMessages = document.querySelectorAll('#gameOverContainer, div[style*="position: absolute"]');
    gameOverMessages.forEach(message => message.remove());
  
  const winMessage = document.getElementById('winGameMessage');
    if (winMessage) winMessage.remove();
  
  submitButton.addEventListener('click', checkForWinner);
}

document.addEventListener('DOMContentLoaded', function() {
  initWinCounter();
});

function initWinCounter() {
  let wins = localStorage.getItem('wordleWins');
  console.log('Initial wins from localStorage:', wins);
  wins = wins ? parseInt(wins) : 0;
  updateWinDisplay(wins);
}

function incrementWins() {
  let wins = localStorage.getItem('wordleWins');
  console.log('Wins before increment:', wins);
  wins = wins ? parseInt(wins) : 0;
  wins++;
  localStorage.setItem('wordleWins', wins);
  console.log('Wins after increment:', wins);
  updateWinDisplay(wins);
}

function eraseWins() {
  let wins = localStorage.getItem('wordleWins');
  wins = wins ? parseInt(wins) : 0;
  wins = 0;
  localStorage.setItem('wordleWins', wins);
  updateWinDisplay(wins);
}

function updateWinDisplay(wins) {
  document.getElementById('win-count').textContent = wins;
}

function displayRules() {
  displayingRules = true;
  const rulesBox = document.createElement('div');

  rulesBox.id = 'rulesBox';
  rulesBox.style.position = 'absolute';
  rulesBox.style.top = '50%';
  rulesBox.style.left = '50%';
  rulesBox.style.transform = 'translate(-50%, -50%)';
  rulesBox.style.backgroundColor = 'rgb(255, 243, 233)';
  rulesBox.style.fontSize = '28px';
  rulesBox.style.padding = '20px';
  rulesBox.style.fontWeight = 'bold';
  rulesBox.style.textAlign = 'center';
  rulesBox.style.border = '1px solid black';
  rulesBox.style.color = 'rgb(0, 0, 0,)'


  const rulesMessage = document.createElement('div');
  rulesMessage.innerHTML = 'Enter a 5 or 7 letter word based on the selected mode. <br> Green = Correct letter and placement, <br> Yellow = Correct letter, wrong placement, <br> Red = Wrong letter!';
  rulesMessage.style.marginBottom = '10px'; 
  rulesBox.appendChild(rulesMessage);

  function handleRuleBoxChange(event) {
    if (event.matches) {
      rulesBox.style.fontSize = '18px';  
      rulesBox.style.padding = '15px';  
    } else {
      // ! Screen width is greater than 600px
      rulesBox.style.fontSize = '28px';  
      rulesBox.style.padding = '20px';   
    }
  }
  
  handleRuleBoxChange(mediaQuery);

  mediaQuery.addEventListener('change', handleRuleBoxChange);
  document.body.appendChild(rulesBox);
}

function hideRules() {
  const rulesBox = document.getElementById('rulesBox');
  if (rulesBox) {
    document.body.removeChild(rulesBox);
  }
}

function displayPhoneRules() {
  if (displayingRules === false) {
    displayRules();
  }
}

function hidePhoneRules() {
    hideRules();
}

rules.addEventListener('mouseover', displayRules);
rules.addEventListener('mouseout', hideRules);
rules.addEventListener('touchend', displayPhoneRules);
window.addEventListener('touchend', hidePhoneRules);



submitButton.addEventListener('click', function(event) {
  if (event) {
    event.preventDefault();
    checkForWinner();
    inputBox.value = '';
  }
});

inputBox.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    checkForWinner();
    inputBox.value = '';
  }
});

localStorage.setItem('wordleWins', wins);


// ! EASY AND HARD MODE 

document.querySelector('.easy-mode-button').addEventListener('click', () => {
  gameMode = 'easy';
  resetGame();
});

document.querySelector('.hard-mode-button').addEventListener('click', () => {
  gameMode = 'hard';
  resetGame();
});

