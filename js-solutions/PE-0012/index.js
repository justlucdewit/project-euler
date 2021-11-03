const { divisorsCount, time } = require("../common");

time(() => {
    let i = 1;
    let biggest = 0;

    while (true) {
        const n = i * (i + 1) / 2;
        const divisorsc = divisorsCount(n);

        if (divisorsc > 500)
            break;

        ++i;
    }

    const n = i * (i + 1) / 2;
    console.log(n);
});


