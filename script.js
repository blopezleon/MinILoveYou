const letters = [
    "You are my sunshine! ☀️",
    "Every day with you is a gift. 🎁",
    "I love you more than words can say. ❤️"
];

function generateLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    document.getElementById("letter").innerText = letters[randomIndex];
}
