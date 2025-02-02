const launchBtn = document.getElementById("launch");
const endGameBtn = document.getElementById("end-game");
const restartBtn = document.getElementById("restart");

launchBtn.addEventListener("click", gameStart);
endGameBtn.addEventListener("click", gameEnd);
restartBtn.addEventListener("click", gameRestart);

function gameStart (e){
    toggleScreen(0,1);
}

function gameEnd (e){
    toggleScreen(1,2);
}

function gameRestart (e){
    toggleScreen(2,0);
}

/**
 * This function changes between screens on button trigger.
 */
function toggleScreen(currentScreen, nextScreen){
    const screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {screen.classList.toggle("hide", index!== nextScreen)})
    }


