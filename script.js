document.getElementById("sendBtn").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    console.log("You said:", userInput);
    alert("The crystal hums, but says nothing... yet.");
});
