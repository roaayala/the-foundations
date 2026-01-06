// const cars = ['sedan', 'coupe', 'suv'];

// pop/push, shift/unshift
// pop: extract last element, and return it
// push: add the new element to the end of the array
// shift: extract first element and return it
// unshift: add the new element to the beginning of the array

// task 1
const cars = ['sedan', 'coupe', 'suv'];
const wishlist = cars;
wishlist.push('truck');
// console.log(cars.length); // 4

// task 2
const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
styles[1] = 'classics';
styles.shift();
styles.unshift('rap', 'reggae');
// console.log(styles);

// task 3
const arr = ['a', 'b'];

arr.push(function () {
	// console.log(this);
});

arr[2]();

// task

function whatType(x) {
	return typeof x;
}

function sumInput() {
	let numbers = [];

	while (true) {
		const userInput = prompt('Enter a number');

		if (userInput === null || userInput.trim() === '') {
			break;
		}

		if (isNaN(userInput)) {
			break;
		} else {
			numbers.push(Number(userInput));
		}
	}

	let total = 0;
	for (let i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}

	return total;
}
// console.log(sumInput());
