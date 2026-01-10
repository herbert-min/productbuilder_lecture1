const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate');
const themeToggle = document.getElementById('theme-toggle');

const ballColors = [
    '--ball-color-1',
    '--ball-color-2',
    '--ball-color-3',
    '--ball-color-4',
    '--ball-color-5',
    '--ball-color-6',
];

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    let bonusNumber;
    do {
        bonusNumber = Math.floor(Math.random() * 45) + 1;
    } while (numbers.has(bonusNumber));

    return { mainNumbers: Array.from(numbers).sort((a, b) => a - b), bonusNumber };
}

function displayNumbers(numbers) {
    numbersContainer.innerHTML = '';
    numbers.mainNumbers.forEach((number, index) => {
        const ball = document.createElement('div');
        ball.classList.add('number-ball');
        ball.style.backgroundColor = `var(${ballColors[index]})`;
        ball.textContent = number;
        numbersContainer.appendChild(ball);
    });

    const bonusBall = document.createElement('div');
    bonusBall.classList.add('number-ball');
    bonusBall.style.backgroundColor = 'var(--ball-color-bonus)';
    bonusBall.textContent = numbers.bonusNumber;
    numbersContainer.appendChild(bonusBall);
}

generateBtn.addEventListener('click', () => {
    const generatedNumbers = generateLottoNumbers();
    displayNumbers(generatedNumbers);
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initial generation
generateBtn.click();
