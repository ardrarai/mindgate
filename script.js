// Chat functionality
document.getElementById("sendBtn").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    const responseText = "The crystal hums, but says nothing... yet.";
    typeText(responseText);
});

function typeText(text) {
    const chatBox = document.querySelector(".chat-box");
    const output = document.createElement("p");
    chatBox.appendChild(output);

    let index = 0;
    const interval = setInterval(() => {
        output.textContent += text[index];
        index++;
        if (index === text.length) clearInterval(interval);
    }, 50);
}

// Sparkle Animation
const canvas = document.getElementById("sparkCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let sparkles = [];
for (let i = 0; i < 100; i++) {
    sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2
    });
}

function drawSparkles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    sparkles.forEach(sparkle => {
        ctx.beginPath();
        ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2);
        ctx.fill();
        sparkle.y -= sparkle.speed;
        if (sparkle.y < 0) {
            sparkle.y = canvas.height;
            sparkle.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(drawSparkles);
}
drawSparkles();
