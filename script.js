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
