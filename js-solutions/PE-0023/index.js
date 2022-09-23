const { time, range, isAmicable, isAbundant } = require("../common");

// All numbers about max_n can be written as the sum of to abundant numbers
const max_n = 28123;

time(() => {
    const abundantNumbersSet = range(1, max_n).filter(isAbundant);
		
	let sumOfAbundants = Array.from({ length: 28123 * 2 + 1 }, () => false);
	
	
	
	for (let i = 0; i < abundantNumbersSet.length; i++) {
		for (let j = 0; j <= i; j++) {
			sumOfAbundants[abundantNumbersSet[i] + abundantNumbersSet[j]] = true;
		}
	}
	
	let sum = 0;
	for (let i=1;i<30000;++i) {
		if (!sumOfAbundants[i])
			sum += i;
	}
	
	console.log(sum)
});