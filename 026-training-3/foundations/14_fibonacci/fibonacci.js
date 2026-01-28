const fibonacci = function (x) {
	const arr = [0, 1];
	let res = 0;
	let target = 0;

	if (x < 0) {
		return 'OOPS';
	}

	if (x === 1 || x === '1') {
		return 1;
	}

	for (let i = 2; i <= x; i++) {
		res = arr[i - 2] + arr[i - 1];
		arr.push(res);
		target = arr[i];
	}

	return target;
};

// Do not edit below this line
module.exports = fibonacci;
