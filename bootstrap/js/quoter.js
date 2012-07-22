var quotes = [];


// Begin quotes  //

quotes.push("&ldquo;Do what you can, with what you have, where you are.&rdquo; <span class='quotesig'>~&nbsp;T&nbsp;R</span>");

quotes.push("&ldquo;I would rather be a failure doing something I love than be a sucess doing something I hate.&rdquo; <span class='quotesig'>~&nbsp;George Burns</span>");

quotes.push("&ldquo;I don't know the key to success, but the key to failure is to try to please everyone.&rdquo; <span class='quotesig'>~&nbsp;Bill&nbsp;Cosby</span>");

quotes.push("&ldquo;Aim at Heaven and you will get Earth thrown in. Aim at Earth and you get neither.&rdquo; <span class='quotesig'>~&nbsp;C.S. Lewis</span>");

quotes.push("&ldquo;Any fool can make things bigger, more complex, and more violent. It takes a touch of genius&mdash;and a lot of courage&mdash;to move in the opposite direction.&rdquo; <span class='quotesig'>~&nbsp;Albert Einstein</span>");

quotes.push("&ldquo;Decisions are made by those who show up.&rdquo; <span class='quotesig'>~&nbsp;Aaron Sorkin</span>");

quotes.push("&ldquo;Those who say it cannot be done should not interrupt the people doing it.&rdquo; <span class='quotesig'>~&nbsp;Chinese Proverb</span>");

quotes.push("&ldquo;The solutions are all simple - after you have arrived at them. But they are simple only when you know already what they are.&rdquo; <span class='quotesig'>~&nbsp;Robert M.&nbsp;Pirsig</span>");

quotes.push("&ldquo;A functioning media is vital to a functioning democracy.&rdquo; <span class='quotesig'>~&nbsp;Steve Jobs</span>");

quotes.push("&ldquo;Progress is impossible without change, and those who cannot change their minds cannot change anything.&rdquo; <span class='quotesig'>~&nbsp;George Bernard Shaw</span>");

quotes.push("&ldquo;Style matters. But substance matters more.&rdquo; <span class='quotesig'>~&nbsp;Quincy Jones</span>");

quotes.push("&ldquo;Uncertainty is an uncomfortable position. But certainty is an absurd one.&rdquo; <span class='quotesig'>~&nbsp;Voltaire</span>");

quotes.push("&ldquo;If you don&rsquo;t have time to do it right, when will you have time to do it over?&rdquo; <span class='quotesig'>~&nbsp;John Wooden</span>");

quotes.push("&ldquo;Out of clutter, find simplicity; from discord, find harmony; in the middle of difficulty, find opportunity.&rdquo; <span class='quotesig'>~&nbsp;Albert Einstein</span>");

quotes.push("&ldquo;HTML5 is going to change everything. In HTML5, an ad is an app, a tweet is an app, everything is an app. It&lsquo;s a blank sheet of paper, and creativity rules again.&rdquo; <span class='quotesig'>~&nbsp;Roger McNamee</span>");

quotes.push("&ldquo;80% of successful feature development is getting all roles to agree on where the value is and aim their efforts at that value.&rdquo; <span class='quotesig'>~&nbsp;<a href='https://mobile.twitter.com/#!/mbierm/status/223807565522403328'>@rjs</a></span> ");

//

//End quotes

// Write the initial quote
// alert ("there are " + quotes.length + " quotes");
document.write(quotes[(Math.floor(Math.random() * quotes.length))]);
// console.log((Math.floor(Math.random() * quotes.length)));


// Fading code from http://www.javascriptkit.com/dhtmltutors/fadingtext.shtml

// Fades the quote text
var hexinput = 255;   // Initial color value.
// var inc=-1       //increment variable

function fadingtext() {
    "use strict";
    if (hexinput > 0) {
        hexinput -= 11;     // increase color value

        document.getElementById("quoteDiv").style.color = "rgb(" + hexinput + "," + hexinput + "," + hexinput + ")"; // Set color value.
        setTimeout(fadingtext(), 65);
    } else {
        hexinput = 255;   //reset hex value
    }
}
// Rotate the quote
function changetext() {
    "use strict";
	document.getElementById('quoter').innerHTML = (quotes[(Math.floor(Math.random() * quotes.length))]);
}
// alert('fire in the hole');

setInterval(fadingtext(), 9941);
setInterval(changetext(), 9942);
// Testing junk
// setInterval("alert('New text');", 3000);
//setTimeout("alert('Fade');", 4820);