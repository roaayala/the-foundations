const repeatString = function (string, times) {
	let output = '';

	if (times === 0 || string === '') {
		output = '';
	} else if (times < 0) {
		output = 'ERROR';
	} else {
		for (let i = 1; i <= times; i++) {
			output += string;
		}
	}

	return output;
};

// Do not edit below this line
module.exports = repeatString;
