// ==========================================
// Valentine's Garden - Main JavaScript
// ==========================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    createButterflies();
    createGardenFlowers();
    setupButtonHandlers();
});


// ----- Dark Mode Toggle -----
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const modeIcon = document.getElementById('modeIcon');
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.textContent = '🌙';
        } else {
            modeIcon.textContent = '☀️';
        }
    });
}


// ----- Create Butterflies -----
function createButterflies() {
    const butterfliesContainer = document.getElementById('butterflies');
    const butterflyColors = ['#FF69B4', '#FFB6C1', '#FF1493', '#FFA07A'];
    
    for (let i = 0; i < 4; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        butterfly.style.left = Math.random() * 80 + 10 + '%';
        butterfly.style.top = Math.random() * 40 + 10 + '%';
        butterfly.style.animationDelay = Math.random() * 5 + 's';
        butterfly.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Create wings
        const wingLeft = document.createElement('div');
        wingLeft.className = 'wing wing-left';
        wingLeft.style.background = butterflyColors[i];
        
        const wingRight = document.createElement('div');
        wingRight.className = 'wing wing-right';
        wingRight.style.background = butterflyColors[i];
        
        const body = document.createElement('div');
        body.className = 'butterfly-body';
        
        butterfly.appendChild(wingLeft);
        butterfly.appendChild(wingRight);
        butterfly.appendChild(body);
        butterfliesContainer.appendChild(butterfly);
    }
}


// ----- Create Garden Flowers -----
function createGardenFlowers() {
    const flowersContainer = document.getElementById('flowers');
    
    // Flower data: position, height, colors
    const flowerData = [
        { pos: 5, height: 80, colors: ['#FF69B4', '#FF1493', '#FFB6C1', '#FF69B4'] },
        { pos: 12, height: 100, colors: ['#9C27B0', '#BA68C8', '#9C27B0', '#CE93D8'] },
        { pos: 20, height: 90, colors: ['#FF1493', '#FF69B4', '#FF1493', '#FFB6C1'] },
        { pos: 28, height: 85, colors: ['#FFB6C1', '#FF1493', '#FF69B4', '#FF1493'] },
        { pos: 38, height: 95, colors: ['#FF69B4', '#FF1493', '#FFB6C1', '#FF69B4'] },
        { pos: 48, height: 110, colors: ['#E91E63', '#F06292', '#E91E63', '#F8BBD0'] },
        { pos: 58, height: 88, colors: ['#9C27B0', '#BA68C8', '#9C27B0', '#CE93D8'] },
        { pos: 67, height: 93, colors: ['#FF1493', '#FF69B4', '#FF1493', '#FFB6C1'] },
        { pos: 76, height: 105, colors: ['#FFB6C1', '#FF1493', '#FF69B4', '#FF1493'] },
        { pos: 85, height: 87, colors: ['#FF69B4', '#FF1493', '#FFB6C1', '#FF69B4'] },
        { pos: 92, height: 98, colors: ['#E91E63', '#F06292', '#E91E63', '#F8BBD0'] }
    ];

    flowerData.forEach((data, index) => {
        const flower = document.createElement('div');
        flower.className = `flower wave-${(index % 3) + 1}`;
        flower.style.left = data.pos + '%';
        
        // Create bloom with petals
        const bloom = document.createElement('div');
        bloom.className = 'bloom';
        
        for (let i = 0; i < 4; i++) {
            const petal = document.createElement('div');
            petal.className = `petal petal-${i + 1}`;
            petal.style.background = data.colors[i];
            bloom.appendChild(petal);
        }
        
        // Add center
        const center = document.createElement('div');
        center.className = 'petal center';
        bloom.appendChild(center);
        
        // Create stem with leaves
        const stem = document.createElement('div');
        stem.className = 'stem';
        stem.style.height = data.height + 'px';
        
        const leafLeft = document.createElement('div');
        leafLeft.className = 'leaf leaf-left';
        stem.appendChild(leafLeft);
        
        const leafRight = document.createElement('div');
        leafRight.className = 'leaf leaf-right';
        stem.appendChild(leafRight);
        
        flower.appendChild(bloom);
        flower.appendChild(stem);
        flowersContainer.appendChild(flower);
    });
}


