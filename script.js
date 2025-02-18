// Import all elements

const comArea = document.getElementById("com-area");
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");

// Navigation

easyButton.addEventListener("click", () => {
    window.location.href = "easy.html";
});

mediumButton.addEventListener("click", () => {
    window.location.href = "medium.html";
});

hardButton.addEventListener("click", () => {
    window.location.href = "hard.html";
});