const n = 600851475143;

const isPrime = n => {
	for(let i = 2, s = Math.sqrt(n); i <= s; i++)
        if(n % i === 0) return false;

    return n > 1;
};

let i = 1;
while (true) {
	const potentialPrimeFactor = n / i;

	if (potentialPrimeFactor % 1 == 0 && isPrime(potentialPrimeFactor)) {
		console.log(potentialPrimeFactor);
		break;
	}

	++i;
}