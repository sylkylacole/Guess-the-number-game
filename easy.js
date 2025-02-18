// Import all elements

const comArea = document.getElementById("com-area");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const startButton = document.getElementById("start");
const homeButton = document.getElementById("home");

// Set defaults (before the game even begins)

let alive = true;
let points = 0;
let guess;
let randomNumber = Math.floor(Math.random() * 3) + 1;

// Create a function that will reassign random number; call this when a user gets a guess RIGHT

function newRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
}


// When the start button is clicked, the game is running

startButton.addEventListener("click", () => {
    startGame();
    comArea.className = "";
});

function startGame() {
    alive = true;
    points = 0;
    newRandomNumber();
    comArea.innerHTML = `<h3>Game started! Guess the number!</h3>`;
    addEventListeners();
}

function removeEventListeners() {
    oneButton.removeEventListener("click", handleGuess);
    twoButton.removeEventListener("click", handleGuess);
    threeButton.removeEventListener("click", handleGuess);
}

function addEventListeners() {
    oneButton.addEventListener("click", handleGuess);
    twoButton.addEventListener("click", handleGuess);
    threeButton.addEventListener("click", handleGuess);
}

function handleGuess(event) {
    guess = parseInt(event.target.textContent, 10); // Use textContent to get the button's number
    if (isNaN(guess)) {
        console.error("Invalid guess: ", event.target.textContent);
        return;
    }
    checkGuess();
    console.log("Guess: " + guess);
}

function checkGuess() {
    if (guess === randomNumber) {
        points++;
        comArea.innerHTML = `<h3>Correct! ✅ You currently have ${points} points! Guess again!</h3>`;
        newRandomNumber();
    } else {
        alive = false;
        comArea.innerHTML = `<h3>Wrong! ❌ The number was ${randomNumber}. Your final score is ${points} points! Press start to try again or home to go home!</h3>`;
        removeEventListeners(); // Remove event listeners when the guess is incorrect
    }
}

homeButton.addEventListener("click", () => {
    window.location = "index.html";
});