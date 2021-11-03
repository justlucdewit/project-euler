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

const factorial = n => n == 1 ? n : n * factorial(n - 1);

const aChooseB = (a, b) => {
    return factorial(a) / (factorial(b) * factorial(a - b))
}

// Only works for numbers 0 - 1000 (inclusive)
const wordifyNumber = n => {
    baseNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    }

    baseNumbers2 = {
        1: null,
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    }

   baseNumber2Exceptions = {
       0: "ten",
       1: "eleven",
       2: "twelve",
       3: "thirteen",
       4: "fourteen",
       5: "fifteen",
       6: "sixteen",
       7: "seventeen",
       8: "eighteen",
       9: "nineteen",
   }

    if (n === 1000) {
        return "one thousand"
    }

    n = n.toString();
    buffer = "";

    if (n.length === 3) {
        buffer += `${baseNumbers[Number(n[0])]} hundred`

        if (Number(n[1]) > 1) {
            buffer += ` and ${baseNumbers2[Number(n[1])]}`;

            if (Number(n[2]) > 0) {
                buffer += `-${baseNumbers[Number(n[2])]}`
            }
        } else if (Number(n[1]) === 0 && Number(n[2]) !== 0) {
            buffer += ` and ${baseNumbers[Number(n[2])]}`;
        } else if (!(Number(n[1]) === 0 && Number(n[2]) === 0)){
            buffer += ` and ${baseNumber2Exceptions[Number(n[2])]}`
        }
    } else if (n.length === 1) {
        buffer += baseNumbers[Number(n[0])]
    } else if (n.length === 2) {
        if (Number(n[0] > 1)) {
            buffer += baseNumbers2[Number(n[0])];

            if (Number(n[1] > 0)) {
                buffer += `-${baseNumbers[Number(n[1])]}`
            }
        } else {
            buffer = baseNumber2Exceptions[Number(n[1])]
        }
    }

    return buffer;
}

module.exports = { range, isPrime, isPythTriplet, nthTriangleNum, divisors, divisorsCount, time, collatzSequence, collatzSequenceCount, aChooseB, factorial, wordifyNumber }
