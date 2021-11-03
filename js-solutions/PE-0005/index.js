const { time } = require("../common");

time(() => {
	for (let n = 10; true; n += 10) {
		let found = true;

		for (let i = 2; i <= 20; i++) {
			if (n % i !== 0) {
				found = false;
				break;
			}
		}

		if (found) {
			console.log(n)
			break;
		}
	}
});