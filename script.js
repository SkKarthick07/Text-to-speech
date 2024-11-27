// Select elements
const textInput = document.getElementById("textInput");
const speakButton = document.getElementById("speakButton");
const clearButton = document.getElementById("clearButton");

// Function to speak text
function speakText() {
    const text = textInput.value.trim();
    if (!text) {
        alert("Please enter some text!");
        return;
    }
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // Set language (change if needed)
    speech.pitch = 1; // Default pitch
    speech.rate = 1; // Default speed
    speechSynthesis.speak(speech);
}

// Function to clear text area
function clearText() {
    textInput.value = "";
}

// Add event listeners
speakButton.addEventListener("click", speakText);
clearButton.addEventListener("click", clearText);
