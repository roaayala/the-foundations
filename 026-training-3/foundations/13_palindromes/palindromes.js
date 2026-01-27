const palindromes = function (x) {
	const lowerCase = x.toLowerCase();

	const splitAndTrim = lowerCase
		.split('')
		.filter((x) => x !== ' ')
		.filter((x) => x !== '!')
		.filter((x) => x !== '.')
		.filter((x) => x !== ',');
	const join = splitAndTrim.join('');

	const reverse = splitAndTrim.reverse();
	const joinReverse = reverse.join('');

	return join === joinReverse ? true : false;
};
console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
