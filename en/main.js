document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const generateBtn = document.getElementById('generate-btn');
    const resultContainer = document.getElementById('result-container');
    const resultShare = document.getElementById('result-share');
    const floatingMenu = document.getElementById('floating-menu');

    // Theme switcher
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    const dinnerMenus = [
        { name: "Pizza", image: "../images/pizza.png" },
        { name: "Sushi", image: "../images/sushi.png" },
        { name: "Hamburger", image: "../images/hamburger.png" },
        { name: "Pasta", image: "../images/pasta.png" },
        { name: "Steak", image: "../images/steak.png" },
        { name: "Salad", image: "../images/salad.png" },
        { name: "Tacos", image: "../images/tacos.png" },
        { name: "Ramen", image: "../images/ramen.png" }
    ];

    let recommendedMenu;

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
            recommendedMenu = dinnerMenus[randomIndex];
            resultContainer.innerHTML = `
                <img src="${recommendedMenu.image}" alt="${recommendedMenu.name}" style="width: 100%; max-width: 400px; height: auto; border-radius: 10px;">
                <p>${recommendedMenu.name}</p>
            `;
            resultShare.style.display = 'block';
        });
    }

    window.shareKakao = () => {
        // Kakao SDK needed
        alert('Kakao sharing is not implemented yet.');
    };

    window.shareTwitter = () => {
        const text = `How about ${recommendedMenu.name} for dinner tonight?`;
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    };

    window.shareFacebook = () => {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    window.copyResultLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showToast('Link copied!');
        });
    };

    window.toggleFloatingMenu = () => {
        if (floatingMenu) {
            floatingMenu.style.display = floatingMenu.style.display === 'block' ? 'none' : 'block';
        }
    };
    
    window.shareKakaoSite = () => {
        alert('Kakao sharing is not implemented yet.');
    };
    
    window.shareTwitterSite = () => {
        const text = `What to eat for dinner? - Dinner Menu Recommendation Service`;
        const url = window.location.href;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    };
    
    window.shareFacebookSite = () => {
        const url = window.location.href;
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };
    
    window.copySiteLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showToast('Link copied!');
        });
    };

    function showToast(message) {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.textContent = message;
            toast.style.display = 'block';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);
        }
    }
});