const { time } = require("../common");

time(() => {
	const isPalindromeNumber = (n) => {
		const reversedNumber = Number(n.toString().split('').reverse().join(''));

		return reversedNumber == n;
	}

	let record = 0;

	for (let a = 999; a > 99; a--) {
		for (let b = a; b > 99; b--) {
			if (isPalindromeNumber(a * b) && a * b > record) {
				record = a * b;
			}
		}
	}

	console.log(record);
});