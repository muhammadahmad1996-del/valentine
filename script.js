const noMessages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again 😢",
  "Last chance!",
  "You’ll regret this 💔",
  "Okay fine… but please?",
  "🥺"
];

let noClickCount = 0;
let yesScale = 1;

function handleNoClick() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  noBtn.innerText = noMessages[noClickCount % noMessages.length];

  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  noClickCount++;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
