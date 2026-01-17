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
        { name: "피자", image: "images/pizza.png" },
        { name: "초밥", image: "images/sushi.png" },
        { name: "햄버거", image: "images/hamburger.png" },
        { name: "파스타", image: "images/pasta.png" },
        { name: "스테이크", image: "images/steak.png" },
        { name: "샐러드", image: "images/salad.png" },
        { name: "타코", image: "images/tacos.png" },
        { name: "라면", image: "images/ramen.png" }
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
        const text = `오늘 저녁은 ${recommendedMenu.name} 어때요?`;
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
            showToast('링크가 복사되었습니다!');
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
        const text = `오늘 저녁 뭐 먹지? - 저녁 메뉴 추천 서비스`;
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
            showToast('링크가 복사되었습니다!');
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
