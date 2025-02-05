<img src="assets/images/5T9logo.webp" alt="5T9 Logo" width="400" height="200">

# 5T9

## Project Description:
5T9 is an interactive decoding game that puts your T9 texting skills to the test. 
Players must decode as many messages as possible within 5 minutes, translating number sequences into readable text using the classic T9 mobile input system.
The game’s aesthetic draws heavy inspiration from the iconic Nokia 3310, evoking a wave of nostalgia for those who grew up in the late '90s and early 2000s. With its retro pixel-style interface, 5T9 offers a fun and challenging experience that blends old-school mobile tech with a modern gaming twist. Whether you're reliving the golden era of texting or discovering T9 for the first time, this game is a perfect mix of memory, speed, and logic.

<img src="screenshots/responsive-design.webp" alt="Responsive Mockups" width="600" height="375" >

## Features

### Design
- This application was designed mainly for desktop use, however it is responsive on smaller screens and devices as well.
- Header: The logo features a pixelated, code-inspired design, perfectly setting the tone for the game’s retro-tech theme.
- Main: The app design is inspired from the Nokia 3310 cellphone. Fonts, color palette, favicon, screen layouts and buttons are designed around this concept.
- Footer: The footer gives hints to the user on each screen about the key controls.

### Start Game Screen
- The Start Game screen includes the game description, scoring rules and the controls mapping.
- The user has to enter a Username before starting the game loop, otherwise the system throws an alert message.
- The user can initiate the game by clicking the "Start Game" button or hit "Enter" on the keyboard.

<img src="screenshots/start-game-screen.webp" alt="Start Game Screen screenshot" width="600" height="320" >

### In-Game Screen
- The In-Game screen includes a timer, a question, an input for the answer and the game controls.
- Timer : The timer keeps the player informed of the remaining game time, starting at 5 minutes and counting down. Once it reaches 0, the game automatically ends.
- Quiz/Code - Answer section: The app presents a series of numeric characters that the player must translate and enter into the answer section.
- Controls:
    - End Game button: Pressing the "End Game" button or hitting "Esc" on the keyboard allows the player to manually end the game and be redirected to the End Game screen.
    - Submit button: Pressing the "Submit" button or hitting "Enter" on the keyboard validates the answer, calculates the score, and starts a new round with a fresh question.
    - Skip button: Pressing the "Skip" button or hitting "Space" on the keyboard starts a new round with a fresh question without altering the user's score.

<img src="screenshots/in-game-screen.webp" alt="In-Game Screen screenshot" width="600" height="320" >

### End Game Screen
- The user is shown a personalized end game message along with their final score.
- Pressing the "Restart Game" button or or hitting "Enter" on the keyboard redirects the user to the Start Game screen.

<img src="screenshots/end-game-screen.webp" alt="End Game Screen screenshot" width="600" height="320" >

### Features left to Implement
- During testing, it was found that the game can be quite challenging for new players at first. It would be helpful to add an "Easy Mode" where the keyboard mapping is displayed at the bottom of the screen to assist with quicker learning.

## Testing
- I have completed a full regression testing, syntax validation (HTML, CSS and JS), Lighthouse automated testing and uni test on convertToCode function.
The browser console is free from warnings and error messages.
Please see the detailed test documentation and their results below:
### Validator Testing
- W3C HTML Validator Results: Passed [LINK](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdemetermarcell.github.io%2F5T9%2F)
- CSS Validator Results: Passed [LINK](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdemetermarcell.github.io%2F5T9%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- The Javascript code was validated by [JS Hint](https://jshint.com/) No erorrs were found, all warnings are related to ES6 version.

### Automated Testing
- Lighthouse results:
    - <img src="screenshots/lighthouse-desktop.png" alt="Lighthouse results desktop." >
- Unit testing results: Passed
    - Test for correct quiz to code conversion
        - <img src="screenshots/unit-test.png" alt="Lighthouse results desktop." >
### Manual Testing
- Keyboard controls - Passed
- Button controls - Passed
- Mandatory User name input - Passed
- Timer cuntdown terminates game when hits 0 - Passed
- Answer validation  correctness - Passed
- Scoring logic correctness - Passed
- End Game message correctness - Passed

### Unfixed Bugs
 - No known bug related to the site and it's code
## Deployment
### Cloning Repository / Local Deployment
- The repository was cloned to my local machine as per steps below:
    - Installed VSCode IDE to my computer
    - Signed in to my GitHub account through the IDE/browser.
    - Selected Clone Repository
    - Selected the 5T9 project repository and the local path and hit Clone button.

    This way I could run the project locally from my machine.

### Publishing 
- The site was deployed to GitHub pages as per steps below:
    - In the GitHub repository navigate to the Settings tab.
    - Select the Pages option from the "Code and automation" section.
    - Select the following options and hit Save.
        - Source: Deploy from a branch
        - Branch: main
        - Folder: /(root)
    - After hitting Save, the first push will be deployed. ( and each push after that)
    - You can track deployed versions from the GitHub repository by navigating to the Deployments from the right column.
- The live link can be found here: [5t9](https://demetermarcell.github.io/5T9/)

## Credits
### Content
- Text content was created by Marcell Demeter with the aid of [ChatGPT](https://chatgpt.com/)
- Timer function is based on [LINK](https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/) and [LINK](https://www.javascripttutorial.net/es-next/pad-string/) and [LINK](https://www.geeksforgeeks.org/create-countdown-timer-using-javascript/)
- Fisher Yates algorithm in shuffleWords function is based on [LINK](https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/) and [LINK](https://www.geeksforgeeks.org/how-to-shuffle-the-elements-of-an-array-in-javascript/git)

### Media
- Nokia font was sourced from [Dafont.com](https://www.dafont.com/nokia-cellphone.font)
- Oxanium font was sourced from [GoogleFonts](https://fonts.google.com/specimen/Oxanium?preview)
- 5T9 logo was generated with [Midjourney](https://www.midjourney.com) (prompts by Marcell Demeter)
- Favicon was downloaded from [Wikipedia](https://en.wikipedia.org/wiki/Nokia_3310#/media/File:Nokia_3310_Blue_R7309170_(retouch).png) edited by Marcell Demeter and converted with [Favicon.io](https://favicon.io/)