// ----- Button Event Handlers -----
function setupButtonHandlers() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const celebration = document.getElementById('celebration');
    const catContainer = document.querySelector('.cat-container');
    
    // YES button click
    yesBtn.addEventListener('click', function() {
        handleYesClick(celebration, catContainer);
    });
    
    // NO button click
    noBtn.addEventListener('click', function() {
        handleNoClick(yesBtn, noBtn);
    });
}


// ----- Handle YES Button Click -----
function handleYesClick(celebration, catContainer) {
    // Show celebration, hide other elements
    celebration.style.display = 'block';
    document.querySelector('.speech-bubble').style.display = 'none';
    document.querySelector('.heart-message').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    
    // Make cat dance!
    catContainer.style.animation = 'cat-dance 0.3s ease-in-out infinite';
    
    // Add cat dance animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cat-dance {
            0% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-15px) rotate(-10deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(-15px) rotate(10deg); }
            100% { transform: translateY(0) rotate(0deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Start changing celebration messages
    startCelebrationMessages();
    
    // Create flower rain
    startFlowerRain();
    
    // Create rainbow background
    startRainbowEffect(celebration);
    
    // Make butterflies go wild
    makeButterfliesExcited();
    
    // Launch heart fireworks
    launchHeartFireworks();
}


// ----- Rotating Celebration Messages -----
function startCelebrationMessages() {
    const celebrationMessages = [
      "🎉 PURR-FECT! 🎉<br>You just made my heart melt 💝<br>I’m so lucky to have you ❤️",
      "🎊 YOU SAID YES! 🎊<br>Best moment ever 🌸<br>I can’t stop smiling 💕",
      "💕 I KNEW IT! 💕<br>You make my world brighter ✨<br>Let’s make memories together 💖",
      "🌈 MEOW-GICAL! 🌈<br>This feels like a dream 💫<br>I’m so happy it’s you 💞",
      "✨ BEST. DAY. EVER! ✨<br>My heart is yours ❤️<br>Always and forever 💌"
    ];
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % celebrationMessages.length;
        document.querySelector('.celebration-text').innerHTML = celebrationMessages[messageIndex];
    }, 3000);
    
    // Stop after 20 seconds
    setTimeout(() => clearInterval(messageInterval), 20000);
}


// ----- Flower Rain Effect -----
function startFlowerRain() {
    // Initial burst of flowers
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            createFallingFlower();
        }, i * 100);
    }
    
    // Continue for 15 seconds
    const flowerInterval = setInterval(() => {
        createFallingFlower();
    }, 200);
    
    setTimeout(() => clearInterval(flowerInterval), 15000);
}

function createFallingFlower() {
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.style.left = Math.random() * 100 + '%';
    flower.style.animationDelay = Math.random() * 2 + 's';
    flower.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    const colors = [
        ['#FF69B4', '#FF1493', '#FFB6C1', '#FF69B4'],
        ['#FF1493', '#FF69B4', '#FF1493', '#FFB6C1'],
        ['#9C27B0', '#BA68C8', '#9C27B0', '#CE93D8'],
        ['#E91E63', '#F06292', '#E91E63', '#F8BBD0']
    ];
    
    const colorSet = colors[Math.floor(Math.random() * colors.length)];
    
    // Create petals
    for (let i = 0; i < 4; i++) {
        const petal = document.createElement('div');
        petal.className = 'falling-petal';
        petal.style.background = colorSet[i];
        
        if (i === 0) { petal.style.top = '0'; petal.style.left = '10px'; }
        if (i === 1) { petal.style.top = '10px'; petal.style.left = '0'; }
        if (i === 2) { petal.style.top = '10px'; petal.style.left = '20px'; }
        if (i === 3) { petal.style.top = '20px'; petal.style.left = '10px'; }
        
        flower.appendChild(petal);
    }
    
    // Center
    const center = document.createElement('div');
    center.className = 'falling-petal';
    center.style.background = '#FFD700';
    center.style.top = '10px';
    center.style.left = '10px';
    center.style.borderRadius = '2px';
    flower.appendChild(center);
    
    document.body.appendChild(flower);
    
    // Remove after animation
    setTimeout(() => flower.remove(), 5000);
}


