const { isPrime } = require("../common");

let n = 1;
let primes_found = 0;

while (true) {
    if (isPrime(n))
        ++primes_found;
    
    if (primes_found === 10000)
        break;

    n += 2; // We can skip 2 because a prime is never even
}

console.log(n)