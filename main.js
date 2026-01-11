const dinnerNameContainer = document.getElementById('dinner-name');
const dinnerImageContainer = document.getElementById('dinner-image');
const generateBtn = document.getElementById('generate-dinner');
const themeToggle = document.getElementById('theme-toggle');
const langKrBtn = document.getElementById('lang-kr');
const langEnBtn = document.getElementById('lang-en');

const dinnerMenus = [
    { name: "치킨", image: "https://placehold.co/600x400/FFD700/white?text=치킨" },
    { name: "피자", image: "https://placehold.co/600x400/FF6347/white?text=피자" },
    { name: "삼겹살", image: "https://placehold.co/600x400/90EE90/white?text=삼겹살" },
    { name: "된장찌개", image: "https://placehold.co/600x400/DAA520/white?text=된장찌개" },
    { name: "김치찌개", image: "https://placehold.co/600x400/B22222/white?text=김치찌개" },
    { name: "초밥", image: "https://placehold.co/600x400/4682B4/white?text=초밥" },
    { name: "파스타", image: "https://placehold.co/600x400/F0E68C/white?text=파스타" },
    { name: "족발", image: "https://placehold.co/600x400/CD853F/white?text=족발" },
    { name: "보쌈", image: "https://placehold.co/600x400/D2B48C/white?text=보쌈" },
    { name: "떡볶이", image: "https://placehold.co/600x400/FF4500/white?text=떡볶이" },
    { name: "라멘", image: "https://placehold.co/600x400/F4A460/white?text=라멘" },
    { name: "햄버거", image: "https://placehold.co/600x400/8B4513/white?text=햄버거" },
    { name: "부대찌개", image: "https://placehold.co/600x400/800000/white?text=부대찌개" },
    { name: "곱창", image: "https://placehold.co/600x400/A0522D/white?text=곱창" },
    { name: "국밥", image: "https://placehold.co/600x400/DCDCDC/white?text=국밥" }
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