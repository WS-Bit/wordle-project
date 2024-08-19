console.log("Hello world! Java script is working!")

const easyWordArray =  [
'WHICH', 'THERE', 'THEIR', 'ABOUT', 'WOULD', 'OTHER', 'COULD', 'WRITE',
'FIRST', 'WATER', 'AFTER', 'WHERE', 'RIGHT', 'THINK', 'YEARS', 'PLACE',
'SOUND', 'GREAT', 'AGAIN', 'STILL', 'EVERY', 'SMALL', 'FOUND', 'THOSE',
'NEVER', 'UNDER', 'MIGHT', 'WHILE', 'HOUSE', 'WORLD', 'BELOW', 'ASKED',
'GOING', 'LARGE', 'UNTIL', 'ALONG', 'SHALL', 'BEING', 'OFTEN', 'EARTH',
'BEGAN', 'SINCE', 'STUDY', 'NIGHT', 'LIGHT', 'ABOVE', 'PAPER', 'STORY',
'POINT', 'WHOLE', 'WHITE', 'GIVEN', 'MEANS', 'MUSIC', 'ORDER', 'GROUP',
'AMONG', 'LEARN', 'KNOWN', 'SPACE', 'TABLE', 'EARLY', 'SHORT', 'STATE',
'BLACK', 'SHOWN', 'STOOD', 'FRONT', 'VOICE', 'COMES', 'CLOSE', 'POWER',
'LIVED', 'VOWEL', 'TAKEN', 'BUILT', 'HEART', 'READY', 'QUITE', 'CLASS',
'BRING', 'ROUND', 'HORSE', 'PIECE', 'STAND', 'START', 'RIVER', 'TRIED',
'LEAST', 'FIELD', 'WHOSE', 'LEAVE', 'ADDED', 'COLOR', 'THIRD', 'MOVED',
'PLANE', 'SPELL', 'WATCH', 'CARRY', 'WROTE', 'CLEAR', 'NAMED', 'CHILD',
'GLASS', 'HUMAN', 'TAKES', 'PARTY', 'BUILD', 'SEEMS', 'BLOOD', 'SOLVE',
'NORTH', 'VALUE', 'DEATH', 'MAYBE', 'HAPPY', 'TELLS', 'GIVES', 'LOOKS',
'SENSE', 'SPEAK', 'FORCE', 'OCEAN', 'SPEED', 'METAL', 'SOUTH', 'GRASS',
'SCALE', 'LOWER', 'SLEEP', 'WRONG', 'NEEDS', 'EIGHT', 'MAJOR', 'LEVEL',
'TOTAL', 'AHEAD', 'REACH', 'STARS', 'STORE', 'SIGHT', 'CATCH', 'BOARD',
'COVER', 'EQUAL', 'STONE', 'GUESS', 'DANCE', 'BREAK', 'CAUSE', 'RADIO',
'BASIC', 'LIKED', 'TRADE', 'FRESH', 'FINAL', 'FIGHT', 'MEANT', 'DRIVE',
'SPENT', 'LOCAL', 'TRAIN', 'BREAD', 'COAST', 'THICK', 'BROWN', 'CLEAN',
'QUIET', 'SUGAR', 'FACTS', 'STEEL', 'FORTH', 'PEACE', 'MONTH', 'NOTES',
'HELPS', 'SHARP', 'VISIT', 'CHIEF', 'CROSS', 'WINGS', 'GROWN', 'FRUIT',
'STICK', 'WANTS', 'STAGE', 'SHEEP', 'PLAIN', 'DRINK', 'APART', 'TOUCH',
'ANGLE', 'BASED', 'RANGE', 'MARKS', 'TIRED', 'OLDER', 'SHOES', 'CHAIR',
'TWICE', 'CENTS', 'EMPTY', 'ALIKE', 'STYLE', 'BROKE', 'COUNT', 'ENJOY',
'SCORE', 'SHORE', 'ROOTS', 'PAINT', 'SERVE', 'ANGRY', 'CROWD', 'WHEEL',
'QUICK', 'DRESS', 'SHARE', 'ALIVE', 'NOISE', 'SOLID', 'CLOTH', 'SIGNS',
'SHOOK', 'DRAWN', 'WORTH', 'TRUCK', 'PIANO', 'UPPER', 'LOVED', 'USUAL',
'FACES', 'CABIN', 'PROUD', 'COURT', 'MODEL', 'PRIME', 'FIFTY', 'PLANS',
'PROVE', 'TOOLS', 'PRICE', 'SHEET', 'SMELL', 'RAISE', 'MATCH', 'TRUTH',
'THREW', 'ENEMY', 'LUNCH', 'CHART', 'SCENE', 'GRAPH', 'DOUBT', 'GUIDE',
'WINDS', 'BLOCK', 'GRAIN', 'SMOKE', 'MIXED', 'GAMES', 'WAGON', 'SWEET',
'TOPIC', 'EXTRA', 'PLATE', 'TITLE', 'KNIFE', 'FENCE', 'CLOUD', 'WHEAT',
'ENTER', 'BROAD', 'STEAM', 'PRESS', 'LYING', 'CLOCK', 'TASTE', 'THANK',
'STORM', 'AGREE', 'BRAIN', 'TRACK', 'SMILE', 'FUNNY', 'BEACH', 'STOCK',
'HURRY', 'SAVED', 'SORRY', 'GIANT', 'TRAIL', 'OFFER', 'OUGHT', 'ROUGH',
'DAILY', 'AVOID', 'KEEPS', 'THROW', 'ALLOW', 'CREAM', 'LAUGH', 'TEACH',
'FRAME', 'BELLS', 'DREAM', 'MAGIC', 'OCCUR', 'ENDED', 'CHORD', 'FALSE',
'SKILL', 'HOLES', 'DOZEN', 'BRAVE', 'APPLE', 'CLIMB', 'OUTER', 'PITCH',
'RULER', 'HOLDS', 'FIXED', 'BLANK', 'STAFF', 'LABOR', 'EATEN', 'YOUTH',
'TOKEN', 'CEASE', 'BRUSH', 'CHEST', 'LAYER', 'WHALE', 'MINOR', 'FAITH',
'TESTS', 'JUDGE', 'ITEMS', 'WORRY', 'WASTE', 'HOPED', 'STRIP', 'BOUND',
'DEPTH', 'CANDY', 'EVENT', 'WORSE', 'AWARE', 'SHELL', 'RANCH', 'IMAGE',
'SNAKE', 'ALOUD', 'DRIED', 'MOTOR', 'PUPPY', 'CHAIN', 'SHIRT', 'FLOUR',
'DROPS', 'SPITE', 'ORBIT', 'BANKS', 'SHOOT', 'CURVE', 'TRIBE', 'TIGHT',
'BLIND', 'SLEPT', 'SHADE', 'CLAIM', 'FLIES', 'THEME', 'QUEEN', 'FIFTH',
'UNION', 'HENCE', 'STRAW', 'ENTRY', 'ISSUE', 'BIRTH', 'FEELS', 'ANGER',
'BRIEF', 'RHYME', 'GLORY', 'GUARD', 'FLOWS', 'FLESH', 'OWNED', 'TRICK',
'NOTED', 'WIDTH', 'BURST', 'ROUTE', 'LUNGS', 'UNCLE', 'ROYAL', 'TRIAL',
'CARDS', 'BRASS', 'OPERA', 'CHOSE', 'OWNER', 'VAPOR', 'BEATS', 'MOUSE',
'TOUGH', 'WIRES', 'METER', 'TOWER', 'FINDS', 'INNER', 'STUCK', 'ARROW',
'LABEL', 'SWING', 'SOLAR', 'TRULY', 'TENSE', 'WEIGH', 'HOTEL', 'STEMS',
'PRIDE', 'GRADE', 'DIGIT', 'BADLY', 'BOOTS', 'PILOT', 'SALES', 'SWEPT',
'LUCKY', 'PRIZE', 'STOVE', 'TUBES', 'WOUND', 'STEEP', 'SLIDE', 'TRUNK',
'ERROR', 'PORCH', 'SLAVE', 'EXIST', 'FACED', 'MARRY', 'JUICE', 'RACED',
'WAVED', 'GOOSE', 'TRUST', 'FEWER', 'FAVOR', 'MILLS', 'VIEWS', 'JOINT',
'EAGER', 'SPOTS', 'BLEND', 'RINGS', 'ADULT', 'INDEX', 'NAILS', 'HORNS',
'BALLS', 'FLAME', 'RATES', 'DRILL', 'TRACE', 'SKINS', 'WAXED', 'HELLO',
'LEADS', 'RIFLE', 'HOPES', 'SHINE', 'BENCH', 'MORAL', 'FIRES', 'MEALS',
'SHAKE', 'SHOPS', 'CYCLE', 'MOVIE', 'SLOPE', 'CANOE', 'FIRED', 'THUMB',
'SHOUT', 'CANAL', 'HABIT', 'REPLY', 'RULED', 'FEVER', 'CRUST', 'SHELF',
'WALKS', 'MIDST', 'CRACK', 'PRINT', 'COACH', 'STIFF', 'FLOOD', 'VERSE',
'AWAKE', 'ROCKY', 'FAULT', 'SWIFT', 'FAINT', 'CIVIL', 'GHOST', 'FEAST',
'BLADE', 'LIMIT', 'GROAN', 'QUART', 'COINS', 'EIGHT', 'ACRES', 'BLAST',
'STOOL', 'COMIC', 'WOVEN', 'CHOKE', 'CHANT', 'WAGON', 'SHOWN', 'VOWEL',
'SHOCK', 'SHORE', 'LUNAR', 'ALTER', 'MINOR', 'SPILL', 'FAULT', 'SPOIL',
'FLARE', 'COLON', 'STOOL', 'LOOPS', 'SHADE', 'TOWNS', 'SKIRT', 'SHORE',
'SHEET', 'ALTAR', 'ALLEY', 'SLANT', 'FIBER', 'SLATE', 'MARCH', 'DROVE',
'SLEET', 'TREND', 'SHOWN', 'STUNG', 'GLOOM', 'MARRY', 'BIRDS', 'SLICE',
'SLOPE', 'CRASH', 'VAPOR', 'DAISY', 'CRUEL', 'METER', 'SHINY', 'SHORE',
'SURGE', 'FLAME', 'SHORE', 'SKIER', 'SHIRT', 'CHOKE', 'PLATE', 'SCOOP',
'CHASE', 'CRASH', 'CROSS', 'TIGHT', 'STEER', 'STERN', 'SKILL', 'STEEL',
'STEER', 'SPILL', 'SHIRT', 'SHARE', 'SHADE', 'STAIN', 'SHEET', 'SKILL',
'SLEET', 'STEEL', 'STIFF', 'STILL', 'SPICE', 'STEAM', 'STORM', 'STOUT',
'SWEET', 'TREND', 'THROB', 'TREAT', 'THROB', 'THRUM', 'THUMB', 'THORN',
'TREND', 'TRIAL', 'TRICK', 'TROOP', 'TREAD', 'TROUT', 'TRIAL', 'TROUT',
'TWEAK', 'TWIST', 'TUMOR', 'TURBO', 'TWANG', 'TWINE', 'TWIRL', 'TWEET',
'TYRANT', 'TYPIC', 'UNCLE', 'UNDER', 'UNITY', 'UNTIL', 'UPPER', 'UPSET',
'URBAN', 'USAGE', 'USEFUL', 'UTTER', 'VAGUE', 'VAULT', 'VENGE', 'VENOM',
'VERGE', 'VEXED', 'VICAR', 'VIGOR', 'VINTAGE', 'VIRUS', 'VISIT', 'VITAL',
'VOCAL', 'VOGUE', 'VOICE', 'VOWEL', 'WAGER', 'WALKS', 'WASTE', 'WATER',
'WEARY', 'WEAVE', 'WEDGE', 'WEIGH', 'WELLS', 'WHEAT', 'WHILE', 'WHISK',
'WHITE', 'WHOLE', 'WIDEN', 'WIDER', 'WIDTH', 'WILDLY', 'WINCE', 'WINDS',
'WISDOM', 'WITTY', 'WORRY', 'WOUND', 'WOVEN', 'WRACK', 'WRATH', 'WRONG',
'YACHT', 'YEARN', 'YEAST', 'YIELD', 'YOUNG', 'YOUTH', 'ZEBRA', 'ZESTY',
'SHINE', 'YOUTH', 'THORN', 'THRUM', 'HOARD', 'LIVER', 'TREND', 'HANDY',
'KINDY', 'RULER', 'SPEAR', 'SHONE', 'HORNY', 'PLANE', 'GAMED', 'MILER',
'ALLOW', 'FORMY', 'LEAPT', 'SHORT', 'BRISK', 'NAMER', 'SHOWY', 'ROAMS',
'FRONT', 'FACED', 'CHILL', 'SHORN', 'HORNY', 'BLOOM', 'SHOWY', 'GRATE',
'LEAPT', 'ERROR', 'DREAD', 'VOGUE', 'GIRLY', 'FLOOR', 'ROUGE', 'FORTE',
'STINT', 'RAVEN', 'WOMEN', 'STINT', 'GRAPE', 'HONED', 'CRIME', 'DRILL',
'YOUNG', 'STUMP', 'GRAVE'
];

