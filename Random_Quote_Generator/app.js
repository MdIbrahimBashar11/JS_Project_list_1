// Define an array of quotes
const quotes = [
    "The best way to predict the future is to create it.",
    "The way to get started is to quit talking and begin doing.",
    "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
  ];
  
  // Get a reference to the quote and new-quote elements
  const quoteElement = document.getElementById('quote');
  const newQuoteButton = document.getElementById('new-quote');
  
  // Add an event listener to the new-quote button
  newQuoteButton.addEventListener('click', function() {
    // Generate a random number between 0 and the number of quotes
    const randomNumber = Math.floor(Math.random() * quotes.length);
    // Set the quote element's text to the randomly selected quote
    quoteElement.innerText = quotes[randomNumber];
  });
  
  // Display a random quote on page load
  const randomNumber = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomNumber];
  