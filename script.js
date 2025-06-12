function handleInput() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  const responseBox = document.getElementById("responseBox");

  let response = "The orb hums quietly...";

  if (input.includes("hi") || input.includes("hello")) {
    response = "Greetings, seeker. What truth do you seek?";
  } else if (input.includes("who are you")) {
    response = "I am the gatekeeper of the Mind. A fragment of thought given form.";
  } else if (input.includes("why am i here")) {
    response = "You are here because the orb called you. And you answered.";
  }

  responseBox.textContent = response;
  document.getElementById("userInput").value = "";
}

// Spark Particle Engine

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
