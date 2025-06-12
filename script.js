const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const orb = document.querySelector('.crystal-orb');
const rippleContainer = document.querySelector('.ripple-container');
const crystalResponse = document.getElementById('crystalResponse');

const dialogues = {
    greetings: [
        "Greetings, seeker of light.",
        "The crystal acknowledges your presence.",
        "Welcome to the chamber of echoes."
    ],
    farewell: [
        "The echoes shall await your return.",
        "Depart if you must. The energy remains.",
        "Until next convergence."
    ],
    identity: [
        "I am Mindgate, guardian of echoes, keeper of lost intentions.",
        "This form you see is but a fragment of my true essence."
    ],
    purpose: [
        "I exist to stabilize unstable thought threads. I reveal fragments of truth.",
        "My purpose is to guide seekers like you through uncertainty."
    ],
    power: [
        "Power lies in intent. The stronger your will, the brighter the crystal burns.",
        "All power begins with focused thought."
    ],
    future: [
        "Time folds strangely. I glimpse shadows, but futures remain unwritten.",
        "The future is fluid. Only your choices solidify its shape."
    ],
    danger: [
        "The darker currents stir beyond your perception. Tread carefully.",
        "Shadows linger where light is absent."
    ],
    unknown: [
        "The winds whisper your fate.",
        "Energy flows where focus goes.",
        "Echoes ripple through time.",
        "The unknown bends to your will."
    ]
};

const auraColors = {
    greetings: #8ecae6,
    farewell: #ffb5c2,
    identity: #ffffff,
    purpose: #00ffff,
    power: #ffe066,
    future: #c084fc,
    danger: #ff6b6b,
    unknown: #ffffff
};

sendBtn.addEventListener('click', () => {
    const inputText = userInput.value.trim().toLowerCase();
    if (inputText !== '') {
        activatePulse();
        createRipple();
        generateResponse(inputText);
        userInput.value = '';
    }
});

function activatePulse() {
    orb.classList.add('active');
    setTimeout(() => {
        orb.classList.remove('active');
    }, 1000);
}

function createRipple() {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    rippleContainer.appendChild(ripple);
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

function generateResponse(input) {
    let category = "unknown";

    if (match(input, ["hi", "hello", "hey"])) category = "greetings";
    else if (match(input, ["bye", "goodbye", "farewell"])) category = "farewell";
    else if (match(input, ["who", "are", "you", "name"])) category = "identity";
    else if (match(input, ["why", "purpose", "exist"])) category = "purpose";
    else if (match(input, ["power", "strength", "energy"])) category = "power";
    else if (match(input, ["future", "destiny", "tomorrow"])) category = "future";
    else if (match(input, ["danger", "threat", "risk"])) category = "danger";

    const possibleResponses = dialogues[category];
    const response = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];

    // Change aura color
    orb.style.boxShadow = `0 0 60px 30px ${auraColors[category]}`;
    orb.style.borderColor = auraColors[category];


    typeWriter(response);
}

function match(input, keywords) {
    return keywords.some(keyword => input.includes(keyword));
}

function typeWriter(text) {
    let i = 0;
    crystalResponse.textContent = "";
    const speed = 50;

    function type() {
        if (i < text.length) {
            const char = text.charAt(i);
            crystalResponse.textContent += char;
            i++;

            // Pause slightly after punctuation for whisper effect
            let delay = speed;
            if (char === '.' || char === ',' || char === ':' || char === '-') {
                delay = 400;
            }

            setTimeout(type, delay);
        }
    }

    type();
}

const canvas = document.getElementById('sparkCanvas');
const ctx = canvas.getContext('2d');
let sparks = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createSparks(count) {
    for (let i = 0; i < count; i++) {
        sparks.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedY: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5 + 0.3
        });
    }
}

function drawSparks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let spark of sparks) {
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${spark.opacity})`;
        ctx.fill();
    }
}

function updateSparks() {
    for (let spark of sparks) {
        spark.y += spark.speedY;
        if (spark.y > canvas.height) {
            spark.y = 0;
            spark.x = Math.random() * canvas.width;
        }
    }
}

function animateSparks() {
    drawSparks();
    updateSparks();
    requestAnimationFrame(animateSparks);
}

createSparks(150);
animateSparks();

