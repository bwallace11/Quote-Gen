console.log("JS Connected");

const quotes = [
  { quote: "Check Check", author: "P.Colin Manikoth" },
  { quote: "Not A Colin Thing", author: "P.Colin Manikoth" },
  { quote: "I Am Robot", author: "P.Colin Manikoth)" },
  { quote: "Computers Are Dumb", author: "P.Colin Manikoth" },
  { quote: "Good Good", author: "P.Colin Manikoth)"},
  { quote: "Take A Break", author: "P.Colin Manikoth)"},
  { quote: "YAAAAAY!", author: "P.Colin Manikoth)"},
  { quote: "Get It And Set It", author: "P.Colin Manikoth)"},
  { quote: "Gooder", author: "P.Colin Manikoth)"},
  { quote: "Don't Be Mad At The Machine", author: "P.Colin Manikoth)"}
];

// Soft mesh gradient palettes
const meshThemes = [
  ["#fbc2eb", "#a6c1ee"],
  ["#fad0c4", "#ffd1ff"],
  ["#cfd9df", "#e2ebf0"],
  ["#f6d365", "#fda085"],
  ["#a18cd1", "#fbc2eb"],
  ["#89f7fe", "#66a6ff"]
];

const MOUTH_CLOSED = "https://i.postimg.cc/xCMgrxpk/mouthclosedcolin.png";
const MOUTH_OPEN = "https://i.postimg.cc/m2bjqSYg/mouthopencolin.png";

const body = document.querySelector("#body");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const refreshBtn = document.querySelector("#refresh-btn");
const character = document.querySelector("#character");
const quoteBox = document.querySelector("#quote-box");

let typingTimer;
let mouthTimer;
let isTalking = false;

// ===== BACKGROUND =====

function applyMeshGradient() {
  const random = meshThemes[Math.floor(Math.random() * meshThemes.length)];

  body.style.background = `
    radial-gradient(circle at 20% 30%, ${random[0]} 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, ${random[1]} 0%, transparent 50%),
    #111
  `;
}

// ===== TALKING =====

function stopTalking() {
  isTalking = false;
  clearInterval(typingTimer);
  clearInterval(mouthTimer);
  character.src = MOUTH_CLOSED;
}

function startMouthFlap() {
  let open = false;
  mouthTimer = setInterval(() => {
    if (!isTalking) return;
    open = !open;
    character.src = open ? MOUTH_OPEN : MOUTH_CLOSED;
  }, 50);
}

function typeQuote(text, done) {
  quoteText.textContent = "";
  let i = 0;

  typingTimer = setInterval(() => {
    if (!isTalking) return;

    quoteText.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(typingTimer);
      done();
    }
  }, 20);
}

function animateQuoteBox() {
  quoteBox.classList.add("translate-y-2", "scale-105");
  setTimeout(() => {
    quoteBox.classList.remove("translate-y-2", "scale-105");
  }, 300);
}

// ===== MAIN =====

function getRandomQuote() {

  stopTalking();
  animateQuoteBox();
  applyMeshGradient();

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  quoteAuthor.textContent = "";

  isTalking = true;
  startMouthFlap();

  typeQuote(selectedQuote.quote, () => {
    stopTalking();
    quoteAuthor.textContent = `— ${selectedQuote.author}`;
  });
}

refreshBtn.addEventListener("click", getRandomQuote);

// Initial background
applyMeshGradient();
