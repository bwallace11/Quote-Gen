console.log('👍 JS Connected');

// Tailwind Background Utlities
const backgrounds = ["bg-red-300", "bg-green-300", "bg-blue-300"];

// Sample design quotes JSON data
const quotes = [
  {
    quote: "Quote 0",
    author: "Citation 0"
  },
  {
    quote: "Quote 1",
    author: "Citation 1"
  },
  {
    quote: "Quote 2",
    author: "Citation 2"
  }
];

// Get DOM elements
const body = document.querySelector("#body");
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const refreshBtn = document.querySelector("#refresh-btn");

// Function to get random quote and background
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Update quote
  quoteText.textContent = `"${selectedQuote.quote}"`;
  quoteAuthor.textContent = `— ${selectedQuote.author}`;

  // Get random background
  const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
  const newBackground = backgrounds[randomBgIndex];

  // Replace entire class attribute
  body.className = `${newBackground} min-h-screen flex items-center justify-center transition-all duration-700`;
}

// Add event listener to button
refreshBtn.addEventListener("click", getRandomQuote);
