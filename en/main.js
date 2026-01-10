const dinnerNameContainer = document.getElementById('dinner-name');
const dinnerImageContainer = document.getElementById('dinner-image');
const generateBtn = document.getElementById('generate-dinner');
const themeToggle = document.getElementById('theme-toggle');

const dinnerMenus = [
    { name: "Pizza", image: "https://placehold.co/600x400/E74C3C/white?text=Pizza" },
    { name: "Sushi", image: "https://placehold.co/600x400/3498DB/white?text=Sushi" },
    { name: "Hamburger", image: "https://placehold.co/600x400/F1C40F/white?text=Hamburger" },
    { name: "Pasta", image: "https://placehold.co/600x400/9B59B6/white?text=Pasta" },
    { name: "Steak", image: "https://placehold.co/600x400/2ECC71/white?text=Steak" },
    { name: "Salad", image: "https://placehold.co/600x400/1ABC9C/white?text=Salad" },
    { name: "Tacos", image: "https://placehold.co/600x400/E67E22/white?text=Tacos" },
    { name: "Ramen", image: "https://placehold.co/600x400/34495E/white?text=Ramen" }
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

// Initial recommendation
recommendDinner();
