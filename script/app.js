console.log("java script is working")
const wordArray =  [
'WHICH', 'THERE', 'THEIR', 'ABOUT', 'WOULD', 'THESE', 'OTHER', 'WORDS', 'COULD', 'WRITE',
'FIRST', 'WATER', 'AFTER', 'WHERE', 'RIGHT', 'THINK', 'THREE', 'YEARS', 'PLACE', 'SOUND',
'GREAT', 'AGAIN', 'STILL', 'EVERY', 'SMALL', 'FOUND', 'THOSE', 'NEVER', 'UNDER', 'MIGHT',
'WHILE', 'HOUSE', 'WORLD', 'BELOW', 'ASKED', 'GOING', 'LARGE', 'UNTIL', 'ALONG', 'SHALL',
'BEING', 'OFTEN', 'EARTH', 'BEGAN', 'SINCE', 'STUDY', 'NIGHT', 'LIGHT', 'ABOVE', 'PAPER',
'PARTS', 'YOUNG', 'STORY', 'POINT', 'TIMES', 'HEARD', 'WHOLE', 'WHITE', 'GIVEN', 'MEANS',
'MUSIC', 'MILES', 'THING', 'TODAY', 'LATER', 'USING', 'MONEY', 'LINES', 'ORDER', 'GROUP',
'AMONG', 'LEARN', 'KNOWN', 'SPACE', 'TABLE', 'EARLY', 'TREES', 'SHORT', 'HANDS', 'STATE',
'BLACK', 'SHOWN', 'STOOD', 'FRONT', 'VOICE', 'KINDS', 'MAKES', 'COMES', 'CLOSE', 'POWER',
'LIVED', 'VOWEL', 'TAKEN', 'BUILT', 'HEART', 'READY', 'QUITE', 'CLASS', 'BRING', 'ROUND',
'HORSE', 'SHOWS', 'PIECE', 'GREEN', 'STAND', 'BIRDS', 'START', 'RIVER', 'TRIED', 'LEAST',
'FIELD', 'WHOSE', 'GIRLS', 'LEAVE', 'ADDED', 'COLOR', 'THIRD', 'HOURS', 'MOVED', 'PLANT',
'DOING', 'NAMES', 'FORMS', 'HEAVY', 'IDEAS', 'CRIED', 'CHECK', 'FLOOR', 'BEGIN', 'WOMAN',
'ALONE', 'PLANE', 'SPELL', 'WATCH', 'CARRY', 'WROTE', 'CLEAR', 'NAMED', 'BOOKS', 'CHILD',
'GLASS', 'HUMAN', 'TAKES', 'PARTY', 'BUILD', 'SEEMS', 'BLOOD', 'SIDES', 'SEVEN', 'MOUTH',
'SOLVE', 'NORTH', 'VALUE', 'DEATH', 'MAYBE', 'HAPPY', 'TELLS', 'GIVES', 'LOOKS', 'SHAPE',
'LIVES', 'STEPS', 'AREAS', 'SENSE', 'SPEAK', 'FORCE', 'OCEAN', 'SPEED', 'WOMEN', 'METAL',
'SOUTH', 'GRASS', 'SCALE', 'CELLS', 'LOWER', 'SLEEP', 'WRONG', 'PAGES', 'SHIPS', 'NEEDS',
'ROCKS', 'EIGHT', 'MAJOR', 'LEVEL', 'TOTAL', 'AHEAD', 'REACH', 'STARS', 'STORE', 'SIGHT',
'TERMS', 'CATCH', 'WORKS', 'BOARD', 'COVER', 'SONGS', 'EQUAL', 'STONE', 'WAVES', 'GUESS',
'DANCE', 'SPOKE', 'BREAK', 'CAUSE', 'RADIO', 'WEEKS', 'LANDS', 'BASIC', 'LIKED', 'TRADE',
'FRESH', 'FINAL', 'FIGHT', 'MEANT', 'DRIVE', 'SPENT', 'LOCAL', 'WAXES', 'KNOWS', 'TRAIN',
'BREAD', 'HOMES', 'TEETH', 'COAST', 'THICK', 'BROWN', 'CLEAN', 'QUIET', 'SUGAR', 'FACTS',
'STEEL', 'FORTH', 'RULES', 'NOTES', 'UNITS', 'PEACE', 'MONTH', 'VERBS', 'SEEDS', 'HELPS',
'SHARP', 'VISIT', 'WOODS', 'CHIEF', 'WALLS', 'CROSS', 'WINGS', 'GROWN', 'CASES', 'FOODS',
'CROPS', 'FRUIT', 'STICK', 'WANTS', 'STAGE', 'SHEEP', 'NOUNS', 'PLAIN', 'DRINK', 'BONES',
'APART', 'TURNS', 'MOVES', 'TOUCH', 'ANGLE', 'BASED', 'RANGE', 'MARKS', 'TIRED', 'OLDER',
'FARMS', 'SPEND', 'SHOES', 'GOODS', 'CHAIR', 'TWICE', 'CENTS', 'EMPTY', 'ALIKE', 'STYLE',
'BROKE', 'PAIRS', 'COUNT', 'ENJOY', 'SCORE', 'SHORE', 'ROOTS', 'PAINT', 'HEADS', 'SHOOK',
'SERVE', 'ANGRY', 'CROWD', 'WHEEL', 'QUICK', 'DRESS', 'SHARE', 'ALIVE', 'NOISE', 'SOLID',
'CLOTH', 'SIGNS', 'HILLS', 'TYPES', 'DRAWN', 'WORTH', 'TRUCK', 'PIANO', 'UPPER', 'LOVED',
'USUAL', 'FACES', 'DROVE', 'CABIN', 'BOATS', 'TOWNS', 'PROUD', 'COURT', 'MODEL', 'PRIME',
'FIFTY', 'PLANS', 'YARDS', 'PROVE', 'TOOLS', 'PRICE', 'SHEET', 'SMELL', 'BOXES', 'RAISE',
'MATCH', 'TRUTH', 'ROADS', 'THREW', 'ENEMY', 'LUNCH', 'CHART', 'SCENE', 'GRAPH', 'DOUBT',
'GUIDE', 'WINDS', 'BLOCK', 'GRAIN', 'SMOKE', 'MIXED', 'GAMES', 'WAGON', 'SWEET', 'TOPIC',
'EXTRA', 'PLATE', 'TITLE', 'KNIFE', 'FENCE', 'FALLS', 'CLOUD', 'WHEAT', 'PLAYS', 'ENTER',
'BROAD', 'STEAM', 'ATOMS', 'PRESS', 'LYING', 'BASIS', 'CLOCK', 'TASTE', 'GROWS', 'THANK',
'STORM', 'AGREE', 'BRAIN', 'TRACK', 'SMILE', 'FUNNY', 'BEACH', 'STOCK', 'HURRY', 'SAVED',
'SORRY', 'GIANT', 'TRAIL', 'OFFER', 'OUGHT', 'ROUGH', 'DAILY', 'AVOID', 'KEEPS', 'THROW',
'ALLOW', 'CREAM', 'LAUGH', 'EDGES', 'TEACH', 'FRAME', 'BELLS', 'DREAM', 'MAGIC', 'OCCUR',
'ENDED', 'CHORD', 'FALSE', 'SKILL', 'HOLES', 'DOZEN', 'BRAVE', 'APPLE', 'CLIMB', 'OUTER',
'PITCH', 'RULER', 'HOLDS', 'FIXED', 'COSTS', 'CALLS', 'BLANK', 'STAFF', 'LABOR', 'EATEN',
'YOUTH', 'TONES', 'HONOR', 'GLOBE', 'GASES', 'DOORS', 'POLES', 'LOOSE', 'APPLY', 'TEARS',
'EXACT', 'BRUSH', 'CHEST', 'LAYER', 'WHALE', 'MINOR', 'FAITH', 'TESTS', 'JUDGE', 'ITEMS',
'WORRY', 'WASTE', 'HOPED', 'STRIP', 'BEGUN', 'ASIDE', 'LAKES', 'BOUND', 'DEPTH', 'CANDY',
'EVENT', 'WORSE', 'AWARE', 'SHELL', 'ROOMS', 'RANCH', 'IMAGE', 'SNAKE', 'ALOUD', 'DRIED',
'LIKES', 'MOTOR', 'POUND', 'KNEES', 'REFER', 'FULLY', 'CHAIN', 'SHIRT', 'FLOUR', 'DROPS',
'SPITE', 'ORBIT', 'BANKS', 'SHOOT', 'CURVE', 'TRIBE', 'TIGHT', 'BLIND', 'SLEPT', 'SHADE',
'CLAIM', 'FLIES', 'THEME', 'QUEEN', 'FIFTH', 'UNION', 'HENCE', 'STRAW', 'ENTRY', 'ISSUE',
'BIRTH', 'FEELS', 'ANGER', 'BRIEF', 'RHYME', 'GLORY', 'GUARD', 'FLOWS', 'FLESH', 'OWNED',
'TRICK', 'YOURS', 'SIZES', 'NOTED', 'WIDTH', 'BURST', 'ROUTE', 'LUNGS', 'UNCLE', 'BEARS',
'ROYAL', 'KINGS', 'FORTY', 'TRIAL', 'CARDS', 'BRASS', 'OPERA', 'CHOSE', 'OWNER', 'VAPOR',
'BEATS', 'MOUSE', 'TOUGH', 'WIRES', 'METER', 'TOWER', 'FINDS', 'INNER', 'STUCK', 'ARROW',
'POEMS', 'LABEL', 'SWING', 'SOLAR', 'TRULY', 'TENSE', 'BEANS', 'SPLIT', 'RISES', 'WEIGH',
'HOTEL', 'STEMS', 'PRIDE', 'SWUNG', 'GRADE', 'DIGIT', 'BADLY', 'BOOTS', 'PILOT', 'SALES',
'SWEPT', 'LUCKY', 'PRIZE', 'STOVE', 'TUBES', 'ACRES', 'WOUND', 'STEEP', 'SLIDE', 'TRUNK',
'ERROR', 'PORCH', 'SLAVE', 'EXIST', 'FACED', 'MINES', 'MARRY', 'JUICE', 'RACED', 'WAVED',
'GOOSE', 'TRUST', 'FEWER', 'FAVOR', 'MILLS', 'VIEWS', 'JOINT', 'EAGER', 'SPOTS', 'BLEND',
'RINGS', 'ADULT', 'INDEX', 'NAILS', 'HORNS', 'BALLS', 'FLAME', 'RATES', 'DRILL', 'TRACE',
'SKINS', 'WAXED', 'SEATS', 'STUFF', 'RATIO', 'MINDS', 'DIRTY', 'SILLY', 'COINS', 'HELLO',
'TRIPS', 'LEADS', 'RIFLE', 'HOPES', 'BASES', 'SHINE', 'BENCH', 'MORAL', 'FIRES', 'MEALS',
'SHAKE', 'SHOPS', 'CYCLE', 'MOVIE', 'SLOPE', 'CANOE', 'TEAMS', 'FOLKS', 'FIRED', 'BANDS',
'THUMB', 'SHOUT', 'CANAL', 'HABIT', 'REPLY', 'RULED', 'FEVER', 'CRUST', 'SHELF', 'WALKS',
'MIDST', 'CRACK', 'PRINT', 'TALES', 'COACH', 'STIFF', 'FLOOD', 'VERSE', 'AWAKE', 'ROCKY',
'MARCH', 'FAULT', 'SWIFT', 'FAINT', 'CIVIL', 'GHOST', 'FEAST', 'BLADE', 'LIMIT', 'GERMS',
'READS', 'DUCKS', 'DAIRY', 'WORST', 'GIFTS', 'LISTS', 'STOPS', 'RAPID', 'BRICK', 'CLAWS',
'BEADS', 'BEAST', 'SKIRT', 'CAKES', 'LIONS', 'FROGS', 'TRIES', 'NERVE', 'GRAND', 'ARMED',
'TREAT', 'HONEY', 'MOIST', 'LEGAL', 'PENNY', 'CROWN', 'SHOCK', 'TAXES', 'SIXTY', 'ALTAR',
'PULLS', 'SPORT', 'DRUMS', 'TALKS', 'DYING', 'DATES', 'DRANK', 'BLOWS', 'LEVER', 'WAGES',
'PROOF', 'DRUGS', 'TANKS', 'SINGS', 'TAILS', 'PAUSE', 'HERDS', 'AROSE', 'HATED', 'CLUES',
'NOVEL', 'SHAME', 'BURNT', 'RACES', 'FLASH', 'WEARY', 'HEELS', 'TOKEN', 'COATS', 'SPARE',
'SHINY', 'ALARM', 'DIMES', 'SIXTH', 'CLERK', 'MERCY', 'SUNNY', 'GUEST', 'FLOAT', 'SHONE',
'PIPES', 'WORMS', 'BILLS', 'SWEAT', 'SUITS', 'SMART', 'UPSET', 'RAINS', 'SANDY', 'RAINY',
'PARKS', 'SADLY', 'FANCY', 'RIDER', 'UNITY', 'BUNCH', 'ROLLS', 'CRASH', 'CRAFT', 'NEWLY',
'GATES', 'HATCH', 'PATHS', 'FUNDS', 'WIDER', 'GRACE', 'GRAVE', 'TIDES', 'ADMIT', 'SHIFT',
'SAILS', 'PUPIL', 'TIGER', 'ANGEL', 'CRUEL', 'AGENT', 'DRAMA', 'URGED', 'PATCH', 'NESTS',
'VITAL', 'SWORD', 'BLAME', 'WEEDS', 'SCREW', 'VOCAL', 'BACON', 'CHALK', 'CARGO', 'CRAZY',
'ACTED', 'GOATS', 'ARISE', 'WITCH', 'LOVES', 'QUEER', 'DWELL', 'BACKS', 'ROPES', 'SHOTS',
'MERRY', 'PHONE', 'CHEEK', 'PEAKS', 'IDEAL', 'BEARD', 'EAGLE', 'CREEK', 'CRIES', 'ASHES',
'STALL', 'YIELD', 'MAYOR', 'OPENS', 'INPUT', 'FLEET', 'TOOTH', 'CUBIC', 'WIVES', 'BURNS',
'POETS', 'APRON', 'SPEAR', 'ORGAN', 'CLIFF', 'STAMP', 'PASTE', 'RURAL', 'BAKED', 'CHASE',
'SLICE', 'SLANT', 'KNOCK', 'NOISY', 'SORTS', 'STAYS', 'WIPED', 'BLOWN', 'PILED', 'CLUBS',
'CHEER', 'WIDOW', 'TWIST', 'TENTH', 'HIDES', 'COMMA', 'SWEEP', 'SPOON', 'STERN', 'CREPT',
'MAPLE', 'DEEDS', 'RIDES', 'MUDDY', 'CRIME', 'JELLY', 'RIDGE', 'DRIFT', 'DUSTY', 'DEVIL',
'TEMPO', 'HUMOR', 'SENDS', 'STEAL', 'TENTS', 'WAIST', 'ROSES', 'REIGN', 'NOBLE', 'CHEAP',
'DENSE', 'LINEN', 'GEESE', 'WOVEN', 'POSTS', 'HIRED', 'WRATH', 'SALAD', 'BOWED', 'TIRES',
'SHARK', 'BELTS', 'GRASP', 'BLAST', 'POLAR', 'FUNGI', 'TENDS', 'PEARL', 'LOADS', 'JOKES',
'VEINS', 'FROST', 'HEARS', 'LOSES', 'HOSTS', 'DIVER', 'PHASE', 'TOADS', 'ALERT', 'TASKS',
'SEAMS', 'CORAL', 'FOCUS', 'NAKED', 'PUPPY', 'JUMPS', 'SPOIL', 'QUART', 'MACRO', 'FEARS',
'FLUNG', 'SPARK', 'VIVID', 'BROOK', 'STEER', 'SPRAY', 'DECAY', 'PORTS', 'SOCKS', 'URBAN',
'GOALS', 'GRANT', 'MINUS', 'FILMS', 'TUNES', 'SHAFT', 'FIRMS', 'SKIES', 'BRIDE', 'WRECK',
'FLOCK', 'STARE', 'HOBBY', 'BONDS', 'DARED', 'FADED', 'THIEF', 'CRUDE', 'PANTS', 'FLUTE',
'VOTES', 'TONAL', 'RADAR', 'WELLS', 'SKULL', 'HAIRS', 'ARGUE', 'WEARS', 'DOLLS', 'VOTED',
'CAVES', 'CARED', 'BROOM', 'SCENT', 'PANEL', 'FAIRY', 'OLIVE', 'BENDS', 'PRISM', 'LAMPS',
'CABLE', 'PEACH', 'RUINS', 'RALLY', 'SCHWA', 'LAMBS', 'SELLS', 'COOLS', 'DRAFT', 'CHARM',
'LIMBS', 'BRAKE', 'GAZED', 'CUBES', 'DELAY', 'BEAMS', 'FETCH', 'RANKS', 'ARRAY', 'HARSH',
'CAMEL', 'VINES', 'PICKS', 'NAVAL', 'PURSE', 'RIGID', 'CRAWL', 'TOAST', 'SOILS', 'SAUCE',
'BASIN', 'PONDS', 'TWINS', 'WRIST', 'FLUID', 'POOLS', 'BRAND', 'STALK', 'ROBOT', 'REEDS',
'HOOFS', 'BUSES', 'SHEER', 'GRIEF', 'BLOOM', 'DWELT', 'MELTS', 'RISEN', 'FLAGS', 'KNELT',
'FIBER', 'ROOFS', 'FREED', 'ARMOR', 'PILES', 'AIMED', 'ALGAE', 'TWIGS', 'LEMON', 'ATONE',
'DRUNK', 'RESTS', 'CHILL', 'SLAIN', 'PANIC', 'CORDS', 'TUNED', 'CRISP', 'LEDGE', 'DIVED',
'SWAMP', 'CLUNG', 'STOLE', 'MOLDS', 'YARNS', 'LIVER', 'GAUGE', 'BREED', 'STOOL', 'GULLS',
'AWOKE', 'GROSS', 'DIARY', 'RAILS', 'BELLY', 'TREND', 'FLASK', 'STAKE', 'FRIED', 'DRAWS',
'ACTOR', 'HANDY', 'BOWLS', 'HASTE', 'SCOPE', 'DEALS', 'KNOTS', 'MOONS', 'ESSAY', 'THUMP',
'HANGS', 'BLISS', 'DEALT', 'GAINS', 'BOMBS', 'CLOWN', 'PALMS', 'CONES', 'ROAST', 'TIDAL',
'BORED', 'CHANT', 'ACIDS', 'DOUGH', 'CAMPS', 'SWORE', 'LOVER', 'HOOKS', 'MALES', 'COCOA',
'PUNCH', 'AWARD', 'REINS', 'NINTH', 'NOSES', 'LINKS', 'DRAIN', 'FILLS', 'NYLON', 'LUNAR',
'PULSE', 'FLOWN', 'ELBOW', 'FATAL', 'SITES', 'MOTHS', 'MEATS', 'FOXES', 'MINED', 'ATTIC',
'FIERY', 'MOUNT', 'USAGE', 'SWEAR', 'SNOWY', 'RUSTY', 'SCARE', 'TRAPS', 'RELAX', 'REACT',
'VALID', 'ROBIN', 'CEASE', 'GILLS', 'PRIOR', 'SAFER', 'POLIO', 'LOYAL', 'SWELL', 'SALTY',
'MARSH', 'VAGUE', 'WEAVE', 'MOUND', 'SEALS', 'MULES', 'VIRUS', 'SCOUT', 'ACUTE', 'WINDY',
'STOUT', 'FOLDS', 'SEIZE', 'HILLY', 'JOINS', 'PLUCK', 'STACK', 'LORDS', 'DUNES', 'BURRO',
'HAWKS', 'TROUT', 'FEEDS', 'SCARF', 'HALLS', 'COALS', 'TOWEL', 'SOULS', 'ELECT', 'BUGGY',
'PUMPS', 'LOANS', 'SPINS', 'FILES', 'OXIDE', 'PAINS', 'PHOTO', 'RIVAL', 'FLATS', 'SYRUP',
'RODEO', 'SANDS', 'MOOSE', 'PINTS', 'CURLY', 'COMIC', 'CLOAK', 'ONION', 'CLAMS', 'SCRAP',
'DIDST', 'COUCH', 'CODES', 'FAILS', 'OUNCE', 'LODGE', 'GREET', 'GYPSY', 'UTTER', 'PAVED',
'ZONES', 'FOURS', 'ALLEY', 'TILES', 'BLESS', 'CREST', 'ELDER', 'KILLS', 'YEAST', 'ERECT',
'BUGLE', 'MEDAL', 'ROLES', 'HOUND', 'SNAIL', 'ALTER', 'ANKLE', 'RELAY', 'LOOPS', 'ZEROS',
'BITES', 'MODES', 'DEBTS', 'REALM', 'GLOVE', 'RAYON', 'SWIMS', 'POKED', 'STRAY', 'LIFTS',
'MAKER', 'LUMPS', 'GRAZE', 'DREAD', 'BARNS', 'DOCKS', 'MASTS', 'POURS', 'WHARF', 'CURSE',
'PLUMP', 'ROBES', 'SEEKS', 'CEDAR', 'CURLS', 'JOLLY', 'MYTHS', 'CAGES', 'GLOOM', 'LOCKS',
'PEDAL', 'BEETS', 'CROWS', 'ANODE', 'SLASH', 'CREEP', 'ROWED', 'CHIPS', 'FISTS', 'WINES',
'CARES', 'VALVE', 'NEWER', 'MOTEL', 'IVORY', 'NECKS', 'CLAMP', 'BARGE', 'BLUES', 'ALIEN',
'FROWN', 'STRAP', 'CREWS', 'SHACK', 'GONNA', 'SAVES', 'STUMP', 'FERRY', 'IDOLS', 'COOKS',
'JUICY', 'GLARE', 'CARTS', 'ALLOY', 'BULBS', 'LAWN', 'LASTS', 'FUELS', 'ODDLY', 'CRANE',
'FILED', 'WEIRD', 'SHAWL', 'SLIPS', 'TROOP', 'BOLTS', 'SUITE', 'SLEEK', 'QUILT', 'TRAMP',
'BLAZE', 'ATLAS', 'ODORS', 'SCRUB', 'CRABS', 'PROBE', 'LOGIC', 'ADOBE', 'EXILE', 'REBEL',
'GRIND', 'STING', 'SPINE', 'CLING', 'DESKS', 'GROVE', 'LEAPS', 'PROSE', 'LOFTY', 'AGONY',
'SNARE', 'TUSKS', 'BULLS', 'MOODS', 'HUMID', 'FINER', 'DIMLY', 'PLANK', 'CHINA', 'PINES',
'GUILT', 'SACKS', 'BRACE', 'QUOTE', 'LATHE', 'GAILY', 'FONTS', 'SCALP', 'ADOPT', 'FOGGY',
'FERNS', 'GRAMS', 'CLUMP', 'PERCH', 'TUMOR', 'TEENS', 'CRANK', 'FABLE', 'HEDGE', 'GENES',
'SOBER', 'BOAST', 'TRACT', 'CIGAR', 'UNITE', 'OWING', 'THIGH', 'HAIKU', 'SWISH', 'DIKES',
'WEDGE', 'BOOTH', 'EASED', 'FRAIL', 'COUGH', 'TOMBS', 'DARTS', 'FORTS', 'CHOIR', 'POUCH',
'PINCH', 'HAIRY', 'BUYER', 'TORCH', 'VIGOR', 'WALTZ', 'HEATS', 'HERBS', 'USERS', 'FLINT',
'CLICK', 'MADAM', 'BLEAK', 'BLUNT', 'AIDED', 'LACKS', 'MASKS', 'WADED', 'RISKS', 'NURSE',
'CHAOS', 'SEWED', 'CURED', 'AMPLE', 'LEASE', 'STEAK', 'SINKS', 'MERIT', 'BLUFF', 'BATHE',
'GLEAM', 'BONUS', 'COLTS', 'SHEAR', 'GLAND', 'SILKY', 'SKATE', 'BIRCH', 'ANVIL', 'SLEDS',
'GROAN', 'MAIDS', 'MEETS', 'SPECK', 'HYMNS', 'HINTS', 'DROWN', 'BOSOM', 'SLICK', 'QUEST',
'COILS', 'SPIED', 'SNOWS', 'STEAD', 'SNACK', 'PLOWS', 'BLOND', 'TAMED', 'THORN', 'WAITS',
'GLUED', 'BANJO', 'TEASE', 'ARENA', 'BULKY', 'CARVE', 'STUNT', 'WARMS', 'SHADY', 'RAZOR',
'FOLLY', 'LEAFY', 'NOTCH', 'FOOLS', 'OTTER', 'PEARS', 'FLUSH', 'GENUS', 'ACHED', 'FIVES',
'FLAPS', 'SPOUT', 'SMOTE', 'FUMES', 'ADAPT', 'CUFFS', 'TASTY', 'STOOP', 'CLIPS', 'DISKS',
'SNIFF', 'LANES', 'BRISK', 'IMPLY', 'DEMON', 'SUPER', 'FURRY', 'RAGED', 'GROWL', 'TEXTS',
'HARDY', 'STUNG', 'TYPED', 'HATES', 'WISER', 'TIMID', 'SERUM', 'BEAKS', 'ROTOR', 'CASTS',
'BATHS', 'GLIDE', 'PLOTS', 'TRAIT', 'RESIN', 'SLUMS', 'LYRIC', 'PUFFS', 'DECKS', 'BROOD',
'MOURN', 'ALoft', 'ABUSE', 'WHIRL', 'EDGED', 'OVARY', 'QUACK', 'HEAPS', 'SLANG', 'AWAIT',
'CIVIC', 'SAINT', 'BEVEL', 'SONAR', 'AUNTS', 'PACKS', 'FROZE', 'TONIC', 'CORPS', 'SWARM',
'FRANK', 'REPAY', 'GAUNT', 'WIRED', 'GAMER', 
];
const wordGrid = document.querySelector(".grid");
const wordCellCount = 5;
const gridRows = [];
const randomWordIndex = Math.floor(Math.random() * wordArray.length);
let CORRECT_GUESS = wordArray[randomWordIndex];
// console.log(CORRECT_GUESS);
let correctArray = CORRECT_GUESS.split("");
const submitButton = document.querySelector("#submit-button");
const inputBox = document.querySelector(".text-input");
const guessesElement = document.querySelector("#guesses");
const playAgainButton = document.getElementById('play-again');
let guesses = 6;
let currentRowIndex = 0;
let wins = localStorage.getItem('wordleWins');
    wins = wins ? parseInt(wins) : 0;

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
for (let i = 0; i < 6; i++) {
createRow(i);
}

