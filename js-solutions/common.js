Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b);
}

Array.prototype.select_max = function (predicate = (x) => x) {
    let max_predicate_value = null;
    let max_value = null;

    this.forEach(val => {
        predicate_value = predicate(val);

        if (predicate_value > max_predicate_value || max_predicate_value == null) {
            max_predicate_value = predicate_value;
            max_value = val;
        }
    });

    return max_value;
}

Array.prototype.select_min = function (predicate = (x) => x) {
    let min_predicate_value = null;
    let min_value = null;

    this.forEach(val => {
        predicate_value = predicate(val);

        if (predicate_value < min_predicate_value || min_predicate_value == null) {
            min_predicate_value = predicate_value;
            min_value = val;
        }
    });

    return min_value;
}

const range = (start, stop, step = 1) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;

    return n > 1;
};

const isPythTriplet = (a, b, c) => Math.sqrt(a ** 2 + b ** 2) === c;

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

const collatzSequence = (n) => {
    const acc = [n];

    while (n !== 1) {
        // collartz alg
        n = n % 2 == 0 ? n / 2 : 3 * n + 1;
        acc.push(n);
    }

    return acc
};

const collatzSequenceCount = (n) => {
    let acc = 0;

    while (n !== 1) {
        // collartz alg
        n = n % 2 == 0 ? n / 2 : 3 * n + 1;
        ++acc;
    }

    return acc;
};

module.exports = { range, isPrime, isPythTriplet, nthTriangleNum, divisors, divisorsCount, time, collatzSequence, collatzSequenceCount }
