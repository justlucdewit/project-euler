const { time, range, isAmicable } = require("../common");

time(() => {
    // - for all the number between 1 and 9999 inclusive
    // - filter to keep only amicable numbers
    // - sum all of those numbers together
    const result = range(1, 9999)
        .filter(isAmicable)
        .sum();

    // Thats the answer
    console.log(result);
});