// ----- Rainbow Background Effect -----
function startRainbowEffect(celebration) {
    let hue = 0;
    const rainbowInterval = setInterval(() => {
        hue = (hue + 1) % 360;
        celebration.style.background = `hsla(${hue}, 70%, 95%, 0.95)`;
        
        if (document.body.classList.contains('dark-mode')) {
            celebration.style.background = `hsla(${hue}, 50%, 20%, 0.95)`;
        }
    }, 50);
    
    // Stop after 20 seconds
    setTimeout(() => clearInterval(rainbowInterval), 20000);
}


// ----- Make Butterflies Excited -----
function makeButterfliesExcited() {
    const butterflies = document.querySelectorAll('.butterfly');
    butterflies.forEach(butterfly => {
        butterfly.style.animation = 'butterfly-fly 2s ease-in-out infinite';
    });
}


// ----- Heart Fireworks -----
function launchHeartFireworks() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFireworkHeart();
        }, i * 400);
    }
}

function createFireworkHeart() {
    const heart = document.createElement('div');
    heart.style.position = 'fixed';
    heart.style.fontSize = '30px';
    heart.style.zIndex = '1001';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = '50%';
    heart.style.pointerEvents = 'none';
    
    document.body.appendChild(heart);
    
    // Explode in random direction
    const angle = Math.random() * Math.PI * 2;
    const distance = 200 + Math.random() * 200;
    const endX = Math.cos(angle) * distance;
    const endY = Math.sin(angle) * distance;
    
    heart.animate([
        { transform: 'translate(0, 0) scale(0)', opacity: 1 },
        { transform: `translate(${endX}px, ${endY}px) scale(1.5)`, opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-out'
    });
    
    setTimeout(() => heart.remove(), 2000);
}


// ----- Handle NO Button Click -----
function handleNoClick(yesBtn, noBtn) {
    const messages = [
        "Think about it... 💭",
        "We'd be perfect! 💕",
        "Just give it a try? 🌟",
        "What's holding you back? 🤔",
        "I promise it'll be fun! 🎉",
        "We could be great together! ✨",
        "One date won't hurt! 😊",
        "I'll make you smile! 😸",
        "You know you want to! 💝",
        "Life's too short! Say yes! ⏰",
        "Take a chance on us! 🎲",
        "I'll treat you right! 👑",
        "You won't regret it! 💯",
        "Let's make memories! 📸",
        "Why not give love a try? 💘",
        "The YES button is calling you! 📢",
        "Your heart says yes! ❤️",
        "Don't overthink it! 🧠",
        "Trust your feelings! 💗",
        "Happiness awaits! 🌈"
    ];
    
    // Change button text
    noBtn.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    // Make YES button bigger
    const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const currentPaddingV = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
    const currentPaddingH = parseFloat(window.getComputedStyle(yesBtn).paddingLeft);
    
    if (currentFontSize < 50) {
        yesBtn.style.fontSize = (currentFontSize + 3) + 'px';
        yesBtn.style.padding = (currentPaddingV + 4) + 'px ' + (currentPaddingH + 6) + 'px';
    }
    
    // Make NO button smaller
    const currentNoSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    if (currentNoSize > 8) {
        noBtn.style.fontSize = (currentNoSize - 0.5) + 'px';
    }
    
    // Emphasize YES button with animation
    yesBtn.style.transition = 'all 0.3s ease';
    yesBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        yesBtn.style.transform = 'scale(1)';
    }, 300);
}