const hardWordArray =  
[
  "ABILITY", "ABSENCE", "ACADEMY", "ACCOUNT", "ADVANCE", "ADVERSE", "ADVISER",
  "ADOPTED", "ADVISER", "ADVISED", "AMAZING", "ANALYZE", "ANCIENT", "ANXIETY",
  "APOLOGY", "APPLIED", "APPOINT", "APPROVE", "ARRANGE", "ARRIVAL", "ARTICLE",
  "ASSAULT", "ATTEMPT", "ATTRACT", "AVERAGE", "BALANCE", "BANKING", "BATTERY",
  "BEARING", "BEATING", "BELIEVE", "BENEATH", "BENEFIT", "BETWEEN", "BILLION",
  "BINDING", "BROTHER", "BROUGHT", "BURNING", "CABINET", "CAPITAL", "CAPTAIN",
  "CAPTURE", "CAREFUL", "CARRIER", "CAUTION", "CEILING", "CENTRAL", "CENTURY",
  "CERTAIN", "CHAMBER", "CHANNEL", "CHAPTER", "CHARITY", "CHEAPER", "CHICKEN",
  "CIRCUIT", "CLASSIC", "CLEANER", "CLIMATE", "CLOSING", "COLLECT", "COLLEGE",
  "COMBINE", "COMFORT", "COMMAND", "COMMENT", "COMPANY", "COMPETE", "COMPLEX",
  "COMPOSE", "CONCEPT", "CONCERN", "CONCERT", "CONDUCT", "CONFESS", "CONNECT",
  "CONSENT", "CONSIST", "CONSULT", "CONTACT", "CONTAIN", "CONTENT", "CONTEST",
  "CONTEXT", "CONTROL", "CONVERT", "COUNCIL", "COUNTER", "COUNTRY", "COURAGE",
  "COVERED", "CRUCIAL", "CURRENT", "CUTTING", "DEFENSE", "DEFICIT", "DELIVER",
  "DENSITY", "DEPOSIT", "DESKTOP", "DESTROY", "DEVELOP", "DIGITAL", "DISABLE",
  "DISPUTE", "DIVERSE", "DRAWING", "EDITION", "EDUCATE", "ELEMENT", "EMBRACE",
  "EMOTION", "ENHANCE", "EPISODE", "ETERNAL", "EVENING", "EXACTLY", "EXECUTE",
  "EXPENSE", "EXPLAIN", "EXPLOIT", "EXTREME", "FACTORY", "FANTASY", "FEATURE",
  "FEDERAL", "FINDING", "FOREIGN", "FOREVER", "FORTUNE", "FREEDOM", "FURTHER",
  "GALLERY", "GENERAL", "GENUINE", "GESTURE", "GREATER", "HARMONY", "HEALTHY",
  "HEARING", "HEAVILY", "HOLIDAY", "HORIZON", "HOUSING", "HOWEVER", "HUNDRED",
  "ILLEGAL", "ILLNESS", "IMAGINE", "IMPRESS", "IMPROVE", "INCLUDE", "INITIAL",
  "INQUIRE", "INSTALL", "INSTEAD", "INTENSE", "INVOLVE", "JOURNEY", "JUSTICE",
  "KITCHEN", "LANDING", "LARGELY", "LASTING", "LAWYERS", "LEADING", "LIBERAL",
  "LIBRARY", "LIMITED", "LISTING", "LITERAL", "LOGICAL", "LOYALTY", "MACHINE",
  "MANAGER", "MASSIVE", "MAXIMUM", "MEASURE", "MEDICAL", "MENTION", "MESSAGE",
  "MILLION", "MINERAL", "MINIMAL", "MINIMUM", "MISSING", "MISSION", "MIXTURE",
  "MONITOR", "MORNING", "NATURAL", "NEAREST", "NERVOUS", "NETWORK", "NEUTRAL",
  "NOTABLE", "NOTHING", "NOTIONS", "NUCLEAR", "OBVIOUS", "OFFICER", "ONGOING",
  "OPENING", "OPERATE", "OPINION", "OPPOSED", "ORGANIC", "OUTCOME", "OUTDOOR",
  "OUTSIDE", "OVERALL", "PACKAGE", "PAINTED", "PARTIAL", "PARTNER", "PASSAGE",
  "PATIENT", "PAYMENT", "PENALTY", "PERCENT", "PERFORM", "PICTURE", "PIONEER",
  "PLASTIC", "PLEASED", "POINTED", "POPULAR", "PORTION", "POVERTY",
  "PRECISE", "PREDICT", "PREMIER", "PREMIUM", "PREPARE", "PRESENT", "PREVENT",
  "PRIMARY", "PRIVACY", "PRIVATE", "PROBLEM", "PROCEED", "PROCESS", "PRODUCE",
  "PRODUCT", "PROFILE", "PROGRAM", "PROJECT", "PROMOTE", "PROTECT", "PROTEST",
  "PROVIDE", "PURPOSE", "PURSUIT", "QUALITY", "QUARTER", "QUICKLY", "QUIETLY",
  "RADICAL", "RAPIDLY", "REALITY", "REALIZE", "RECEIVE", "RECOVER", "REFLECT",
  "REFUGEE", "REGULAR", "RELATED", "RELEASE", "REMAINS", "REMOVAL", "REPLACE",
  "REPLIES", "REQUEST", "REQUIRE", "RESERVE", "RESPECT", "RESPOND", "RESTORE",
  "RETIRED", "REVENUE", "REVERSE", "ROUTINE", "RUNNING", "SCIENCE", "SECTION",
  "SEGMENT", "SERIOUS", "SERVICE", "SERVING", "SETTING", "SEVENTH", "SEVERAL",
  "SHORTLY", "SIMILAR", "SITTING", "SKILLED", "SOCIETY", "SOLDIER", "SPEAKER",
  "SPECIAL", "SPONSOR", "STADIUM", "STATION", "STORAGE", "STRETCH", "STUDENT",
  "STUDIED", "SUBJECT", "SUBSIDY", "SUCCEED", "SUCCESS", "SUGGEST", "SUPPORT",
  "SUPPOSE", "SUPREME", "SURFACE", "SURGERY", "SURPLUS", "SURVIVE", "SUSPECT",
  "SUSTAIN", "SYMPTOM", "TEACHER", "TELLING", "TENSION", "THEATRE", "THERAPY",
  "THOUGHT", "THROUGH", "TONIGHT", "TOTALLY", "TOURISM", "TRADING", "TRAFFIC",
  "TRIGGER", "TROPICAL", "TURNING", "TYPICAL", "UNCLEAR", "UNDERGO", "UPGRADE",
  "UTILITY", "VACCINE", "VARIETY", "VARIOUS", "VEHICLE", "VENTURE", "VERDICT",
  "VERSION", "VETERAN", "VICTORY", "VILLAGE", "VISIBLE", "WAITING", "WARNING",
  "WARRANT", "WEARING", "WEATHER", "WEBCAST", "WEDDING", "WEEKEND", "WELFARE",
  "WHISPER", "WILLING", "WINNING", "WITHOUT", "WITNESS", "WORKSHOP", "WRITERS",
  "WRITING", "WRITTEN", "YIELDED", "YOUNGER", "JOURNEY", "JUSTICE", "KINGDOM",
  "KITCHEN", "LACKING", "LANDING", "LAPTOPS", "LARGELY", "LASTING", "LAWYERS",
  "LEASING", "LEATHER", "LEAVING", "LEGALLY", "LIBERAL"
];

