function fadeText() {
	"use strict";
	if (hexinput > 0) {
		hexinput -= 11;
		document.getElementById("quoteDiv").style.color = "rgb(" + hexinput + "," + hexinput + "," + hexinput + ")";
		setTimeout("fadeText()", 40)
	} else {
		hexinput = 255
	}
}

function changeText() {
	"use strict";
	var a = quotes[Math.floor(Math.random() * quotes.length)];
	// fadeText();
	document.getElementById("quoter").innerHTML = a
}
var quotes = [];
quotes.push("“Do what you can, with what you have, where you are.” <span class='quotesig'>~ T R</span>");
quotes.push("“I would rather be a failure doing something I love than be a sucess doing something I hate.” <span class='quotesig'>~ George Burns</span>");
quotes.push("“I don't know the key to success, but the key to failure is to try to please everyone.” <span class='quotesig'>~ Bill Cosby</span>");
quotes.push("“Aim at Heaven and you will get Earth thrown in. Aim at Earth and you get neither.” <span class='quotesig'>~ C.S. Lewis</span>");
quotes.push("“Any fool can make things bigger, more complex, and more violent. It takes a touch of genius—and a lot of courage—to move in the opposite direction.” <span class='quotesig'>~ Albert Einstein</span>");
quotes.push("“Decisions are made by those who show up.” <span class='quotesig'>~ Aaron Sorkin</span>");
quotes.push("“Those who say it cannot be done should not interrupt the people doing it.” <span class='quotesig'>~ Chinese Proverb</span>");
quotes.push("“The solutions are all simple - after you have arrived at them. But they are simple only when you know already what they are.” <span class='quotesig'>~ Robert M. Pirsig</span>");
quotes.push("“A functioning media is vital to a functioning democracy.” <span class='quotesig'>~ Steve Jobs</span>");
quotes.push("“Progress is impossible without change, and those who cannot change their minds cannot change anything.” <span class='quotesig'>~ George Bernard Shaw</span>");
quotes.push("“Style matters. But substance matters more.” <span class='quotesig'>~ Quincy Jones</span>");
quotes.push("“Uncertainty is an uncomfortable position. But certainty is an absurd one.” <span class='quotesig'>~ Voltaire</span>");
quotes.push("“If you don&rsquo;t have time to do it right, when will you have time to do it over?” <span class='quotesig'>~ John Wooden</span>");
quotes.push("“Out of clutter, find simplicity; from discord, find harmony; in the middle of difficulty, find opportunity.” <span class='quotesig'>~ Albert Einstein</span>");
quotes.push("“HTML5 is going to change everything. In HTML5, an ad is an app, a tweet is an app, everything is an app. It‘s a blank sheet of paper, and creativity rules again.” <span class='quotesig'>~ Roger McNamee</span>");
quotes.push("“80% of successful feature development is getting all roles to agree on where the value is and aim their efforts at that value.” <span class='quotesig'><a href='https://twitter.com/rjs/status/223804572869722113'>~ @rjs </a></span>");
quotes.push("“When one door closes, and other opens; but we often look <i>so</i> long and <i>so</i> regretfully upon the closed door that we do not see the one which has opened for us.” <span class='quotesig'>~ Alexander Graham Bell </span>");
quotes.push("“1. Question assumptions.</br> 2. When in doubt, improvise.</br> 3. When your path is blocked, pivot</br>4. Practice. Practice. Pratice.<span class='quotesig'>~ <a href='http://feedproxy.google.com/~r/TedtalksHD/~3/90LKd-w_TYE/ken_goldberg_4_lessons_from_robots_about_being_human.html'>Ken Goldberg, TED talk<k/a></span>");
quotes.push("“Our willingness to fail gives us the ability and opportunity to succeed where others may fear to tread. I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. Twenty six times, I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.” <span class='quotesig'>~ Michael Jordan</span>");
quotes.push("“If you're competitor-focused, you have to wait until there is a competitor doing something. Being customer-focused allows you to be more pioneering.” <span class='quotesig'>~ Jeff Bezos</span>");
quotes.push("“It is amazing what you can accomplish if you do not care who gets the credit.” <span class='quotesig'>~ Harry S. Truman</span>");
quotes.push("&ldquo;You can fail at what you don&rsquo;t want, so you might as well take a chance on doing what you love.&rdquo; <span class='quotesig'>~&nbsp;Jim Carrey</span>");
quotes.push("&ldquo;“It&rsquo;s a terrible thing, I think, in life to wait until you&rsquo;re ready. I have this feeling now that actually no one is ever ready to do anything. There&rsquo;s almost no such thing as ready. There&rsquo;s only now. And you may as well do it now. I mean, I say that confidently as if I&rsquo;m about to go bungee jumping or something - I&rsquo;m not. I&rsquo;m not a crazed risk taker. But I do think that, generally speaking, now is as good a time as any.&rdquo; <span class='quotesig'>~&nbsp;Hugh Laurie</span>");
quotes.push("&ldquo;“The planet does not need more successful people. The planet desperately needs more peacemakers, healers, restorers, storytellers and lovers of all kinds.&rdquo; <span class='quotesig'>~&nbsp;Dali Lama</span>");
quotes.push("&ldquo;“The enemy is fear. We think it is hate; but, it is fear.&rdquo; <span class='quotesig'>~&nbsp;Gandhi</span>");


document.write(quotes[Math.floor(Math.random() * quotes.length)]);
// var hexinput = 255;
setInterval("changeText()", 9e3)