# Will's Wild Words - Wordle Game Project

## Introduction
Will's Wild Words is a Wordle-inspired word guessing game developed as a project for General Assembly. Wordle is a popular word game that gained immense popularity during the COVID-19 lockdowns. This project aims to recreate the engaging gameplay of Wordle while adding unique features and a personal touch.

## Technologies Used
- HTML
- CSS
- JavaScript

## Features
- Random word selection from a curated list
- Two game modes: Easy (5-letter words) and Hard (7-letter words)
- Win streak counter
- Invalid word detection
- Responsive design for various screen sizes
- Audio feedback for game actions
- Animated color transitions for guess feedback

## Installation and Setup
1. Clone the repository: `git clone [repository-url]`
2. Navigate to the project directory: `cd wills-wild-words`
3. Open `index.html` in your preferred web browser

![image of game](./images/SSH%201.png)

## Rules of the game
---

Here are the rules of the game:

```js
rulesMessage.innerHTML = 'Enter a 5 or 7 letter word based on the selected mode. <br> Green = Correct letter and placement, <br> Yellow = Correct letter, wrong placement, <br> Red = Wrong letter!';
```

I input the rules via JavaScript, creating a new div and placing the text in the div. I made it appear on screen by putting a hover event listner on the div.

### Basic description
---

The game uses functions to generate a random word from an external word list using an array of words (picking a randomindex using Math.random). These words are filed in a seperate folder and I used 'import' to bring the words across. <br>
The player has 6 chances to enter a word into the submission box to guess the chosen word. 

## createRow and createGrid functions
---

First things first, the createRow and createGrid functions work to create the game that's on the page.

```js
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

  for (let i = 0; i < 6; i++) {
      createRow();
  }
}

createGrid();

```

I started with this function creating a whole grid of 5 x 6 cells, which eventually turned out to be a detriment to the colour aplication. <br>

So I created a function that makes a singular row and then loop through to create 6 of them. This gave them the individuality I needed to apply the colours. 



## checkForWinner function
---

This function is the main point of contact to decide on whether the word input by the user was correct. 

Here's the code and how it works:
```js
function checkForWinner() {
  const GUESS = document.querySelector("input").value.trim().toUpperCase();
  const validWordArray = (gameMode === 'easy' ? easyWordArray : hardWordArray).map(word => word.trim().toUpperCase());
    if (!validWordArray.includes(GUESS)) {
        showInvalidWordMessage();
        return;
    }

  enterAudio.play();
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
```

The user submitted word (GUESS) gets compared to the word randomly selected by the program (CORRECT_GUESS). <br>

The first port of call is the validiity of the word. It will go through the possible words and return whether that word is valid and then either continue down the page or return to the top and display the invalid word pop-up. <br>

Once the word has been verified, to get the program to compare the individual letters and be able to apply the 'Correct Place' or 'Correct Letter Wrong Place', I needed to split the GUESS and the CORRECT_GUESS into letters using .split. <br>

Once the word has been split, I create a seperate array of cells that line up with the game cells in the grid. which the letters will be applied to after verifying. I start this by applying 'incorrect' to all of the cells in the row and then applying whether it was correct or paritally correct later on. <br>

I then have a 'for' loop looping through the cells of the created array to apply the information of whether you got it correct or partially correct. The application of 'null' meant that if there was a singular letter in a word but you had guessed that letter twice in your guess, it wouldn't show the letter twice and mislead the player. <br>

I then call the colourHandling function, this applies the colours to the cells of the game. <br>

The win/loss conditions then follow. If the guess is exactly the same as the chosen word, the player wins! If the guesses reaches 0, the player loses!


## colourHandling function
---

```js
function colourHandling(guessArray, resultsArray) {
gridRows[currentRowIndex].forEach((cell, index) => {
    cell.innerText = guessArray[index];
    cell.classList.add(resultsArray[index]);
});
}
```

The colourHandling became simple, because it applies a class to the cell based on in the letter's innerText and index. The innerText is also applied  <br>

Here are the CSS classes and then a picture of the applied colours:

```css
.grid div.correct {
  background-color: rgb(113, 255, 168);
  transition: background-color 0.6s ease;
}

.grid div.misplaced {
  background-color: rgb(255, 189, 97);
  transition: background-color 0.6s ease;
}

.grid div.incorrect {
  background-color: rgb(255, 115, 115);
  transition: background-color 0.6s ease;
}
```

![image of game](./images/SSH%203.png) <br>


## winGame, loseGame and resetGame
---

So with the winning, losing and resetting, I opted for the challenge of setting it all up in JavaScript again. For example: <br>

```js
function winGame() {
  winAudio.play()
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
```
Here is also a picture! <br>

![image of game](./images/SSH%204.png) <br>


So here we have the creation of the win screen! It will display after correctly guessing the word. To enable the game again I created a 'Play Again' button in CSS that stays hidden until either of the end-game function are called. <br>

## Challenges Faced
One of the main challenges was implementing the color-coding logic for correct and misplaced letters. This was solved by creating separate arrays for the guess and the correct word, and using a two-pass algorithm to first mark correct letters and then misplaced ones.

Another challenge was making the game responsive for different screen sizes. This was addressed by using media queries and flexible CSS units.

## Future Improvements
- Add a daily challenge mode
- Implement a leaderboard system
- Expand the word list
- Add difficulty levels with time constraints

## Acknowledgements
- Inspiration: The original Wordle game by Josh Wardle

## Author
Will Sexton - General Assembly Student

