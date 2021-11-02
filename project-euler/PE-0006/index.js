const natural_numbers_until_n = n =>
    [...Array(n).keys()].map(x => x + 1);

const sum_of_the_squares_of_the_first_100_numbers =
    natural_numbers_until_n(100).map(x => x ** 2).reduce((a, b) => a + b)

const square_of_the_sum_of_the_first_ten_numbers =
    natural_numbers_until_n(100).reduce((a, b) => a + b) ** 2

console.log(square_of_the_sum_of_the_first_ten_numbers - sum_of_the_squares_of_the_first_100_numbers)