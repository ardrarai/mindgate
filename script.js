const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const orb = document.querySelector('.crystal-orb');

sendBtn.addEventListener('click', () => {
    const inputText = userInput.value.trim();
    if (inputText !== '') {
        activatePulse();
        userInput.value = '';
    }
});

function activatePulse() {
    orb.classList.add('active');
    setTimeout(() => {
        orb.classList.remove('active');
    }, 1000);
}
