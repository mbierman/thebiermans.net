// http://www.web1marketing.com/resources/tools/random-quote.htm

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

quotes.push("&ldquo;80% of successful feature development is getting all roles to agree on where the value is and aim their efforts at that value.&rdquo; <span class='quotesig'>~&nbsp;<a href='https://twitter.com/rjs/status/223804572869722113'>@rjs</a></span> ");

quotes.push("&ldquo;When one door closes, and other opens; but we often look <i>so</i> long and <i>so</i> regretfully upon the closed door that we do not see the one which has opened for us.&rdquo; <span class='quotesig'>~&nbsp;Alexander Graham Bell </span>");

quotes.push("&ldquo;1. Question assumptions.</br> 2. When in doubt, improvise.</br> 3. When your path is blocked, pivot</br>4. Practice. Practice. Pratice.<span class='quotesig'>~&nbsp;<a href='http://feedproxy.google.com/~r/TedtalksHD/~3/90LKd-w_TYE/ken_goldberg_4_lessons_from_robots_about_being_human.html'>Ken Goldberg, TED talk<k/a></span>");

quotes.push("&ldquo;Our willingness to fail gives us the ability and opportunity to succeed where others may fear to tread.&rdquo;</br></br>&ldquo;I&rsquo;ve missed more than 9000 shots in my career. I&rsquo;ve lost almost 300 games. Twenty six times, I&rsquo;ve been trusted to take the game-winning shot and missed. I&rsquo;ve failed over and over and over again in my life. And that is why I succeed.&rdquo; <span class='quotesig'>~&nbsp;Michael Jordan</span>");

quotes.push("&ldquo;You can fail at what you don&rsquo;t want, so you might as well take a chance on doing what you love.&rdquo; <span class='quotesig'>~&nbsp;Jim Carrey</span>");

quotes.push("&ldquo;“It&rsquo;s a terrible thing, I think, in life to wait until you&rsquo;re ready. I have this feeling now that actually no one is ever ready to do anything. There&rsquo;s almost no such thing as ready. There&rsquo;s only now. And you may as well do it now. I mean, I say that confidently as if I&rsquo;m about to go bungee jumping or something - I&rsquo;m not. I&rsquo;m not a crazed risk taker. But I do think that, generally speaking, now is as good a time as any.&rdquo; <span class='quotesig'>~&nbsp;Hugh Laurie</span>");

quotes.push("&ldquo;“The planet does not need more successful people. The planet desperately needs more peacemakers, healers, restorers, storytellers and lovers of all kinds.&rdquo; <span class='quotesig'>~&nbsp;Dali Lama</span>");

quotes.push("&ldquo;“The enemy is fear. We think it is hate; but, it is fear.&rdquo; <span class='quotesig'>~&nbsp;Gandhi</span>");


//End quotes

// Write the initial quote
//alert ("there are " + quotes.length + " quotes");
document.write(quotes[(Math.floor(Math.random() * quotes.length))]);
// console.log(quotes[(Math.floor(Math.random() * quotes.length))]);


// Fading code from http://www.javascriptkit.com/dhtmltutors/fadingtext.shtml

// Fades the quote text
var hexinput = 255;   // Initial color value.
// var inc=-1       //increment variable


function fadeText() {
    "use strict";
    if (hexinput > 0) {
        hexinput -= 11;     // increase color value
        document.getElementById("quoteDiv").style.color = "rgb(" + hexinput + "," + hexinput + "," + hexinput + ")"; // Set color value.
        setTimeout("fadeText()", 40);
    } else {
        hexinput = 255;   //reset hex value
    //  console.log("fadeText");
    }
}

// Rotate the quote
function changeText() {
    "use strict";
// document.getElementById('quoter').innerHTML=(quotes[(Math.floor(Math.random() * quotes.length))]);
	var SS = quotes[(Math.floor(Math.random() * quotes.length))];
	//	console.log (SS);
	// alert (SS);
	//	console.log("call fade");
	fadeText();
	document.getElementById('quoter').innerHTML=(SS);
}


setInterval('changeText()', 9000);
// setInterval('fadeText()', 9942);

// Testing junk
// setInterval("console.log('New text');", 9942);
// setTimeout("console.log('Fade');", 9941);