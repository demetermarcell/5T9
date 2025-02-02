const launchBtn = document.getElementById("launch");
const endGameBtn = document.getElementById("end-game");
const restartBtn = document.getElementById("restart");

launchBtn.addEventListener("click", gameStart);
endGameBtn.addEventListener("click", gameEnd);
restartBtn.addEventListener("click", gameRestart);

// function gameStart (e){
//     toggleScreen();
// }

// function gameEnd (e){
//     toggleScreen();
// }

// function gameEnd (e){
//     toggleScreen();
// }


// function toggleScreen(){
//     const currentScreen = document.getElementsByClassName.contains
// }


function gameStart (e){
    const prevSections = document.getElementsByClassName("screen1");
    const nextSections = document.getElementsByClassName("screen2");
    for (let section of prevSections){
        section.classList.toggle("hide");}
    
        for (let element of nextSections){
        element.classList.toggle("hide");}
}

function gameEnd (e){
    const prevSections = document.getElementsByClassName("screen2");
    const nextSections = document.getElementsByClassName("screen3");
    for (let section of prevSections){
        section.classList.toggle("hide");}
    
        for (let element of nextSections){
        element.classList.toggle("hide");}
}

function gameRestart (e){
    const prevSections = document.getElementsByClassName("screen3");
    const nextSections = document.getElementsByClassName("screen1");
    for (let section of prevSections){
        section.classList.toggle("hide");}
    
        for (let element of nextSections){
        element.classList.toggle("hide");}
}
