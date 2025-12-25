// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// quiz 1
function checkAge(age) {
	if (age > 18) {
		return true;
	}
	return false;
}
// console.log(checkAge(17));

// quiz two
const age = 19;
const isAdult = age > 18 ? true : false;
// console.log(isAdult);

const isAdultTwo = age > 18 || false;
// console.log(isAdultTwo);

// quie three
function min(x, y) {
	if (x > y) {
		return y;
	} else {
		return x;
	}
}
// console.log(min(2, 5) == 2);
// console.log(min(3, -1) == -1);
// console.log(min(1, 1) == 1);

// 1
function add7(x) {
	return x + 7;
}
console.log(add7(20));

// 2
function multiply(x, y) {
	return x * y;
}
console.log(multiply(5, 4));

// 3
function capitalize(word) {
	const length = word.length;
	const firstLetter = word[0].toUpperCase();
	const restofTheLetter = word.slice(1, length).toLowerCase();
	return firstLetter + restofTheLetter;
}

console.log(capitalize('KLSDFSDF'));

// 4
function lastLetter(word) {
	return word[word.length - 1];
}

console.log(lastLetter('skldsadfasdfasdfalkdjasdfasd'));
