const crystal = document.querySelector('.crystal-orb');
const responseBox = document.getElementById('crystalResponse');

function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim().toLowerCase();

    crystal.classList.add('distort');
    setTimeout(() => {
        crystal.classList.remove('distort');
    }, 800);

    let reply = "The crystal contemplates...";
    if (message.includes("hi") || message.includes("hello")) {
        reply = "Greetings, curious soul!";
    } else if (message.includes("future")) {
        reply = "The future is a swirling mist. Trust your path.";
    } else if (message.includes("love")) {
        reply = "Love blooms where hearts remain open.";
    } else if (message.includes("yes")) {
        reply = "The crystal nods in quiet approval.";
    } else if (message.includes("no")) {
        reply = "The answer hides for now. Seek again.";
    }

    responseBox.textContent = reply;
    input.value = "";
}

// Sparkle background
const canvas = document.getElementById('sparkCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
