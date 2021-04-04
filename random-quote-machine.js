// global variable -- 10 quotes & 10 colors
var quoteList = [
    {
      quote: "In every walk with nature one receives far more than he seeks.",
      author: "John Muir"
    },
    { quote: "It is not what you do, but how you do it.", author: "John Wooden" },
    {
      quote: "Imagination is more important than knowledge.",
      author: "Albert Einstein"
    },
    {
      quote: "True knowledge exists in knowing that you know nothing.",
      author: "Socrates"
    },
    { quote: "Honesty is the best policy.", author: "Benjamin Franklin" },
    { quote: "Wisdom begins in wonder.", author: "Socrates" },
    { quote: "No man was ever wise by chance.", author: "Lucius Annaeus Seneca" },
    { quote: "The object of the superior man is truth.", author: "Confucius" },
    {
      quote: "Never interrupt someone doing what you said could not be done.",
      author: "Amelia Earhart"
    },
    { quote: "Once you label me you negate me.", author: "Soren Kierkegaard" }
  ];
  
  var colorList = [
    "#001f3f",
    "#0074D9",
    "#39CCCC",
    "#2ECC40",
    "#FFDC00",
    "#FF851B",
    "#FF4136",
    "#85144b",
    "#F012BE",
    "#B10DC9"
  ];
  
  /*======jQuery & functions======*/
  
  //function to generate random number
  function randomNum() {
    return Math.floor(Math.random() * quoteList.length);
  }
  
  //function to generate random quote and color
  function randomQuote(i) {
    $("#text").html(quoteList[i].quote);
    $("#author").html("- " + quoteList[i].author);
    $("body").css("background-color", colorList[i]);
    $("body").css("color", colorList[i]);
    $("button").css("background-color", colorList[i]);
    $("#tweet-quote").css("background-color", colorList[i]);
    $("#quote-icon").css("color", colorList[i]);
  }
  
  //document ready function
  $(document).ready(function () {
    //load first quote
    randomQuote(randomNum());
  
    //generate a random quote, using a random number, when the 'new quote' button is clicked
    $("button").click(function () {
      randomQuote(randomNum());
    });
  });
  