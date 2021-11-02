const { is_pyth_triplet } = require("../common");

for (let c = 1000; c > 0; c--) {
    for (let b = c; b > 0; b--) {
        for (let a = b; a > 0; a--) {
            if (is_pyth_triplet(a, b, c) && a + b + c === 1000)
                console.log(a * b * c)
        }
    }
}