document.getElementById("readMindBtn").addEventListener("click", function () {
    let userInput = document.getElementById("userInput").value.trim();
  
    if (userInput === "") {
        alert("Please enter a word!");
        return;
    }

    let loadingText = document.getElementById("loadingText");
    let messages = [
        "🔮 Reading your mind...",
        "🤯 Thinking so hard...",
        "💭 Initializing final thoughts...",
        "🔮 fetching...",
        
    ];
    
    let index = 0;
    loadingText.classList.remove("hidden");
    loadingText.textContent = messages[index];

    let interval = setInterval(() => {
        index++;
        if (index < messages.length) {
            loadingText.textContent = messages[index];
        } else {
            clearInterval(interval);
            setTimeout(() => {
                loadingText.classList.add("hidden");
                document.getElementById("modal").classList.remove("hidden");
            }, 1000);
        }
    }, 1500);
});

// Redirect button
document.getElementById("redirectBtn").addEventListener("click", function () {
    window.location.href = "willyoube.html";
});
