const dinnerNameContainer = document.getElementById('dinner-name');
const dinnerImageContainer = document.getElementById('dinner-image');
const generateBtn = document.getElementById('generate-dinner');
const themeToggle = document.getElementById('theme-toggle');
const langKrBtn = document.getElementById('lang-kr');
const langEnBtn = document.getElementById('lang-en');

const dinnerMenus = [
    { name: "치킨", image: "images/chicken.png" },
    { name: "피자", image: "images/pizza.png" },
    { name: "삼겹살", image: "images/pork_belly.png" },
    { name: "된장찌개", image: "images/doenjangjjigae.png" },
    { name: "김치찌개", image: "images/kimchijjigae.png" },
    { name: "초밥", image: "images/sushi.png" },
    { name: "파스타", image: "images/pasta.png" },
    { name: "족발", image: "images/jokbal.png" },
    { name: "보쌈", image: "images/bossam.png" },
    { name: "떡볶이", image: "images/tteokbokki.png" },
    { name: "라멘", image: "images/ramen.png" },
    { name: "햄버거", image: "images/hamburger.png" },
    { name: "부대찌개", image: "images/budaejjigae.png" },
    { name: "곱창", image: "images/gopchang.png" },
    { name: "국밥", image: "images/gukbap.png" }
];

function recommendDinner() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];
    dinnerNameContainer.textContent = recommendedMenu.name;
    dinnerImageContainer.src = recommendedMenu.image;
    dinnerImageContainer.alt = recommendedMenu.name;
    dinnerImageContainer.style.display = 'block'; // Show image
}

generateBtn.addEventListener('click', recommendDinner);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

langKrBtn.addEventListener('click', () => {
    window.location.href = '../index.html'; // Navigate to Korean version
});

langEnBtn.addEventListener('click', () => {
    window.location.href = './en/index.html'; // Navigate to English version
});

// Initial recommendation
recommendDinner();