let inspirator = {
    strategies: [],
    quotes: [],
    jokes: [],
    randItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    randMsg() {
        let randStrategy = this.randItem(this.strategies);
        let randQuote = this.randItem(this.quotes);
        let randJoke = this.randItem(this.jokes);

        let msg = `Oblique Strategy:\n${randStrategy}\n\nQuote:\n${randQuote} \n\nFor a Laugh:\n${randJoke}`
        return msg;
    }

}

inspirator.strategies = ['State the problem in words as clearly as possible', 'What are you really thinking about just now? Incorporate', 'Be less critical more often', 'Go to an extreme, move back to a more comfortable place', 'Once the search is in progress, something will be found', 'Would anybody want it?'];

inspirator.quotes = ['Simplicity is the ultimate sophistication. – Leonardo da Vinci', 'If I’m gonna tell a real story, I’m gonna start with my name. – Kendrick Lamar', 'Oh, the things you can find, if you don’t stay behind. – Dr. Seuss'
];

inspirator.jokes = ['Crime in multi-storey car parks. That is wrong on so many different levels. - Tim Vine', 'I have downloaded this new app. Its great, it tells you what to wear, what to eat and if you’ve put on weight. Its called the Daily Mail. - Hayley Ellis', 'When I was younger I felt like a man trapped inside a woman’s body. Then I was born. - Yianni'
];

console.log(inspirator.randMsg());