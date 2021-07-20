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
                "Keep Moving Forward. ~ Walt Disney", //1
                "Tell me, What is it your plan to do with your one, only one wild and precious life. ~ Mary Oliver" //2
                "Carpe Diem, Seize the day boys, Make your lives extraordinary. ~ Robin Williams", //3
                "Little things aren't so little, my friend. ~ Robin" //4
                "The job that you will have, may not have been invented yet. ~ Veritasium" //5
                "Stop living by default, start designing your life. ~ Trav Bell" //6
                "Don't climb the mountain so that people can see you. Climb the mountain so that you can see the world. ~ David McCullough Jr.(By Ridham)" //7
                "Be deliriously happy. ~ Joe Black" //8
                "Depth of the life is more important than the length of the life." // 9
                "All of us do not have an equal talent. Yet all of us have an equal opportunity to develop our talent.~ John F Cannedy" //10
                "Education is the movement from darkness to light. ~ Allan bloom" //11
                "Teenagers, there is more to life than scoring over 90% ~ Uddabh Bareli" //12
                "If most of us are ashamed of shabby clothes and shoddy furniture, letus be more ashamed of shabby ideas and shoddy philosophies. ~ Albert Einstein" //13
                "Today is difficult, tomorrow is much more difficult, the day after tomorrow is very beautiful, but most die tomorrow evening. ~ Jake ma" //14
                "And, when you want something, all the universe conspires in helping you to achieve it. ~ Paulo Coelho, The Alchemist" //15
                "The best partnership are built on forgiveness." //16
                "Before you eat, thank the people who prepared the meal, thank the ingredients, and thank the people you're about to enjoy the meal with." //17
                "The happiness of life is made up of the little charities of a kiss or smile, a kind look, a heartfelt compliment. ~ Samuel Taylor Coleridge" //18
                "Knowledge is riches. You can't be poor as long as you have knowledge." //19
                "The best revenge is not to be like that. ~ Marcus Aurelius" //20
                "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." //21
                "THERE IS A RELIGION ABOVE ALL RELIGION THAT IS HUMANITY." //22
                "When I grow up i want to be me." //23
                "The next time you see someone new, remember: This person wishes to be happy, safe, healthy, and loved, just like me" //24
                "With mirth and laughter let old wrinkles come. ~ William Shakespeare" //25
                "Don’t judge each day by the harvest you reap but by the seeds that you plant ~ Robert Louis Stevenson" //26
                "I am very happy because I have conquered myself and not the world. I am very happy because I have loved the world and not myself. ~ Sri Chinmoy" //27
                "Earth provide enough to satisfy every man's needs, but not every man's greed. ~ MKG" //28
                "whenever life turns down, just remember the sentence - This Too Shall Pass" //29
                "Sui generis is a Latin phrase that means 'of its own kind'; in a class by itself; unique." // 30 
                "A number of disciplines use the term to refer to unique entities." //31
                "Beauty lies in the eyes." //32
                "I wil always remember that, Let not my winged days, be spent in vain" //33
                "And miles to go before sleep" //34
                "Time tests everything and everyone." //35
                "The difference between animals and humans is they don't have a teacher apart from nature. ~ Sagar" //36
                "Love is not something that you do, it is the way you are. ~ Sadguru" //37
                "Be less curious about people and more curious about ideas. ~ Marie Curie" //38
                "Have no fear of perfection; you’ll never reach it. Nothing in life is to be feared; it is only to be understood. ~ Marie Curie" //39
                "Life is a verb, it is not a noun.." //40
                "The simplicity is elegant." //41
                "Life is hard , but u have to be harder. Never give up." //42
                "Seize the day, put very little trust in tomorrow (the future)." //43
                "Please, don't worry so much. Because in the end, none of us have very long on this Earth. Life is fleeting. And if you're ever distressed, cast your eyes to the summer sky when the stars are strung across the velvety night. And when a shooting star streaks through the blackness, turning night into day... make a wish and think of me. Make your life spectacular. I know I did. ~ Robin Williams" //44 
                "Words are for meaning: when you've got the meaning, you can forget the words. ~ Zhuangzi" //45 
                "You will soon meet your maker, sooner or later😉. ~ Sagar" //46
                "Life is itself has no meaning, Life is an opportunity to create meaning." //47
                "Science, my lad, is made up of mistakes, but they are mistakes which it is useful to make, because they lead little by little to the truth” ~ Jules Verne" //48
                "Art is I; science is we ~ Claude Bernard" //49
                "One never notices what has been done; one can only see what remains to be done ~ Marie Curie" //50 
                "Improvement makes straight roads: but the crooked roads without Improvement are roads of Genius ~ William Blake" //51
                "Only knowledge that is used sticks in your mind ~ Dale Carnegie" //52
                "I don't think there's anything like saving someone's life to bring you satisfaction and happiness ~ Stephanie Kwolek" //53
                "Dignity on Death" //54
                "Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each. ~ Plato" //55 
                "Life's most persistent and urgent question is, What are you doing for others? ~ Martin Luther King Jr" //56 
                "Meaning can easily be confused with structure. Structure is a good approximation, but not the same ~ Claudia Perlich" //57 
                "They say that when a man is born - the sky is falling soul and breaks into two parts. One part goes to the women and one for men. The meaning of life is to find the other half. Catches of his own soul." //58
                "Our ingress into the world was naked and bare; our progress through the world is trouble and care; our egress from the world will be nobody knows where; but if we do well here we shall do well there. ~ Henry Wadsworth Longfellow" //59
                "LIVING LIFE WITH TOTAL ABANDON." //60
                "Most people are other people. Their thoughts are someone else’s opinions, their lives a mimicry, their passions a quotation." //61
                "If you understand others you are smart. If you understand yourself you are illuminated. If you overcome others you are powerful. If you overcome yourself you have strength. If you know how to be satisfied you are rich. If you can act with vigor, you have a will. If you don't lose your objectives you can be long-lasting. If you die without loss, you are eternal. ~ Lao Tzu, Tao Te Ching" //62
                "A wise, well educated and worthy son alone is enough to bring glory to the family like the lonely moon is enough to benighted the night with charms! ~ Chanakya" //63
                "Children are similar to clay. The form they ultimately assume, will depend on how they were moulded in their youth. ~ Chanakya" //64
                "No man can escape the consequences of his actions. One's actions will chase one like a persistent shadow. Chanakya" //65
                "One who is search of knowledge should give up the search of pleasure and the one who is in search of pleasure should give up the search of knowledge. ~ Chanakya" //66
                "There is no present or future of the lazy. ~ Chanakya" //67
                "Do not hesitate in getting nectar even from poison if it be available and gold even from the filth. Accept good knowledge even from a pariah and good girl even from a low family. ~ Chanakya" //68
                "I say never be complete, I say stop being perfect, I say let's evolve, let the chips fall where they may. ~ Tyler Durden, Fight Club" //69
                "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan.And guess what they have planned for you? Not much. ~ Jim Rohn" //70
                "Let others lead small lives, but not you. Let others argue over small things, but not you. Let others cry over small hurts, but not you. Let others leave their future in someone else's hands, but not you. ~ Jim Rohn" //71
                "uccess is not to be pursued; it is to be attracted by the person you become. ~ im Rohn" //72
                "Be not just a being, instand, Be a wonderful human being" //73
                "Whatever is your Area Of engagement, You involve yourself in that, If you do your best with what's happening today, Tomorrow will be better. ~ Sadguru" //74
                "With the details of today, will determine the quality of Tomorrow. ~ Sadguru" //75
                "Excellence only comes when you do something that truly resonates with your soul. ~ Gaur Gopal Das" //76
                "Give a man a mask, and he’ll show you his true face. ~ Oscar Wilde" //77
                "The Engineer has been, and is a maker of the history. ~ james kipfinre" //78
                "Nonsense and beauty have close connections. ~ E.M. Forster" //79
                "It is a miracle that curiosity survives formal education. ~ Albert Einstein" //80
                "You are never alone and helpless. The force that guides the stars guides you, too. ~ Shree Anandamurty" //81
                "And somewhere there are engineers Helping others fly faster than sound. But, where are the engineers Helping those who must live on the ground? ~ Young Oxfam Poster" //82
                "A Million Books for a Billion People" //83
                "Work, but let not the action or the thought produce a deep impression on the mind. Let the ripples come and go, let huge actions proceed from the muscles and the brain, but let them not make any deep impression on the soul." //84               -Class on Karma Yoga. New York, December 20, 1895. Complete Works, 1. 56.﻿
                "But those who always worship Me with exclusive devotion, meditating on My transcendental form – to them I carry what they lack, and I preserve what they have. ~ BG 9.22" //85
                "On books and friends I spend my money; For stones and bricks I haven't any. ~ Ruskin Bond, Rain In The Mountains" //86
                "Before you say something just remember..it takes a moment to Break but an entire lifetime to make..." //87
                "Kidnapping Dr. Pavel. It doesn't matter who we are, What matters is our plan... No one cared who I was 'til I put on the mask...  ~ Bane" //88
                "शिक्षक कभी साधारण नहीं होता, प्रलय और निर्माण उसकी गोद में पलते हैं। ~ आचार्य चाणक्य" //89
                "मैं इस देश में पैदा हुआ हूँ और इस देश के कण कण पर मेरा भी अधिकार है .. इससे मुझे कोई वंचित नहीं कर सकता !! अखंड भारत मेरा लक्ष्य है!! ~ आचार्य चाणक्य" // 90 
                "एक राष्ट्र जीवन मे व्यक्ति मां के साथ-साथ संस्कृति के गर्भ से भी जन्म लेता है।" // 91
                "हिमालयं समारभ्य यावत् इंदु सरेावरम् | तं देवनिर्मितं देशं हिंदुस्थानं प्रचक्षते ||" //92
                "દરેક દિવસે જીત તો નથી થતી....પણ દરેક દિવસે કરેલી મહેનત જીત તરફ જરૂર લઈ જાય છે.." //93
                "पराजित राज्य तब तक पराजित नहीं होता है, जब तक वो अपने मूल्यों की रक्षा कर पाता है!" //94
                "Character is manufacturered by karma. ~ Karma yoga" //95
                "Do not be a person who knows a thousands of quotes, and doesn't follows any of one, be a person, who knows a handful of one, but apply those tremendously in his own life. ~ Sagar" //96
                "क्रोध के बोझ को मनं पे उठाये काहे चलता है प्राणी, क्षमा जो शत्रु को भी कर दे, वही मुक्त है, वही ज्ञानी." //97
                "The secret of success is to do the common things uncommonly well. ~ John D. Rockefeller" //98
                "It's hard to do a really good job on anything you don't think about in the shower.  ~ Paul Graham" //99                                                                                                .
                "How you make others feel about themselves says a lot about you. ~ Unknown" //100
                "101 quotes" //101 pending
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
        quote.className = "bright small light";
        quote.style.textAlign = 'justify';
        quote.style.margin = '0 auto';
        quote.style.maxWidth = '400px';
        quote.innerHTML = qMsg;

        wrapper.appendChild(quote);

        var author = document.createElement("div");
        author.className = "light small dimmed";
        author.innerHTML = "~ " + qAuthor;

        wrapper.appendChild(author);

        return wrapper;
    }

});
