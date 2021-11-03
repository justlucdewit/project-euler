const range = (start, stop, step = 1) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;

    return n > 1;
};

const isPythTriplet = (a, b, c) => Math.sqrt(a ** 2 + b ** 2) === c;

Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b);
}

const nthTriangleNum = (n) => range(1, n).sum()

const divisors = (n) => {
    let acc = [];

    for (let i = Math.sqrt(n); i > 1; i--)
        if (n % i === 0)
            acc.push(i);

    return [n, ...acc, 1];
}

const divisorsCount = (n) => {
    let acc = 0;

    for (let i = 1; i < Math.ceil(Math.sqrt(n)); i++)
        if (n % i === 0)
            acc += Number.isInteger(Math.sqrt(n)) ? 1 : 2;

    return acc;
}

const time = (predicate, test_perf = 1) => {
    start = Date.now();

    for (let i = 0; i < test_perf; i++) {
        predicate();
    }

    timeDuration = Date.now() - start;

    if (test_perf > 1) {
        console.log(`Did ${test_perf} tests\nExecution took ${timeDuration / 1000 / test_perf}sec on avarage`)
    } else {
        console.log(`execution took ${timeDuration / 1000}sec`)
    }
}

module.exports = { range, isPrime, isPythTriplet, nthTriangleNum, divisors, divisorsCount, time }
