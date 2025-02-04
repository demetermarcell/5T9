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
      gameStart(e);
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
    alert("Please fill in the username field.");
  }
}

/**
 * This function ends the game and changes screen to endGameScreen.
 */
function endGame(e) {
  toggleScreen(1, 2);
}

/**
 * This function restarts the game.
 */
function restartGame(e) {
  toggleScreen(2, 0);
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
// In game variables:
let quiz = "";
let code = "";
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let isCorrectAnswer;
let wordCollection = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", 
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", 
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini",
    "apricot", "blueberry", "coconut", "dragonfruit", "grapefruit", "mulberry"];

/**
 * This function counts down and ends game when hit 00:00.
 */
function timer() {
  const timerDisplay = document.getElementById("timer-display");
  let timeLeft = 10;
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
      //   endGame();
    }
    timeLeft--;
  }, 1000);
}

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
    if(answer.value){
        isCorrectAnswer = quiz === answer.value;
        calculateScore();
        gameLoop();
    }
}

function calculateScore() {
    console.log(` ${quiz} ${answer.value} same: ${isCorrectAnswer}`);

}

// Testing:

// convertToCode function testing:

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
