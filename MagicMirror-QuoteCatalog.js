/* global Module */

/* MagicMirror²
 * Module: QuoteCatalog
 *
 * Author: Sally Park
 * Version: v1.0 - February 2018
 * MIT Licensed.
 */


Module.register("MagicMirror-QuoteCatalog",{

    // Module config defaults.
    defaults: {
        updateInterval: 300,    // How often a new quote gets displayed.
        fadeSpeed: 5,           // How fast to fade out and back in when changing quotes.
        quotes: {
            quotes : [
                "How you make others feel about themselves says a lot about you. ~ Unknown",
                "Please don't expect me to always be good and kind and loving. There are times when I will be cold and thoughtless and hard to understand. ~ Sylvia Plath",
                "If you inherently long for something, become it first. If you want gardens, become the gardener. If you want love, embody love. If you want mental stimulation, change the conversation. If you want peace, exude calmness. If you want to fill your world with artists, begin to paint. If you want to be valued, respect your own time. If you want to live ecstatically, find the ecstasy within yourself. This is how to draw it in, day by day, inch by inch. ~ Victoria Erickson",
                "It's a lot easier to be angry at someone than it is to tell them you're hurt. ~ Tom Gates",
                "Loneliness is a sign you are in desperate need of yourself. ~ Rupi Kaur",
                "If it doesn't challenge you, it won't change you. ~ Karen Civil",
                "People may not tell you how they feel about you, but they always show you. Pay attention. ~ Keri Hilson",
                "No amount of guilt can change the past, and no amount of worrying can change the future. Go easy on yourself. ~ Umar Ibn Al-Khattaab",
                "It just occurred to me that many people are actually afraid to heal because their entire identity is centered around the trauma they've experienced. They have no idea who they are outside of trauma and that unknown can be terrifying. ~ Ebonee Davis",
                "You know, sometimes all you need is twenty seconds of insane courage. Just literally twenty seconds of just embarrassing bravery. And I promise you, something great will come of it. ~ Benjamin Mee",
                "It's a lot easier to be angry at someone than it is to tell them you're hurt. ~ Tom Gates",
                "Sometimes I think I have felt everything I'm ever gonna feel. And from here on out, I'm not gonna feel anything new. Just lesser versions of what I've already felt. ~ Her (2013)",
                "How lucky I am to have something that makes saying goodbye so hard ~ Winnie the Pooh",
                "It is the time you have wasted for your rose that makes your rose so important. ~ Antoine de Saint-Exupéry, The Little Prince",
                "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven. ~ John Milton, Paradise Lost",
                "The way to love someone is to lightly run your finger over that person's soul until you find a crack, and then gently pour your love into that crack. ~ Keith Miller",
                "I think the reward for conformity is that everyone likes you except yourself. ~ Rita Mae Brown",
                "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy. ~ Robert Tew",
                "You do not become good by trying to be good, but by finding the goodness that is already within you, and allowing that goodness to emerge. ~ Eckhart Tolle",
                "As time goes on, you'll understand. What lasts, lasts; what doesn't, doesn't. Time solves most things. And what time can't solve, you have to solve yourself. ~ Haruki Murakami, Dance Dance Dance",
                "Everybody talks about wanting to change things and help and fix, but ultimately all you can do is fix yourself. And that's a lot. Because if you can fix yourself, it has a ripple effect. ~ Rob Reiner",
                "No amount of guilt can change the past, and no amount of worrying can change the future. Go easy on yourself. ~ Umar Ibn Al-Khattaab",
                "Why do you put your self~esteem in the hands of complete strangers? ~ Helena Bonham Carter",
                "I want to be like water. I want to slip through fingers, but hold up a ship. ~ Michelle Williams",
                "I want to be around people that do things. I don't want to be around people anymore that judge or talk about what people do. I want to be around people that dream and support and do things. ~ Amy Poehler",
                "Be confident enough to know that you're original and different from everyone else. Be humble enough to know that that doesn't mean that you're better than anyone else. ~ R.L.",
                "You shouldn't try to stop everything from happening. Sometimes you're supposed to feel awkward. Sometimes you're supposed to be vulnerable in front of people. Sometimes it's necessary because it's all part of you getting to the next part of yourself, the next day. ~ Cecelia Ahern, The Book of Tomorrow",
                "If giving leaves you feeling empty, you're giving too much to the wrong person. ~ Maza Dohta",
                "I myself am made entirely of flaws, stitched together with good intentions. ~ Augusten Burroughs, Magical Thinking",
                "And then my soul saw you and it kind of went 'Oh there you are. I've been looking for you.' ~ pleasefindthis, I Wrote This For You",
                "If you only read the books that everyone else is reading, you can only think what everyone else is thinking. ~ Haruki Murakami, Norwegian Wood",
                "I can bear any pain as long as it has meaning. ~ Haruki Murakami, 1Q84",
                "If you remember me, then I don't care if everyone else forgets. ~ Haruki Murakami, Kafka on the Shore",
                "Whenever I look at the ocean, I always want to talk to people, but when I'm talking to people, I always want to look at the ocean. ~ Haruki Murakami, Hear the Wind Sing",
                "A wound is a place where light enters your soul. ~ Jalal ad-Din Muhammad Balkhi",
                "You are not a drop in the ocean. You are the entire ocean in a drop. ~ Jalal ad-Din Muhammad Balkhi",
                "Wherever you are, and whatever you do, be in love. ~ Jalal ad-Din Muhammad Balkhi",
                "I would like to be known as an intelligent woman, a courageous woman, a loving woman, a woman who teaches by being. ~ Maya Angelou",
                "I always did something I was a little not ready to do. I think that is how you grow. ~ Marissa Mayer",
                "Like a wild flower, she spent her days allowing herself to grow. Not many knew of her struggle, but eventually all knew of her light. ~ Niki Rowe",
                "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. ~ Maya Angelou",
                "You know who’s gonna give you everything? Yourself. ~ Diane Von Furstenberg",
                "Love is taking a few steps backward maybe even more… to give way to the happiness of the person you love. ~ Winnie the Pooh",
                "I think we dream so we don’t have to be apart so long. If we’re in each other’s dreams we can be together all the time. ~ A. A. Milne, Winnie the Pooh",
                "Some people care too much. I think it’s called love. ~ A. A. Milne, Winnie the Pooh",
                "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you. ~ A. A. Milne, Winnie the Pooh",
                "A little consideration, a little thought for others, makes all the difference. ~ A. A. Milne, Winnie the Pooh",
                "Nobody can be uncheered with a balloon. ~ A. A. Milne, Winnie the Pooh",
                "A day spent with you is my favorite day. So today is my new favorite day. ~ A. A. Milne, Winnie the Pooh",
                "Why, sometimes I've believed as many as six impossible things before breakfast. ~ Lewis Carroll, Alice in Wonderland",
                "If everybody minded their own business, the world would go around a great deal faster than it does. ~ Lewis Carroll, Alice in Wonderland",
                "I can’t go back to yesterday because I was a different person then. ~ Lewis Carroll, Alice in Wonderland",
                "If you’ll believe in me, I’ll believe in you. Is that a bargain? ~ Lewis Carroll, Alice in Wonderland",
                "If the person you are talking to doesn't appear to be listening, be patient. It may simply be that he has a small piece of fluff in his ear. ~ A.A. Milne, Winnie-the-Pooh",
                "Don’t ever let somebody tell you you can’t do something, not even me. Alright? You dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it. Period. ~ The Pursuit of Happyness (2006)",
                "Great men are not born great, they grow great. ~ The Godfather (1972)",
                "Some people can’t believe in themselves until someone else believes in them first. ~ Good Will Hunting (1997)",
                "I just wanted you to know there will be a piece of you in me always, and I'm grateful for that. ~ Her (2013)",
                "I feel like I can be anything with you. ~ Theodore, Her (1997)",
                "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it. ~ Ferris Bueller’s Day Off (1986)",
                "You know, the ancient Egyptians had a beautiful belief about death. When their souls got to the entrance to heaven, the guards asked two questions. Their answers determined whether they were able to enter or not. ‘Have you found joy in your life?’ ‘Has your life brought joy to others?’ ~ The Bucket List (2007)",
                "Oh yes, the past can hurt. But you can either run from it, or learn from it. ~ The Lion King (1994)",
                "So, this is my life. and i want you to know that i am both happy and sad and i’m still trying to figure out how that could be. ~ The Perks of Being a Wallflower (2012)",
                "You don’t need the whole world to love you. Just a few good people. ~ The Greatest Showman (2017)"
            ]
        },
    },


    // Define start sequence.
    start: function() {
        Log.info("Starting module: " + this.name);

        this.lastQuoteIndex = -1;

        // Schedule update timer.
        var self = this;
        setInterval(function() {
            self.updateDom(self.config.fadeSpeed * 1000);
        }, this.config.updateInterval * 1000);
    },

    /* randomIndex(quotes)
     * Generate a random index for a list of quotes.
     *
     * argument quotes Array<String> - Array with quotes.
     *
     * return Number - Random index.
     */
    randomIndex: function(quotes) {
        if (quotes.length === 1) {
            return 0;
        }

        var generate = function() {
            return Math.floor(Math.random() * quotes.length);
        };

        var quoteIndex = generate();

        while (quoteIndex === this.lastQuoteIndex) {
            quoteIndex = generate();
        }

        this.lastQuoteIndex = quoteIndex;

        return quoteIndex;
    },

    /* quoteArray()
     * Retrieve an array of quotes from the catalog.
     *
     * return quotes Array<String> - Array with quotes from the catalog.
     */
    quoteArray: function() {
        return this.config.quotes[Object.keys(this.config.quotes)[Math.floor(Math.random() * Object.keys(this.config.quotes).length)]];
    },

    /* randomQuote()
     * Retrieve a random quote.
     *
     * return quote string - A quote.
     */
    randomQuote: function() {
        var quotes = this.quoteArray();
        var index = this.randomIndex(quotes);
        return quotes[index].split(" ~ ");
    },

    // Override dom generator.
    getDom: function() {
        var quoteText = this.randomQuote();

        var qMsg = quoteText[0];
        var qAuthor = quoteText[1];

        var wrapper = document.createElement("div");

        var quote = document.createElement("div");
        quote.className = "bright medium light";
        quote.style.textAlign = 'center';
        quote.style.margin = '0 auto';
        quote.style.maxWidth = '50%';
        quote.innerHTML = qMsg;

        wrapper.appendChild(quote);

        var author = document.createElement("div");
        author.className = "light small dimmed";
        author.innerHTML = "~ " + qAuthor;

        wrapper.appendChild(author);

        return wrapper;
    }

});