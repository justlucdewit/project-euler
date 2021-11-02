const { range, isPrime } = require("../common");

// - generate a range from 3 to 1999999 with step 2
// - filter to only keep the primes
// - add them all together
const answer = range(3, 1999999, 2)
    .filter(isPrime)
    .reduce((a, b) => a + b)

// add 2 because 2 was not in range (the only even prime)
console.log(answer + 2)