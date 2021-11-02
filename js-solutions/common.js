const range = (start, stop, step=1) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

const isPrime = n => {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false;

    return n > 1;
};

const is_pyth_triplet = (a, b, c) => Math.sqrt(a**2 + b**2) === c;

module.exports = { range, isPrime, is_pyth_triplet }
    