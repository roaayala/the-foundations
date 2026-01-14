const sumAll = function (x, y) {
	let sum = 0;

	if (
		x < 0 ||
		y < 0 ||
		typeof x !== 'number' ||
		typeof y !== 'number' ||
		!Number.isInteger(x) ||
		!Number.isInteger(y)
	) {
		return 'ERROR';
	}

	if (x < y) {
		for (let i = x; i <= y; i++) {
			sum += i;
		}
	}

	if (x > y) {
		for (let i = x; i >= y; i--) {
			sum += i;
		}
	}

	return sum;
};
console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
