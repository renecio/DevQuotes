const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "Experience is the name everyone gives to their mistakes.",
  "In order to be irreplaceable, one must always be different."
];

function generateQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomIndex];
}

// Load first quote on page load
window.onload = generateQuote;
