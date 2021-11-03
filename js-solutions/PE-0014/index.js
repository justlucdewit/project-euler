const { time, range, collatzSequenceCount } = require("../common");

time(() => {
    const result = range(1, 999999)
        .map(x => ({
            value: x,
            collatzSteps: collatzSequenceCount(x)
        }))
        .select_max(x => x.collatzSteps);

    console.log(result.value);
});