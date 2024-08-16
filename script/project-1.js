console.log("java script is working")
const wordGrid = document.querySelector(".grid");
const wordCellCount = 5;
const gridRows = [];
const CORRECT_GUESS = "ATONE";
const correctArray = CORRECT_GUESS.split("");
const submitButton = document.querySelector("#submit-button")
const guessesElement = document.querySelector("#guesses")
let guesses = 6;
let currentRowIndex = 0;

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
  console.log(row)
}
for (let i = 0; i < 6; i++) {
  createRow(i);
}

function checkForWinner() {
  const GUESS = document.querySelector("input").value.toUpperCase();
  if (GUESS.length !== 5) {
    alert('Please enter a 5-letter word.');
    return;
  }

  const guessArray = GUESS.split("");

  for (let i = 0; i < CORRECT_GUESS.length; i++) {
    if (correctArray[i] === guessArray[i]) {
      resultsArray.push(guessArray[i]);
      console.log(resultsArray);
      colorHandling();
    } else {
      resultsArray.push(false);
      incorrectLetters.push(guessArray[i]);
      colorHandling();
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

  const correctButWrongPlace = wrongLettersFromCorrectArray.map((letter) => {
      if (incorrectLetters.includes(letter)) {
        return letter;
      }
    })
    .filter((i) => i);
    colorHandling();
    currentRowIndex++;

  console.log({
    wrongLettersFromCorrectArray,
    incorrectLetters,
    correctButWrongPlace,
  });
}

function colorHandling() {
  gridRows[currentRowIndex].forEach(cell => {
    const index = cell.getAttribute('data-index');
    
    if (correctArray[index]) {
        cell.classList.add('correct');
    } else if (correctButWrongPlace[index]) {
        cell.classList.add('misplaced');
    } else {
        cell.classList.add('incorrect');
    }
  });
};


function endGame() {
  gameActive = false;
  const gameOverMessage = document.createElement('div');

  gameOverMessage.innerHTML = 'Game Over!';
  gameOverMessage.style.position = 'absolute';
  gameOverMessage.style.top = '50%';
  gameOverMessage.style.left = '50%';
  gameOverMessage.style.transform = 'translate(-50%, -50%)';
  gameOverMessage.style.backgroundColor = 'orange';
  gameOverMessage.style.fontSize = '48px';
  gameOverMessage.style.padding = '20px';
  gameOverMessage.style.fontWeight = 'bold'; 
  document.body.appendChild(gameOverMessage);
  submitButton.removeEventListener('click', checkForWinner)
}

submitButton.addEventListener('click', checkForWinner)












const possibleWord =  [
  'which', 'there', 'their', 'about', 'would', 'these', 'other', 'words', 'could', 'write',
  'first', 'water', 'after', 'where', 'right', 'think', 'three', 'years', 'place', 'sound',
  'great', 'again', 'still', 'every', 'small', 'found', 'those', 'never', 'under', 'might',
  'while', 'house', 'world', 'below', 'asked', 'going', 'large', 'until', 'along', 'shall',
  'being', 'often', 'earth', 'began', 'since', 'study', 'night', 'light', 'above', 'paper',
  'parts', 'young', 'story', 'point', 'times', 'heard', 'whole', 'white', 'given', 'means',
  'music', 'miles', 'thing', 'today', 'later', 'using', 'money', 'lines', 'order', 'group',
  'among', 'learn', 'known', 'space', 'table', 'early', 'trees', 'short', 'hands', 'state',
  'black', 'shown', 'stood', 'front', 'voice', 'kinds', 'makes', 'comes', 'close', 'power',
  'lived', 'vowel', 'taken', 'built', 'heart', 'ready', 'quite', 'class', 'bring', 'round',
  'horse', 'shows', 'piece', 'green', 'stand', 'birds', 'start', 'river', 'tried', 'least',
  'field', 'whose', 'girls', 'leave', 'added', 'color', 'third', 'hours', 'moved', 'plant',
  'doing', 'names', 'forms', 'heavy', 'ideas', 'cried', 'check', 'floor', 'begin', 'woman',
  'alone', 'plane', 'spell', 'watch', 'carry', 'wrote', 'clear', 'named', 'books', 'child',
  'glass', 'human', 'takes', 'party', 'build', 'seems', 'blood', 'sides', 'seven', 'mouth',
  'solve', 'north', 'value', 'death', 'maybe', 'happy', 'tells', 'gives', 'looks', 'shape',
  'lives', 'steps', 'areas', 'sense', 'speak', 'force', 'ocean', 'speed', 'women', 'metal',
  'south', 'grass', 'scale', 'cells', 'lower', 'sleep', 'wrong', 'pages', 'ships', 'needs',
  'rocks', 'eight', 'major', 'level', 'total', 'ahead', 'reach', 'stars', 'store', 'sight',
  'terms', 'catch', 'works', 'board', 'cover', 'songs', 'equal', 'stone', 'waves', 'guess',
  'dance', 'spoke', 'break', 'cause', 'radio', 'weeks', 'lands', 'basic', 'liked', 'trade',
  'fresh', 'final', 'fight', 'meant', 'drive', 'spent', 'local', 'waxes', 'knows', 'train',
  'bread', 'homes', 'teeth', 'coast', 'thick', 'brown', 'clean', 'quiet', 'sugar', 'facts',
  'steel', 'forth', 'rules', 'notes', 'units', 'peace', 'month', 'verbs', 'seeds', 'helps',
  'sharp', 'visit', 'woods', 'chief', 'walls', 'cross', 'wings', 'grown', 'cases', 'foods',
  'crops', 'fruit', 'stick', 'wants', 'stage', 'sheep', 'nouns', 'plain', 'drink', 'bones',
  'apart', 'turns', 'moves', 'touch', 'angle', 'based', 'range', 'marks', 'tired', 'older',
  'farms', 'spend', 'shoes', 'goods', 'chair', 'twice', 'cents', 'empty', 'alike', 'style',
  'broke', 'pairs', 'count', 'enjoy', 'score', 'shore', 'roots', 'paint', 'heads', 'shook',
  'serve', 'angry', 'crowd', 'wheel', 'quick', 'dress', 'share', 'alive', 'noise', 'solid',
  'cloth', 'signs', 'hills', 'types', 'drawn', 'worth', 'truck', 'piano', 'upper', 'loved',
  'usual', 'faces', 'drove', 'cabin', 'boats', 'towns', 'proud', 'court', 'model', 'prime',
  'fifty', 'plans', 'yards', 'prove', 'tools', 'price', 'sheet', 'smell', 'boxes', 'raise',
  'match', 'truth', 'roads', 'threw', 'enemy', 'lunch', 'chart', 'scene', 'graph', 'doubt',
  'guide', 'winds', 'block', 'grain', 'smoke', 'mixed', 'games', 'wagon', 'sweet', 'topic',
  'extra', 'plate', 'title', 'knife', 'fence', 'falls', 'cloud', 'wheat', 'plays', 'enter',
  'broad', 'steam', 'atoms', 'press', 'lying', 'basis', 'clock', 'taste', 'grows', 'thank',
  'storm', 'agree', 'brain', 'track', 'smile', 'funny', 'beach', 'stock', 'hurry', 'saved',
  'sorry', 'giant', 'trail', 'offer', 'ought', 'rough', 'daily', 'avoid', 'keeps', 'throw',
  'allow', 'cream', 'laugh', 'edges', 'teach', 'frame', 'bells', 'dream', 'magic', 'occur',
  'ended', 'chord', 'false', 'skill', 'holes', 'dozen', 'brave', 'apple', 'climb', 'outer',
  'pitch', 'ruler', 'holds', 'fixed', 'costs', 'calls', 'blank', 'staff', 'labor', 'eaten',
  'youth', 'tones', 'honor', 'globe', 'gases', 'doors', 'poles', 'loose', 'apply', 'tears',
  'exact', 'brush', 'chest', 'layer', 'whale', 'minor', 'faith', 'tests', 'judge', 'items',
  'worry', 'waste', 'hoped', 'strip', 'begun', 'aside', 'lakes', 'bound', 'depth', 'candy',
  'event', 'worse', 'aware', 'shell', 'rooms', 'ranch', 'image', 'snake', 'aloud', 'dried',
  'likes', 'motor', 'pound', 'knees', 'refer', 'fully', 'chain', 'shirt', 'flour', 'drops',
  'spite', 'orbit', 'banks', 'shoot', 'curve', 'tribe', 'tight', 'blind', 'slept', 'shade',
  'claim', 'flies', 'theme', 'queen', 'fifth', 'union', 'hence', 'straw', 'entry', 'issue',
  'birth', 'feels', 'anger', 'brief', 'rhyme', 'glory', 'guard', 'flows', 'flesh', 'owned',
  'trick', 'yours', 'sizes', 'noted', 'width', 'burst', 'route', 'lungs', 'uncle', 'bears',
  'royal', 'kings', 'forty', 'trial', 'cards', 'brass', 'opera', 'chose', 'owner', 'vapor',
  'beats', 'mouse', 'tough', 'wires', 'meter', 'tower', 'finds', 'inner', 'stuck', 'arrow',
  'poems', 'label', 'swing', 'solar', 'truly', 'tense', 'beans', 'split', 'rises', 'weigh',
  'hotel', 'stems', 'pride', 'swung', 'grade', 'digit', 'badly', 'boots', 'pilot', 'sales',
  'swept', 'lucky', 'prize', 'stove', 'tubes', 'acres', 'wound', 'steep', 'slide', 'trunk',
  'error', 'porch', 'slave', 'exist', 'faced', 'mines', 'marry', 'juice', 'raced', 'waved',
  'goose', 'trust', 'fewer', 'favor', 'mills', 'views', 'joint', 'eager', 'spots', 'blend',
  'rings', 'adult', 'index', 'nails', 'horns', 'balls', 'flame', 'rates', 'drill', 'trace',
  'skins', 'waxed', 'seats', 'stuff', 'ratio', 'minds', 'dirty', 'silly', 'coins', 'hello',
  'trips', 'leads', 'rifle', 'hopes', 'bases', 'shine', 'bench', 'moral', 'fires', 'meals',
  'shake', 'shops', 'cycle', 'movie', 'slope', 'canoe', 'teams', 'folks', 'fired', 'bands',
  'thumb', 'shout', 'canal', 'habit', 'reply', 'ruled', 'fever', 'crust', 'shelf', 'walks',
  'midst', 'crack', 'print', 'tales', 'coach', 'stiff', 'flood', 'verse', 'awake', 'rocky',
  'march', 'fault', 'swift', 'faint', 'civil', 'ghost', 'feast', 'blade', 'limit', 'germs',
  'reads', 'ducks', 'dairy', 'worst', 'gifts', 'lists', 'stops', 'rapid', 'brick', 'claws',
  'beads', 'beast', 'skirt', 'cakes', 'lions', 'frogs', 'tries', 'nerve', 'grand', 'armed',
  'treat', 'honey', 'moist', 'legal', 'penny', 'crown', 'shock', 'taxes', 'sixty', 'altar',
  'pulls', 'sport', 'drums', 'talks', 'dying', 'dates', 'drank', 'blows', 'lever', 'wages',
  'proof', 'drugs', 'tanks', 'sings', 'tails', 'pause', 'herds', 'arose', 'hated', 'clues',
  'novel', 'shame', 'burnt', 'races', 'flash', 'weary', 'heels', 'token', 'coats', 'spare',
  'shiny', 'alarm', 'dimes', 'sixth', 'clerk', 'mercy', 'sunny', 'guest', 'float', 'shone',
  'pipes', 'worms', 'bills', 'sweat', 'suits', 'smart', 'upset', 'rains', 'sandy', 'rainy',
  'parks', 'sadly', 'fancy', 'rider', 'unity', 'bunch', 'rolls', 'crash', 'craft', 'newly',
  'gates', 'hatch', 'paths', 'funds', 'wider', 'grace', 'grave', 'tides', 'admit', 'shift',
  'sails', 'pupil', 'tiger', 'angel', 'cruel', 'agent', 'drama', 'urged', 'patch', 'nests',
  'vital', 'sword', 'blame', 'weeds', 'screw', 'vocal', 'bacon', 'chalk', 'cargo', 'crazy',
  'acted', 'goats', 'arise', 'witch', 'loves', 'queer', 'dwell', 'backs', 'ropes', 'shots',
  'merry', 'phone', 'cheek', 'peaks', 'ideal', 'beard', 'eagle', 'creek', 'cries', 'ashes',
  'stall', 'yield', 'mayor', 'opens', 'input', 'fleet', 'tooth', 'cubic', 'wives', 'burns',
  'poets', 'apron', 'spear', 'organ', 'cliff', 'stamp', 'paste', 'rural', 'baked', 'chase',
  'slice', 'slant', 'knock', 'noisy', 'sorts', 'stays', 'wiped', 'blown', 'piled', 'clubs',
  'cheer', 'widow', 'twist', 'tenth', 'hides', 'comma', 'sweep', 'spoon', 'stern', 'crept',
  'maple', 'deeds', 'rides', 'muddy', 'crime', 'jelly', 'ridge', 'drift', 'dusty', 'devil',
  'tempo', 'humor', 'sends', 'steal', 'tents', 'waist', 'roses', 'reign', 'noble', 'cheap',
  'dense', 'linen', 'geese', 'woven', 'posts', 'hired', 'wrath', 'salad', 'bowed', 'tires',
  'shark', 'belts', 'grasp', 'blast', 'polar', 'fungi', 'tends', 'pearl', 'loads', 'jokes',
  'veins', 'frost', 'hears', 'loses', 'hosts', 'diver', 'phase', 'toads', 'alert', 'tasks',
  'seams', 'coral', 'focus', 'naked', 'puppy', 'jumps', 'spoil', 'quart', 'macro', 'fears',
  'flung', 'spark', 'vivid', 'brook', 'steer', 'spray', 'decay', 'ports', 'socks', 'urban',
  'goals', 'grant', 'minus', 'films', 'tunes', 'shaft', 'firms', 'skies', 'bride', 'wreck',
  'flock', 'stare', 'hobby', 'bonds', 'dared', 'faded', 'thief', 'crude', 'pants', 'flute',
  'votes', 'tonal', 'radar', 'wells', 'skull', 'hairs', 'argue', 'wears', 'dolls', 'voted',
  'caves', 'cared', 'broom', 'scent', 'panel', 'fairy', 'olive', 'bends', 'prism', 'lamps',
  'cable', 'peach', 'ruins', 'rally', 'schwa', 'lambs', 'sells', 'cools', 'draft', 'charm',
  'limbs', 'brake', 'gazed', 'cubes', 'delay', 'beams', 'fetch', 'ranks', 'array', 'harsh',
  'camel', 'vines', 'picks', 'naval', 'purse', 'rigid', 'crawl', 'toast', 'soils', 'sauce',
  'basin', 'ponds', 'twins', 'wrist', 'fluid', 'pools', 'brand', 'stalk', 'robot', 'reeds',
  'hoofs', 'buses', 'sheer', 'grief', 'bloom', 'dwelt', 'melts', 'risen', 'flags', 'knelt',
  'fiber', 'roofs', 'freed', 'armor', 'piles', 'aimed', 'algae', 'twigs', 'lemon', 'atone'
];
