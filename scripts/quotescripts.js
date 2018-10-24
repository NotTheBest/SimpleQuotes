$(document).ready(function(){

  let jsonUrl = "https://api.jsonbin.io/b/5bd102b451e8b664f2c1501b";

  function randomNumber() {
    let range = 3;
    return Math.floor(Math.random() * range);
  }

  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    },
    success: function(data) {
      $(".dailyquote__quote").html(data.quoteText);
      $(".dailyquote__author").html(data.quoteAuthor);
    }
  });


  $.getJSON(jsonUrl, function(data) {
    let loveQuote, loveAuthor, artQuote, artAuthor, lifeQuote, lifeAuthor, funnyQuote, funnyAuthor;
    let loveNumber = randomNumber();
    let artNumber = randomNumber();
    let lifeNumber = randomNumber();
    let funnyNumber = randomNumber();
    //$.jsonObj = JSON.parse(JSON.stringify(data));
    loveQuote = data[0].love.quotes[loveNumber].quote;
    loveAuthor = data[0].love.quotes[loveNumber].author;
    artQuote = data[0].art.quotes[artNumber].quote;
    artAuthor = data[0].art.quotes[artNumber].author;
    lifeQuote = data[0].life.quotes[lifeNumber].quote;
    lifeAuthor = data[0].life.quotes[lifeNumber].author;
    funnyQuote = data[0].funny.quotes[lifeNumber].quote;
    funnyAuthor = data[0].funny.quotes[lifeNumber].author;

    $(".quotescontainer__love__quote .quote").html(JSON.stringify(loveQuote));
    $(".quotescontainer__love__quote .author").html("- " + loveAuthor);
    $(".quotescontainer__art__quote .quote").html(JSON.stringify(artQuote));
    $(".quotescontainer__art__quote .author").html("- " + artAuthor);
    $(".quotescontainer__life__quote .quote").html(JSON.stringify(lifeQuote));
    $(".quotescontainer__life__quote .author").html("- " + lifeAuthor);
    $(".quotescontainer__funny__quote .quote").html(JSON.stringify(funnyQuote));
    $(".quotescontainer__funny__quote .author").html("- " + funnyAuthor);
  });

});
