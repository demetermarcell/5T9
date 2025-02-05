// Control Buttons:
const startBtn = document.getElementById("start");
const endGameBtn = document.getElementById("end-game");
const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");
const skipBtn = document.getElementById("skip");

//Event Listeners:
startBtn.addEventListener("click", startGame);
endGameBtn.addEventListener("click", endGame);
restartBtn.addEventListener("click", restartGame);
submitBtn.addEventListener("click", checkAnswer);
skipBtn.addEventListener("click", gameLoop);

// Keyboard controls:
document.addEventListener("keydown", keyNav);

/**
 * This function handles key navigations.
 */
function keyNav(e) {
  const allowedKeys = [" ", "Enter", "Escape"];
  const startGameScreen = document.getElementById("start-game-screen");
  const inGameScreen = document.getElementById("in-game-screen");
  const endGameScreen = document.getElementById("end-game-screen");
  if (allowedKeys.includes(e.key)) {
    e.preventDefault();
    console.log(e.key);
    // startGameScreen controls:
    if (e.key === "Enter" && !startGameScreen.classList.contains("hide")) {
      startGame(e);
    }
    // inGameScreen controls:
    if (e.key === "Escape" && !inGameScreen.classList.contains("hide")) {
      endGame(e);
    }
    if (e.key === "Enter" && !inGameScreen.classList.contains("hide")) {
      checkAnswer(e);
    }
    if (e.key === " " && !inGameScreen.classList.contains("hide")) {
      gameLoop();
    }
    // endGameScreen controls:
    if (e.key === "Enter" && !endGameScreen.classList.contains("hide")) {
      restartGame(e);
    }
  }
}

// Game control functions:

/**
 * This function checks if username has value, starts the game or throws alert.
 */
function startGame(e) {
  if (document.getElementById("user-form").checkValidity()) {
    toggleScreen(0, 1);
    timer();
    gameLoop();
  } else {
    alert("Please provide a username.");
  }
}

/**
 * This function ends the game and changes screen to endGameScreen.
 */
function endGame(e) {
  displayMessage();
  toggleScreen(1, 2);
}

/**
 * This function restarts the game.
 */
function restartGame(e) {
  toggleScreen(2, 0);
  location.reload();
}

/**
 * This function changes between screens on button trigger.
 */
function toggleScreen(currentScreen, nextScreen) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((screen, index) => {
    screen.classList.toggle("hide", index !== nextScreen);
  });
}

// Game Loop:
// In-Game variables:
let quiz = "";
let code = "";
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let isCorrectAnswer;
let score = 0;
let wordCollection = [
  "nokia",
  "code institute",
  "javascript",
  "apple",
  "banana",
  "soccer",
  "guitar",
  "laptop",
  "bicycle",
  "sunset",
  "planet",
  "winter",
  "summer",
  "pencil",
  "notebook",
  "airplane",
  "kitchen",
  "library",
  "holiday",
  "dolphin",
  "tiger",
  "jungle",
  "coffee",
  "cookie",
  "sunrise",
  "lantern",
  "stadium",
  "painter",
  "theater",
  "rainbow",
  "concert",
  "morning",
  "battery",
  "charger",
  "cabinet",
  "blanket",
  "printer",
  "firefly",
  "balloon",
  "penguin",
  "glacier",
  "avocado",
  "cushion",
  "necklace",
  "bluebird",
  "festival",
  "puzzle",
  "journey",
  "tornado",
  "builder",
  "diamond",
  "cupcake",
  "mystery",
  "treetop",
  "village",
  "harvest",
  "sandwich",
  "bookmark",
  "firework",
  "airship",
  "backpack",
  "corridor",
  "sunshine",
  "wildfire",
  "bookcase",
  "chocolates",
  "handshake",
  "volcano",
  "elephant",
  "friendly",
  "campfire",
  "umbrella",
  "football",
  "mountain",
  "mermaid",
  "whale",
  "seagull",
  "skylight",
  "caramel",
  "playground",
  "helicopter",
  "blueberry",
  "paradise",
  "whisper",
  "treasure",
  "carnival",
  "bracelet",
  "fireplace",
  "marathon",
  "strawberry",
  "calendar",
  "motorbike",
  "skateboard",
  "waterfall",
  "flashlight",
  "happiness",
  "telephone",
  "creativity",
  "basketball",
  "friendship",
  "companion",
  "tangerine",
  "cathedral",
  "honeymoon",
  "butterfly",
  "lighthouse",
  "snowflake",
  "speedboat",
  "drifting",
  "adventure",
  "volleyball",
  "detective",
  "microwave",
  "wrestling",
  "trekking",
  "gardening",
  "lightning",
  "chemistry",
  "astronaut",
  "brilliant",
  "sapphire",
  "expedition",
  "celebrate",
  "mechanic",
  "monkey",
  "crystal",
  "mountaineer",
  "starfruit",
  "paintbrush",
  "sunflower",
  "horizon",
  "silhouette",
  "campground",
  "telescope",
  "starlight",
  "blueprint",
  "storytelling",
  "firefighter",
  "motorcycle",
  "apartment",
  "friend",
  "festival",
  "vacation",
  "landscape",
  "restaurant",
  "universe",
  "detective",
  "learning",
  "shopping",
  "backyard",
  "skyscraper",
  "nightmare",
  "invention",
  "baseball",
  "wonderful",
  "sandcastle",
  "carpenter",
  "champagne",
  "passenger",
  "sculpture",
  "electricity",
  "mechanism",
  "fireworks",
  "whimsical",
  "lumberjack",
  "honeycomb",
  "persistence",
  "dictionary",
  "chessboard",
  "flamingo",
  "carnivore",
  "butterscotch",
  "reflection",
  "atmosphere",
  "mountaineering",
  "masterpiece",
  "countryside",
  "harmonious",
  "silhouette",
  "symphony",
  "photograph",
  "underwater",
  "programming",
  "basketball",
  "celebration",
  "skateboarding",
  "watermelon",
  "tranquility",
  "butterflies",
  "headphones",
  "playground",
  "conversation",
  "chocolates",
  "firecracker",
  "electricity",
  "handwriting",
  "enthusiasm",
  "spaghetti",
  "appreciate",
  "wonderland",
  "hospitality",
  "journalist",
];

