const { time, range, wordifyNumber } = require("../common");

time(() => {
    let answer = range(1, 1000)
        .map(wordifyNumber)
        .join`\n`
        .split``
        .filter(x => /[a-zA-Z]/g.test(x))
        .join``
        .length;

    console.log(answer)
});