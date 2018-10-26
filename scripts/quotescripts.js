$(document).ready(function(){

  let quoteCount = 20;
  let dateNow = new Date();
  let offset = dateNow.getTimezoneOffset() * 60000;
  let timeNow = dateNow.getTime() - offset;
  let days = Math.floor(timeNow / 86400000);
  let quoteDisplay = days % quoteCount;
  console.log(quoteDisplay);

  //JSON BIN: https://jsonbin.io/5bd102b451e8b664f2c1501b/2
  //Please do not alter

  let jsonUrl = "https://api.jsonbin.io/b/5bd102b451e8b664f2c1501b/2";

  $.getJSON(jsonUrl, function(data) {

    let dailyQuote, dailyAuthor, loveQuote, loveAuthor, artQuote, artAuthor, lifeQuote, lifeAuthor, funnyQuote, funnyAuthor;
    dailyQuote = data[0].daily.quotes[quoteDisplay].quote;
    dailyAuthor = data[0].daily.quotes[quoteDisplay].author;
    loveQuote = data[0].love.quotes[quoteDisplay].quote;
    loveAuthor = data[0].love.quotes[quoteDisplay].author;
    artQuote = data[0].art.quotes[quoteDisplay].quote;
    artAuthor = data[0].art.quotes[quoteDisplay].author;
    lifeQuote = data[0].life.quotes[quoteDisplay].quote;
    lifeAuthor = data[0].life.quotes[quoteDisplay].author;
    funnyQuote = data[0].funny.quotes[quoteDisplay].quote;
    funnyAuthor = data[0].funny.quotes[quoteDisplay].author;

    $(".dailyquote__quote").html(dailyQuote);
    $(".dailyquote__author").html(dailyAuthor);
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
