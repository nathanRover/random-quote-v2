// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes = [
  {quote:"hi", source:"somewhere", citation:"somewheree", year:null},
  {quote:"ho", source:"somewhere1", citation:"somewheree1", year:20001},
  {quote:"down", source:"somewhere2", citation:"somewheree2", year:20002},
  {quote:"lo", source:"somewhere3", citation:"somewheree3", year:20003}
]

function getRandomQuote(){
  var randomQuote = Math.floor(Math.random()*quotes.length);
  return quotes[randomQuote];
}

function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var printToPage = '<p class="quote">' + randomQuote.quote + '</p>';
  printToPage += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation !== null){
  printToPage += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== null){
  printToPage += '<span class="year">' + ' ' + randomQuote.year + '</span>';
  }
  printToPage += '</p>';

  document.getElementById('quote-box').innerHTML = printToPage;
  getRandomColor();
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    return color;
}

setInterval(printQuote, 3000);
