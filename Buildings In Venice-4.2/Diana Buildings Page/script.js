const hamburger = document.getElementById("hamburger");
const overlayMenu = document.getElementById("overlayMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
overlayMenu.style.right = "0";
});

closeMenu.addEventListener("click", () => {
overlayMenu.style.right = "-100%";
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".fact-card");
    const prevBtn = document.querySelector(".fact-btn.left");
    const nextBtn = document.querySelector(".fact-btn.right");
    let currentIndex = 0;
    let startX = 0;
    let endX = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.style.transform = "translateX(0%)";
                card.style.opacity = "1";
            } else if (index < currentIndex) {
                card.style.transform = "translateX(-100%)";
                card.style.opacity = "0";
            } else {
                card.style.transform = "translateX(100%)";
                card.style.opacity = "0";
            }
        });

        prevBtn.classList.toggle("hidden", currentIndex === 0);
        nextBtn.classList.toggle("hidden", currentIndex === cards.length - 1);
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCards();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCards();
        }
    });

    // --- Swiping Functionality ---
    document.querySelector(".fact-container").addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
    });

    document.querySelector(".fact-container").addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    document.querySelector(".fact-container").addEventListener("mousedown", function (e) {
        startX = e.clientX;
    });

    document.querySelector(".fact-container").addEventListener("mouseup", function (e) {
        endX = e.clientX;
        handleSwipe();
    });

    function handleSwipe() {
        let difference = startX - endX;
        if (difference > 50 && currentIndex < cards.length - 1) {
            currentIndex++;
        } else if (difference < -50 && currentIndex > 0) {
            currentIndex--;
        }
        updateCards();
    }

    updateCards(); // Initialize card positions
});

let lastScrollTop = 0;
const navbar = document.querySelector(".top-nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down → Hide navbar
        navbar.style.transform = "translateY(-150%)";
    } else {
        // Scrolling up → Show navbar
        navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});


// 显示或隐藏按钮
window.onscroll = () => {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
          btn.style.display = "none";
    }
};
    
// 点击返回顶部
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButton = document.getElementById("playAudioBtn");

    playButton.addEventListener("click", function () {
        // Make sure the audio player is displayed below the button
        audioPlayer.style.display = "block";

        // Play the audio
        audioPlayer.play();
    });
});