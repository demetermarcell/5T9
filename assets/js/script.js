// Button controls:

const startBtn = document.getElementById("start");
const endGameBtn = document.getElementById("end-game");
const restartBtn = document.getElementById("restart");

//Event Listeners:
startBtn.addEventListener("click", gameStart);
endGameBtn.addEventListener("click", gameEnd);
restartBtn.addEventListener("click", gameRestart);

/**
 * This function checks if username has value, starts the game or throws alert.
 */
function gameStart(e) {
  if (document.getElementById("user-form").checkValidity()) {
    // document.getElementById('user-form').submit();
    toggleScreen(0, 1);
    timer();
    gameLoop();
  } else {
    alert("Please fill in the username field.");
  }
}

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
    //   gameEnd();
    }
    timeLeft--;
  }, 1000);
}

// Game Loop:
//Game variables:
let quiz='';
let code ='';
const answer = document.getElementById("answer")
let wordCollection = [
    "apple", "banana", "cherry",
];
/*"date", "elderberry", "fig", "grape", "honeydew", 
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", 
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini",
    "apricot", "blueberry", "coconut", "dragonfruit", "grapefruit", "mulberry"
*/

function gameLoop() {
    answer.value="";
    
};

/**
 * This function shuffles the wordCollection array.
 */
function shuffleWords(wordCollection){
    // Shuffling wordCollection with Fisher-Yates algorythm:
    for(let i = wordCollection.length -1; i > 0; i--) {
        const j = Math.floor(Math.random()*i+1);
        [wordCollection[i], wordCollection[j]] = [wordCollection[j], wordCollection[i]]
    }
    return wordCollection;
};

function getQuiz(){
    if (wordCollection.length>0){
        shuffleWords(wordCollection);
        quiz = wordCollection.pop();
    } else {
        gameEnd();
    }
};

function convertToCode(){
    const t9Map = {
        'a': '2', 'b': '22', 'c': '222',
        'd': '3', 'e': '33', 'f': '333',
        'g': '4', 'h': '44', 'i': '444',
        'j': '5', 'k': '55', 'l': '555',
        'm': '6', 'n': '66', 'o': '666',
        'p': '7', 'q': '77', 'r': '777', 's': '7777',
        't': '8', 'u': '88', 'v': '888',
        'w': '9', 'x': '99', 'y': '999', 'z': '9999',
        ' ': '0'
    }
    
};

function checkAnswer(){

};

function calculateScore(){

};

// End Game:
function gameEnd(e) {
  toggleScreen(1, 2);
}

function gameRestart(e) {
  toggleScreen(2, 0);
  // document.getElementById("user-name").value = ""; empties input value
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

/**
 * Keyboard controls:
 */
document.addEventListener("keydown", keyNav);

function keyNav(e) {
  const allowedKeys = [" ", "Enter", "Escape"];
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const screen3 = document.getElementById("screen3");
  if (allowedKeys.includes(e.key)) {
    e.preventDefault();
    console.log(e.key);
    // Screen 1 controls:
    if (e.key === "Enter" && !screen1.classList.contains("hide")) {
      gameStart(e);
    }
    // Screen 2 controls:
    if (e.key === "Escape" && !screen2.classList.contains("hide")) {
      gameEnd(e);
    }
    if (e.key === "Enter" && !screen2.classList.contains("hide")) {
      // Function comes here;
    }
    if (e.key === " " && !screen2.classList.contains("hide")) {
      // Function comes here;
    }
    // Screen 3 controls:
    if (e.key === "Enter" && !screen3.classList.contains("hide")) {
      gameRestart(e);
    }
  }
}
