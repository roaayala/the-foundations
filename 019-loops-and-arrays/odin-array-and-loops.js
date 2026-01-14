// As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:
// 1. Take in an array.
// 2. For every even number, it will triple it.
// 3. Then it will sum all those even numbers.

// use for loop
const array = [1, 2, 3, 4, 5, 6];
function sumOfTripledEvens(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			array[i] *= 3;
			sum += arr[i];
		}
	}
	return sum;
}
// console.log(sumOfTripledEvens(array));

// use map
// add one for each element
const array1 = [1, 2, 3, 4, 5, 6];
const mapArr = array1.map((item) => item + 1);

// use filter
// is odd
const array2 = [1, 2, 3, 4, 5, 6];
const filterArr = array2.filter((item) => item % 2 !== 0);

// use reduce
// total addition
const array3 = [1, 2, 3, 4, 5, 6];
const reduceArr = array3.reduce((total, current) => (total += current), 0);

// rewrite loops using map, filter, and reduce
const total = array
	.filter((item) => item % 2 === 0)
	.map((item) => item * 3)
	.reduce((total, current) => (total += current), 0);
console.log(total);
