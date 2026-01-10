const dinnerRecommendationContainer = document.getElementById('dinner-recommendation');
const generateBtn = document.getElementById('generate-dinner');
const themeToggle = document.getElementById('theme-toggle');

const dinnerMenus = [
    "치킨",
    "피자",
    "삼겹살",
    "된장찌개",
    "김치찌개",
    "초밥",
    "파스타",
    "족발",
    "보쌈",
    "떡볶이",
    "라멘",
    "햄버거",
    "부대찌개",
    "곱창",
    "국밥"
];

function recommendDinner() {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const recommendedMenu = dinnerMenus[randomIndex];
    dinnerRecommendationContainer.textContent = recommendedMenu;
}

generateBtn.addEventListener('click', recommendDinner);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Initial recommendation
recommendDinner();