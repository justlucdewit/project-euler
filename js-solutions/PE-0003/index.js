const { isPrime } = require("../common");

const n = 600851475143;

let i = 1;
while (true) {
	const potentialPrimeFactor = n / i;

	if (potentialPrimeFactor % 1 == 0 && isPrime(potentialPrimeFactor)) {
		console.log(potentialPrimeFactor);
		break;
	}

	++i;
}