const { time, bigint_factorial } = require("../common");

time(() => {
    const result = bigint_factorial(BigInt(100))
        .toString()
        .split``
        .map(Number)
        .sum()

    console.log(result);
});