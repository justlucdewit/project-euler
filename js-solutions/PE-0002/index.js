const { time } = require("../common");

time(() => {
	const max = 4000000;
	let a = 1
	let b = 2
	let sum = 2

	while (a + b < max) {
		const newValue = a + b;
		if (newValue % 2 == 0)
			sum += newValue;

		a = b;
		b = newValue;
	}

	console.log(sum);
});