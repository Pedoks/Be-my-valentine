"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 6;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
    titleElement.innerHTML = "See yah🥰";
    buttonsContainer.classList.add("hidden");
    catImg.src = "https://media.giphy.com/media/DdJ9RsY88uBarMvVsb/giphy.gif?cid=790b76116qswruh01znylyfnk0r08kn90t02tu7e5jody26a&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    removeGifContainer();
    displayMultipleGifs();
  
    // Hide all gifs except the first one (assuming it's the "Yes" gif)
    const allGifs = document.querySelectorAll('.cat-img');
    allGifs.forEach((gif, index) => {
      gif.style.display = index === 0 ? 'block' : 'none';
    });
  }
  
  
  

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Eh?",
    "Pookie please",
    "Don't do this to me pls",
    "You're breaking my heart🥹",
    "What if mag cry na lang ako",
    "huhu",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function displayMultipleGifs() {
    const gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");
  
    const uniqueGifUrls = new Set(); // Use a Set to ensure uniqueness
  
    while (uniqueGifUrls.size < MAX_IMAGES) {
      uniqueGifUrls.add(getRandomGifUrl());
    }
  
    uniqueGifUrls.forEach((url) => {
      const img = document.createElement("img");
      img.src = url;
      gifContainer.appendChild(img);
    });
  
    document.body.appendChild(gifContainer);
  }
  

function removeGifContainer() {
  const existingGifContainer = document.querySelector(".gif-container");
  if (existingGifContainer) {
    existingGifContainer.parentNode.removeChild(existingGifContainer);
  }
}




function changeImage(imageIndex) {
  const gifIndex = (noCount - 1) % 6 + 1;

  switch (gifIndex) {
    case 1:
      catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWMwaTMzdnRlbXQ1NGd2MmQ1OGV3NDZjMHJyZmhraThkeTJ2bHZ1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/elPGI1VakLYmuPKPmE/giphy.gif";
      break;
    case 2:
      catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmZrYTFiajJqN2F4ZWI0cGtlaG96NjY5NnJiMmp2aGtwY3FiNTZrMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LfisNItfC9Lbw7AV4b/giphy.gif";
      break;
    case 3:
      catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNxN3NkeXgwaDBtdzIzaDY4MmwwejZ6eDJseHNzNnM5bzh4MnV2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u9DZooBWZXBD5Xt5Cn/giphy.gif";
      break;
    case 4:
      catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHNrMXR5bjFtNmQ1andzcHRqMWhma25lc3dyZHd0cG43MXB6Mzd2ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kKUoc5lhM1OrkZcMeT/giphy.gif";
      break;
    case 5:
      catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG1tMGN4ems0eTN1dmxtazhjanQ2c25sNGEwcHg2NnJpenFrYXk2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJ5fjfkHj3hydAeWdb/giphy.gif";
      break;
    case 6:
      catImg.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VzaDBjY2RjeGllbzZpZDhhZ2dsYjI5a2J1em16cGswMXc0cTA4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LSQDw8pFBfmOn5sQqD/giphy-downsized-large.gif";
      break;
    default:
      // Add default behavior if needed
      break;
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    
    if (noCount === MAX_IMAGES) {
      play = false;
      alert("192.0.1 says: Virus has been detected")
      alert("192.0.1 says: Click 'Yes' to remove the virus!");
    }
  }
});


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
      "💭 Initializing final thoughts..."
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
  window.location.href = "index.html";
});

