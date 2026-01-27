const add = function (x, y) {
	return x + y;
};

const subtract = function (x, y) {
	return x - y;
};

const sum = function (arr) {
	let sum = 0;
	arr.forEach((x) => {
		sum += x;
	});
	return sum;
};

const multiply = function (arr) {
	let sum = 1;
	arr.forEach((x) => {
		sum *= x;
	});
	return sum;
};

const power = function (x, y) {
	let sum = 1;
	for (let i = 0; i < y; i++) {
		sum *= x;
	}
	return sum;
};

const factorial = function (x) {
	let sum = 1;
	for (let i = 1; i <= x; i++) {
		sum *= i;
	}
	return sum;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
