const { time, aChooseB } = require("../common");

time(() => {
    const n = 20;
    console.log(aChooseB(n * 2, n))
});