// In-Game functions
/**
 * This function counts down and ends game when hit 00:00.
 */
function timer() {
  const timerDisplay = document.getElementById("timer-display");
  let timeLeft = 300; //5 minutes in seconds
  let cuntdown;
  // Reset timer
  clearInterval(cuntdown);
  // Display timeLeft and cuntdown
  cuntdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    // Display timeLeft, MM:SS format
    timerDisplay.textContent = `${String(minutes).padStart(2, 0)}:${String(
      seconds
    ).padStart(2, 0)}`;
    // Deduct a second from timeLeft
    if (timeLeft === 0) {
      clearInterval(cuntdown);
      endGame();
    }
    timeLeft--;
  }, 1000);
}

/**
 * This function inicialize the game loop, resetting answer value and prepare a new quiz.
 */
function gameLoop() {
  answer.value = "";
  prepareQuiz();
  convertToCode(quiz);
}

/**
 * This function shuffles the wordCollection array.
 */
function shuffleWords(wordCollection) {
  // Shuffling wordCollection with Fisher-Yates algorythm:
  for (let i = wordCollection.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [wordCollection[i], wordCollection[j]] = [
      wordCollection[j],
      wordCollection[i],
    ];
  }
  return wordCollection;
}

/**
 * This function assings value to quiz and shortens the wordCollection array.
 */
function prepareQuiz() {
  if (wordCollection.length > 0) {
    shuffleWords(wordCollection);
    quiz = wordCollection.pop();
  } else {
    endGame();
  }
}

/**
 * This function translates the selected quiz to the T9 numeric code.
 */
function convertToCode(quiz) {
  const t9Map = {
    a: "2",
    b: "22",
    c: "222",
    d: "3",
    e: "33",
    f: "333",
    g: "4",
    h: "44",
    i: "444",
    j: "5",
    k: "55",
    l: "555",
    m: "6",
    n: "66",
    o: "666",
    p: "7",
    q: "77",
    r: "777",
    s: "7777",
    t: "8",
    u: "88",
    v: "888",
    w: "9",
    x: "99",
    y: "999",
    z: "9999",
    " ": "0",
  };
  code = "";

  for (let char of quiz) {
    code += t9Map[char];
  }

  question.textContent = code;

  return code;
}

/**
 * This function check if answer has value, then decides if answer is correct.
 */
function checkAnswer(e) {
  if (answer.value) {
    isCorrectAnswer = quiz === answer.value;
    calculateScore();
    gameLoop();
  }
}

/**
 * This function calculates scores, correct answer +2p, incorrect -1p.
 */
const calculateScore = () => {
  score = isCorrectAnswer ? score + 2 : score - 1;
};

/**
 * This function prints the end game message to the user.
 */
function displayMessage() {
  const message = document.getElementById("message");
  const username = document.getElementById("user-name").value;
  message.textContent = `Dear ${username}!
    Thank you for playing the game.
    Your score is: ${score}`;
}

// Testing:

// convertToCode function test:

const testing = false;

const assert = (quiz, expected) => {
  const result = convertToCode(quiz);
  if (result !== expected) {
    console.log(`Test case failed, expected ${expected}, but got ${result}`);
  } else {
    console.log("Test Passed");
  }
};

if (testing) {
  assert("cica", "2224442222");
  assert("kutya", "558889992");
  assert("code institute", "22266633304446677778444888833");
  assert("project two", "77776665332228089666");
  assert("test case", "123"); //will fail test
}
