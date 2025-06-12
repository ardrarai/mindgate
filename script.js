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

// Lore-based responses
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
    orb.classList.add('distort');
    setTimeout(() => {
        orb.classList.remove('distort');
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
    } else if (input.includes("bye") || input.includes("goodbye")) {
        response = "The echoes shall await your return.";
    } else {
        // Check lore responses
        let found = false;
        for (let lore of loreResponses) {
            if (lore.keywords.some(keyword => input.includes(keyword))) {
                response = lore.response;
                found = true;
                break;
            }
        }
        if (!found) {
            const randomIndex = Math.floor(Math.random() * randomResponses.length);
            response = randomResponses[randomIndex];
        }
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
