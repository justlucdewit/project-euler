const { time } = require("../common");

time(() => {
    const result = BigInt(2 ** 1000).toString().split('').map(Number).sum();
    console.log(result);
});