const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const orb = document.querySelector('.crystal-orb');
const rippleContainer = document.querySelector('.ripple-container');
const crystalResponse = document.getElementById('crystalResponse');

const randomResponses = [
    "The winds whisper your fate.",
    "The path ahead shimmers faintly.",
    "Darkness watches. Light endures.",
    "Energy flows where focus goes.",
    "You are closer than you think.",
    "The unknown bends to your will.",
    "Echoes ripple through time.",
    "The gate remains... for now."
];

const loreResponses = [
    { keywords: ["who", "you"], response: "I am Mindgate, guardian of echoes, keeper of lost intentions." },
    { keywords: ["purpose", "why"], response: "My existence anchors the unstable threads of thought. I reveal fragments of truth." },
    { keywords: ["power"], response: "Power lies in intent. The stronger your will, the brighter the crystal burns." },
    { keywords: ["future"], response: "Time folds strangely. I glimpse shadows, but futures remain unwritten." },
    { keywords: ["danger"], response: "The darker currents stir beyond your perception. Tread carefully." }
];


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
    let response = "";

    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
        response = "Greetings, seeker of light.";
    } else if (input.includes("who") && input.includes("you")) {
        response = "I am the gatekeeper of echoes.";
    } else if (input.includes("what") && input.includes("you")) {
        response = "I am but a vessel of forgotten knowledge.";
    } else if (input.includes("bye") || input.includes("goodbye")) {
        response = "The echoes shall await your return.";
    } else {
        const randomIndex = Math.floor(Math.random() * randomResponses.length);
        response = randomResponses[randomIndex];
    }

    typeWriter(response);
}

function typeWriter(text) {
    let i = 0;
    crystalResponse.textContent = "";
    const speed = 50;

    function type() {
        if (i < text.length) {
            crystalResponse.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
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

