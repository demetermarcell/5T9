// Button controls:

const startBtn = document.getElementById("start");
const endGameBtn = document.getElementById("end-game");
const restartBtn = document.getElementById("restart");

startBtn.addEventListener("click", gameStart);
endGameBtn.addEventListener("click", gameEnd);
restartBtn.addEventListener("click", gameRestart);

function gameStart (e){
    if (document.getElementById('user-form').checkValidity()) {
        // document.getElementById('user-form').submit(); 
        toggleScreen(0, 1);
    } else {
        alert("Please fill in the username field.");
    }
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
    if (allowedKeys.includes(e.key)){
        e.preventDefault();
        console.log(e.key);
    }
}