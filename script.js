let currentImageIndex = 0;
const directions = ['up', 'down', 'left', 'right'];
const images = [
    'jaguar.jpg',
    'nike travis scott.jpg',
    'porsche.jpg',
    'RR.jpg',
    'starbucks.jpg'
];

// Shuffle the images array
shuffleArray(images);

// Set the initial image
document.getElementById('current-image').src = images[currentImageIndex];

function chooseDirection(userChoice) {
    const computerChoice = directions[Math.floor(Math.random() * directions.length)];
    const resultElement = document.getElementById('result');

    if (userChoice === computerChoice) {
        currentImageIndex++;
        if (currentImageIndex >= images.length) {
            resultElement.textContent = 'Congratulations! You completed the game.';
            document.getElementById('current-image').src = '';
        } else {
            resultElement.textContent = 'Correct! Moving to next image.';
            document.getElementById('current-image').src = images[currentImageIndex];
        }
    } else {
        resultElement.textContent = `Incorrect! Computer chose ${computerChoice}. Try again.`;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
