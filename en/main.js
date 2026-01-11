const dinnerNameContainer = document.getElementById('dinner-name');
const dinnerImageContainer = document.getElementById('dinner-image');
const generateBtn = document.getElementById('generate-dinner');
const themeToggle = document.getElementById('theme-toggle');
const langKrBtn = document.getElementById('lang-kr');
const langEnBtn = document.getElementById('lang-en');

const dinnerMenus = [
    { name: "Pizza", image: "images/pizza.png" },
    { name: "Sushi", image: "images/sushi.png" },
    { name: "Hamburger", image: "images/hamburger.png" },
    { name: "Pasta", image: "images/pasta.png" },
    { name: "Steak", image: "images/steak.png" },
    { name: "Salad", image: "images/salad.png" },
    { name: "Tacos", image: "images/tacos.png" },
    { name: "Ramen", image: "images/ramen.png" }
];

function recommendDinner() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];
    dinnerNameContainer.textContent = recommendedMenu.name;
    dinnerImageContainer.src = recommendedMenu.image;
    dinnerImageContainer.alt = recommendedMenu.name;
}

generateBtn.addEventListener('click', recommendDinner);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

langKrBtn.addEventListener('click', () => {
    window.location.href = '../index.html'; // Navigate to Korean version
});

langEnBtn.addEventListener('click', () => {
    window.location.href = './index.html'; // Navigate to English version
});

// Initial recommendation
recommendDinner();
