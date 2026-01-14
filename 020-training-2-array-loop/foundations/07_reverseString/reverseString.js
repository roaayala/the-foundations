const reverseString = function (string) {
	const split = string.split('');
	const reverse = split.reverse();
	const join = reverse.join('');
	return join;
};

// Do not edit below this line
module.exports = reverseString;
