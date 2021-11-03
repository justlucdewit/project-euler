const { range, time } = require("../common");

time(() => {
    const sum_of_the_squares_of_the_first_100_numbers = 100 * (100 + 1) * (2 * 100 + 1) / 6

    const square_of_the_sum_of_the_first_ten_numbers =
        range(1, 100).reduce((a, b) => a + b) ** 2

    console.log(square_of_the_sum_of_the_first_ten_numbers - sum_of_the_squares_of_the_first_100_numbers)
});
