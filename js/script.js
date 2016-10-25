// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var message = '';
var red;
var green;
var blue;
var viewedQuotes = [];

// Create an array of JavaScript objects to hold the data for your quotes.
var quotes = [
  {
    quote: "Glory is fleeting, but obscurity is forever.",
    source: "Napoleon Bonaparte",
    citation: "Citation Unknown",
    year: "1979-1921",
    tags: "Inspirational"
  },
  {
    quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
    source: "Albert Einstein",
    citation: "Citation Unknown",
    year: "1879-1955",
    tags: "Inspirational"
  },
  {
    quote: "A lie gets halfway around the world before the truth has a chance to get its pants on.",
    source: "Sir Winston Churchill",
    citation: "Citation Unknown",
    year: "1874-1965",
    tags: "Life in general"
  },
  {
    quote: "The full use of your powers along lines of excellence.",
    source: "John F. Kennedy",
    citation: "definition of 'happiness'",
    year: "1917-1963",
    tags: "happiness"
  },
  {
    quote: "Give me a museum and I'll fill it.",
    source: "Pablo picasso",
    citation: "Citation Unknown",
    year: "1881",
    tags: "Artistic"
  },
  {
    quote: "Do, or do not. There is no 'try'.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: "Year Unknown",
    tags: "Motivational"
  }
];

function print(quote) {
  var outpurDiv = document.getElementById('quote-box');
  outpurDiv.innerHTML = quote;
}

// Create a function named getRandomQuote which:
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);

  //selects a random quote object from the quotes array
  var splicedQuote = quotes.splice(randomQuote, 1)[0];
  viewedQuotes.push(splicedQuote);
  if( quotes.length === 0 ) {
    quotes = viewedQuotes;
    viewedQuotes = [];
  }

  // Returns the randomly selected quote object
  return splicedQuote
}

// Generate a random color
function randomColorGenerator() {
  // Initialize variable
  var randomColor;

  red = Math.floor( Math.random() * 256 );
  blue = Math.floor( Math.random() * 256 );
  green = Math.floor( Math.random() * 256 );

  // Inject RGB value to variable
  randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

  // Return RGB vaue generated
  return randomColor;

}

// Create a function named printQuote which follows these rules:
function printQuote() {
  // printQuote calls the getRandomQuote function and stores the returned quote object in a variable
  var quotes = getRandomQuote();

  // printQuote constructs a string using the different properties of the quote object using the following HTML template:
  message = '<p class="quote">' + quotes.quote + '</p>';
  message += '<p class="source">' + quotes.source;

  if( quotes.citation ) {
    message += '<span class="citation">' + quotes.citation + '</span>';
  } else {
    message += '';
  }

  if( quotes.year ) {
    message += '<span class="year">' + quotes.year + '</span></p>';
  } else {
    message += '';
  }

  if(quotes.tags) {
    message += '<h3>' + quotes.tags + '</h3';
  } else {
    message += '';
  }

  print( message );

  // Generate random color
  randomColorGenerator();

  // Update body background color
  document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();

};