function checkForWinner() {
  const GUESS = document.querySelector("input").value.toUpperCase();
  if (GUESS.length !== wordCellCount) {
      alert('Please enter a 5-letter word.');
      return;
  } 

  if (!wordArray.includes(GUESS)) {
      alert('The word is not in the list of valid words.');
      return;
  }

  const guessArray = GUESS.split("");
  const displayGuessArray = [...guessArray];
  let correctArray = [...CORRECT_GUESS.split("")];
  const resultsArray = new Array(wordCellCount).fill('incorrect');

  for (let i = 0; i < wordCellCount; i++) {
      if (guessArray[i] === correctArray[i]) {
          resultsArray[i] = 'correct';
          correctArray[i] = null;
          guessArray[i] = null;  // ! null being 
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

function colourHandling(guessArray, resultsArray) {
gridRows[currentRowIndex].forEach((cell, index) => {
    cell.innerText = guessArray[index];
    cell.classList.add(resultsArray[index]);
});
}

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
  gameOverMessage.style.border = '1px solid black';

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

function resetGame() {
  guesses = 6;
  currentRowIndex = 0;
  
  const randomWordIndex = Math.floor(Math.random() * wordArray.length);
  CORRECT_GUESS = wordArray[randomWordIndex];
  console.log(CORRECT_GUESS);
  

  correctArray = CORRECT_GUESS.split("");
  
  gridRows.forEach(row => {
      row.forEach(cell => {
          cell.innerText = "";
          cell.className = 'word-cell';
      });
  });
  
  guessesElement.innerText = guesses;
  
  document.querySelector("input").value = "";
  
  const gameOverMessages = document.querySelectorAll('#gameOverContainer, div[style*="position: absolute"]');
    gameOverMessages.forEach(message => message.remove());
  
  const winMessage = document.getElementById('winGameMessage');
    if (winMessage) winMessage.remove();
  
  submitButton.addEventListener('click', checkForWinner);
}

function initWinCounter() {
  let wins = localStorage.getItem('wordleWins');
  wins = wins ? parseInt(wins) : 0;
  updateWinDisplay(wins);
}

function incrementWins() {
  let wins = localStorage.getItem('wordleWins');
  wins = wins ? parseInt(wins) : 0;
  wins++;
  localStorage.setItem('wordleWins', wins);
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
