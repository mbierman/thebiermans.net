// JavaScript Document
// Creates random quote
// Part of the original Script courtesy of Web 1 Marketing, Inc.
// http://www.web1marketing.com
// Part of the
// last updated 10/04/2010

// Create an array to hold the quotes
var quotes = new Array;

//Begin quotes

quotes.push("&ldquo;Do what you can, with what you have, where you are.&rdquo; <i>~&nbsp;T&nbsp;R</i>");

quotes.push("&ldquo;I would rather be a failure doing something I love than be a sucess doing something I hate.&rdquo; <i>~&nbsp;George&nbsp;Burns</i>");

quotes.push("&ldquo;I don't know the key to success, but the key to failure is to try to please everyone.&rdquo; <i>~&nbsp;Bill&nbsp;Cosby</i>");

quotes.push("&ldquo;Aim at Heaven and you will get Earth thrown in. Aim at Earth and you get neither.&rdquo; <i>~&nbsp;C.S.&nbsp;Lewis</i>");

quotes.push("&ldquo;Any fool can make things bigger, more complex, and more violent. It takes a touch of genius&mdash;and a lot of courage&mdash;to move in the opposite direction.&rdquo; <i>~&nbsp;Albert&nbsp;Einstein</i>");

quotes.push("&ldquo;Decisions are made by those who show up.&rdquo; <i>~&nbsp;Aaron&nbsp;Sorkin</i>");

quotes.push("&ldquo;Those who say it cannot be done should not interrupt the people doing it.&rdquo; <i>~&nbsp;Chinese&nbsp;Proverb</i>");

quotes.push("&ldquo;The solutions are all simple - after you have arrived at them. But they are simple only when you know already what they are.&rdquo; <i>~&nbsp;Robert M.&nbsp;Pirsig</i>");

quotes.push("&ldquo;A functioning media is vital to a functioning democracy.&rdquo; <i>~&nbsp;Steve&nbsp;Jobs</i>");

quotes.push("&ldquo;Progress is impossible without change, and those who cannot change their minds cannot change anything.&rdquo; <i>~&nbsp;George&nbsp;Bernard&nbsp;Shaw</i>");

quotes.push("&ldquo;Style matters. But substance matters more.&rdquo; <i>~&nbsp;Quincy Jones</i>");

quotes.push("&ldquo;Uncertainty is an uncomfortable position. But certainty is an absurd one.&rdquo; <i>~&nbsp;Voltaire</i>");

quotes.push("&ldquo;If you don&rsquo;t have time to do it right, when will you have time to do it over?&rdquo; <i>~&nbsp;John&nbsp;Wooden</i>");

quotes.push("&ldquo;Out of clutter, find simplicity; from discord, find harmony; in the middle of difficulty, find opportunity.&rdquo; <i>~&nbsp;Albert&nbsp;Einstein</i>");

quotes.push("&ldquo;HTML5 is going to change everything. In HTML5, an ad is an app, a tweet is an app, everything is an app. It&lsquo;s a blank sheet of paper, and creativity rules again.&rdquo; <i>~&nbsp;Roger&nbsp;McNamee</i>");



//End quotes

// Write the initial quote
// alert ("there are " + quotes.length + " quotes");
 document.write(quotes[(Math.floor(Math.random() * quotes.length))]);
console.log((Math.floor(Math.random() * quotes.length)));


// Fading code from http://www.javascriptkit.com/dhtmltutors/fadingtext.shtml

// Fades the quote text
hexinput=255  // Initial color value.
// var inc=-1 //increment variable

function fadingtext(){
if(hexinput>0) {
	hexinput-=11; // increase color value
	document.getElementById("quoteDiv").style.color="rgb("+hexinput+","+hexinput+","+hexinput+")"; // Set color value.
	setTimeout("fadingtext()",65);
}
else
 	hexinput=255  //reset hex value
}

// Rotate the quote
function changetext() {
	document.getElementById('quoter').innerHTML=(quotes[(Math.floor(Math.random() * quotes.length))]);
}
// alert('fire in the hole');

setInterval("fadingtext()", 9941);
setInterval("changetext()", 9942);
// Testing junk
// setInterval("alert('New text');", 3000);
//setTimeout("alert('Fade');", 4820);