// ! CONSTS

const wordGrid = document.querySelector(".grid");
let wordCellCount = 5;
const gridRows = [];
const randomWordIndex = Math.floor(Math.random() * easyWordArray.length);
let CORRECT_GUESS = easyWordArray[randomWordIndex];
// console.log(CORRECT_GUESS);
let correctArray = CORRECT_GUESS.split("");

const submitButton = document.querySelector("#submit-button");
const inputBox = document.querySelector(".text-input");
const guessesElement = document.querySelector("#guesses");
const playAgainButton = document.getElementById('play-again');
const rules = document.querySelector(".rules");
const audio = document.querySelector("audio");
audio.volume = 0.25;

let guesses = 6;
let currentRowIndex = 0;
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
  const GUESS = document.querySelector("input").value.toUpperCase();

  const validWordArray = gameMode === 'easy' ? easyWordArray : hardWordArray;
    if (!validWordArray.includes(GUESS)) {
        alert('The word is not in the list of valid words.');
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
  winGameMessage.style.padding = '20px';
  winGameMessage.style.fontWeight = 'bold'; 
  winGameMessage.style.border = '1px solid black';
  document.body.appendChild(winGameMessage);
  submitButton.removeEventListener('click', checkForWinner)
  playAgainButton.style.display = 'block';
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
}

