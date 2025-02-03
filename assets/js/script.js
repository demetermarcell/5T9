// Button controls:

const startBtn = document.getElementById("start");
const endGameBtn = document.getElementById("end-game");
const restartBtn = document.getElementById("restart");

//Event Listeners:
startBtn.addEventListener("click", gameStart);
endGameBtn.addEventListener("click", gameEnd);
restartBtn.addEventListener("click", gameRestart);

//Game variables:


/**
 * This function checks if username has value, starts the game or throws alert.
 */
function gameStart (e){
    if (document.getElementById('user-form').checkValidity()) {
        // document.getElementById('user-form').submit(); 
        toggleScreen(0, 1);
        timer();
    } else {
        alert("Please fill in the username field.");
    }
}

/**
 * This function counts down
 */
function timer(){
    const timerDisplay = document.getElementById("timer-display");
    let timeLeft = 30;
    let cuntdown;
    // Reset timer
    clearInterval(cuntdown);
    // Display timeLeft and cuntdown
    cuntdown = setInterval(() => {
        let minutes = Math.floor(timeLeft/60);
        let seconds = timeLeft % 60;
        // Display timeLeft, MM:SS format
        timerDisplay.textContent = `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`;
        // Deduct a second from timeLeft
        timeLeft-- ;

    }, 1000);

}

function gameEnd (e){
    toggleScreen(1,2);
}

function gameRestart (e){
    toggleScreen(2,0);
    // document.getElementById("user-name").value = ""; empties input value
}

/**
 * This function changes between screens on button trigger.
 */
function toggleScreen(currentScreen, nextScreen){
    const screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {screen.classList.toggle("hide", index!== nextScreen)})
    }


/**
 * Keyboard controls:
 */
document.addEventListener("keydown", keyNav);

function keyNav(e){
    const allowedKeys = [" ", "Enter", "Escape"];
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");
    if (allowedKeys.includes(e.key)){
        e.preventDefault();
        console.log(e.key);
        // Screen 1 controls:
        if(e.key === "Enter" && !screen1.classList.contains("hide")){
            gameStart(e);
        }
        // Screen 2 controls:
        if(e.key === "Escape" && !screen2.classList.contains("hide")){
            gameEnd(e);
        }
        if(e.key === "Enter" && !screen2.classList.contains("hide")){
            // Function comes here;
        }
        if(e.key === " " && !screen2.classList.contains("hide")){
            // Function comes here;
        }
        // Screen 3 controls:
        if(e.key === "Enter" && !screen3.classList.contains("hide")){
            gameRestart(e);
        }
    }
}