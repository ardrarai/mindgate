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