playAgainButton.addEventListener('click', () => {
  resetGame();
  playAgainButton.style.display = 'none';
});

// ! RESET GAME

function resetGame() {
  guesses = 6;
  currentRowIndex = 0;
  inputBox.setAttribute('maxlength', gameMode === 'easy' ? 5:7)

  let randomWordIndex = Math.floor(Math.random() * (gameMode === 'easy' ? easyWordArray.length : hardWordArray.length));
  CORRECT_GUESS = gameMode === 'easy' ? easyWordArray[randomWordIndex] : hardWordArray[randomWordIndex];
  wordCellCount = gameMode === 'easy' ? 5 : 7;

  correctArray = CORRECT_GUESS.split("");

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
  const rulesBox = document.createElement('div');

  rulesBox.id = 'rulesBox';
  rulesBox.style.position = 'absolute';
  rulesBox.style.top = '50%';
  rulesBox.style.left = '50%';
  rulesBox.style.transform = 'translate(-50%, -50%)';
  rulesBox.style.backgroundColor = 'rgb(250, 223, 200)';
  rulesBox.style.fontSize = '28px';
  rulesBox.style.padding = '20px';
  rulesBox.style.fontWeight = 'bold';
  rulesBox.style.textAlign = 'center';
  rulesBox.style.border = '1px solid black';
  rulesBox.style.color = 'rgb(138, 138, 138)'

  const rulesMessage = document.createElement('div');
  rulesMessage.innerHTML = 'Enter a 5 or 7 letter word based on the selected mode. <br> Green = Correct letter and placement, <br> Yellow = Correct letter, wrong placement, <br> Red = Wrong letter!';
  rulesMessage.style.marginBottom = '10px'; 
  rulesBox.appendChild(rulesMessage);
  document.body.appendChild(rulesBox);
}

function hideRules() {
  const rulesBox = document.getElementById('rulesBox');
  if (rulesBox) {
    document.body.removeChild(rulesBox);
  }
}

rules.addEventListener('mouseover', displayRules);
rules.addEventListener('mouseout', hideRules);

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

