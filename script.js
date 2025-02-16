// Import all elements

const comArea = document.getElementById("com-area");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const tenButton = document.getElementById("ten");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

// Set defaults (before the game even begins)

let alive = true;
let points = 0;
let guess;
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Create a function that will reassign random number; call this when a user gets a guess RIGHT

function newRandomNumber() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
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
    fourButton.removeEventListener("click", handleGuess);
    fiveButton.removeEventListener("click", handleGuess);
    sixButton.removeEventListener("click", handleGuess);
    sevenButton.removeEventListener("click", handleGuess);
    eightButton.removeEventListener("click", handleGuess);
    nineButton.removeEventListener("click", handleGuess);
    tenButton.removeEventListener("click", handleGuess);
}

function addEventListeners() {
    oneButton.addEventListener("click", handleGuess);
    twoButton.addEventListener("click", handleGuess);
    threeButton.addEventListener("click", handleGuess);
    fourButton.addEventListener("click", handleGuess);
    fiveButton.addEventListener("click", handleGuess);
    sixButton.addEventListener("click", handleGuess);
    sevenButton.addEventListener("click", handleGuess);
    eightButton.addEventListener("click", handleGuess);
    nineButton.addEventListener("click", handleGuess);
    tenButton.addEventListener("click", handleGuess);
}

function handleGuess(event) {
    guess = parseInt(event.target.textContent, 10); // Use textContent to get the button's number
    if (isNaN(guess)) {
        console.error("Invalid guess: ", event.target.textContent);
        return;
    }
    checkGuess();
    console.log("Guess: " + guess + " Number: " + randomNumber);
}

function checkGuess() {
    if (guess === randomNumber) {
        points++;
        comArea.innerHTML = `<h3>Correct! ✅ You currently have ${points} points! Guess again!</h3>`;
        newRandomNumber();
    } else {
        alive = false;
        comArea.innerHTML = `<h3>Wrong! ❌ The number was ${randomNumber}. Your final score is ${points} points! Reset the game to start again!</h3>`;
        removeEventListeners(); // Remove event listeners when the guess is incorrect
    }
}

function resetGame() {
    alive = true;
    points = 0;
    newRandomNumber();
    comArea.innerHTML = `<h3>Game reset! Guess the number!</h3>`;
    addEventListeners();
}

resetButton.addEventListener("click", () => {
    resetGame();
});