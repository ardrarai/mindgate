const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const orb = document.querySelector('.crystal-orb');
const rippleContainer = document.querySelector('.ripple-container');

sendBtn.addEventListener('click', () => {
    const inputText = userInput.value.trim();
    if (inputText !== '') {
        activatePulse();
        createRipple();
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
