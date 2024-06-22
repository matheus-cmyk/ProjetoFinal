function generateMessage() {
    const messages = [
        "Tenha um ótimo dia!",
        "Acredite em você mesmo!",
        "Nunca desista dos seus sonhos!",
        "Seja a mudança que você quer ver no mundo.",
        "Aproveite cada momento!",
        "Você é capaz de coisas incríveis!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("messageBox").value = messages[randomIndex];
}

function clearMessage() {
    document.getElementById("messageBox").value = "";
}