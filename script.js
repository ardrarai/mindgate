const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const orb = document.querySelector('.crystal-orb');
const rippleContainer = document.querySelector('.ripple-container');
const crystalResponse = document.getElementById('crystalResponse');

const responses = [
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
    const inputText = userInput.value.trim();
    if (inputText !== '') {
        activatePulse();
        createRipple();
        generateResponse();
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

function generateResponse() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    crystalResponse.textContent = responses[randomIndex];
}
