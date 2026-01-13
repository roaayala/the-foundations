// splice: delete an item from the array an return deleted item
// let arr = [1, 2, 3, 4, 1];
// arr.splice(1, 1); // start at index 1, and remove just one item
// console.log(arr);

// arr.splice(0, 3, 4, 5); // start at index 0, remove three items, and replace with following items
// console.log(arr);

// arr.splice(2, 0, 5, 6); // start index from 2, dont remove anything, and replace with following items
// console.log(arr);

// arr.splice(-1, 0, 5, 6); // start last index, dont remove anything and replace with following items
// console.log(arr);

// slice
// console.log(arr.slice(2, 4)); // extract item from after index 2 to index 4
// console.log(arr.slice(-1));

// concat

// forEach
// arr.forEach((item, index, array) => {
// 	console.log(`${item} is at index ${index} in ${array}`);
// });

// indexOf/lastIndexOf and includes
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(6));
// console.log(arr.includes(1));
// console.log(arr.includes(6));
// console.log(arr.indexOf(1));
// console.log(arr.lastIndexOf(1));

// find, findIndex and findLastIndex: return item of matching condition
// const users = [
// 	{ id: 1, name: 'john' },
// 	{ id: 2, name: 'pete' },
// 	{ id: 3, name: 'mary' },
// 	{
// 		id: 4,
// 		name: 'john',
// 	},
// ];

// const result = users.find((item, index, array) => {});

// const user = users.find((item) => item.id === 2);
// console.log(user);

// console.log(users.findIndex((user) => user.name === 'john'));
// console.log(users.findLastIndex((user) => user.name === 'john'));

// filter: return array of matching conditions
// const users = [
// 	{ id: 1, name: 'john' },
// 	{ id: 2, name: 'pete' },
// 	{ id: 3, name: 'mary' },
// ];
// const result = users.filter((item, index, array) => {});
// const filterUsers = users.filter((item) => item.id < 10);
// console.log(filterUsers);

// // map: do transformation to all items of array and return the results
// const users = ['ahmad', 'roaayala', 'rizky', 'bandhang'];
// // const result = users.map((item, index, array) => {});
// console.log(users.map((item) => item.length));

// // sort: mutate the array, and sorts the array items and changingn its element order
// const numbers = [1, 100, 234, 8];
// function numberComparation(x, y) {
// 	const a = Number(x);
// 	const b = Number(y);

// 	if (a > b) return 1;
// 	if (a === b) return 0;
// 	if (a < b) return -1;
// }

// // console.log(numbers.sort(numberComparation));
// numbers.sort((a, b) => {
// 	console.log(a + '-' + b);

// 	return a - b;
// });
// console.log(numbers);

// reverse
// const users = ['ahmad', 'roaayala', 'rizky', 'bandhang'];
// console.log(users.reverse());

// split and join
// const users = 'Ahmad, Roaayala, Rizky, Bandhang';

// const arr = users.split(', ');
// console.log(arr);

// for (const user of arr) {
// 	console.log(`Message to ${user}`);
// }

// const string = 'STRING';
// console.log(string.split(''));

// const user1 = ['ahmad', 'roaayala', 'rizky', 'bandhang'];
// console.log(user1.join(' '));

// reduce
// const value = arr.reduce(
// 	function (accumulator, item, index, array) {
// 		// ...
// 	},
// 	[initial]
// );

// const arr = [3, 4, 5, 6, 7];
// const result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);

// task

// // my answer
// function camelize(string) {
// 	// split to array
// 	const stringToArray = string.split('');

// 	// index of all "-"
// 	const indexes = stringToArray.reduce((acc, current, index) => {
// 		if (current === '-') {
// 			acc.push(index);
// 		}
// 		return acc;
// 	}, []);
// 	console.log(indexes);

// 	indexes.forEach((index) => {
// 		// every char after "-" camelize it
// 		if (stringToArray[index]) {
// 			stringToArray[index + 1] = stringToArray[index + 1].toUpperCase();

// 			// remove "-"
// 			stringToArray[index] = '';
// 		}
// 	});

// 	const result = stringToArray.join('');

// 	return result;
// }
// console.log(camelize('string-to-array'));
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

// // given answer
// function camelized(str) {
// 	return str
// 		.split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
// 		.map(
// 			// capitalizes first letters of all array items except the first one
// 			// converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
// 			(word, index) =>
// 				index == 0 ? word : word[0].toUpperCase() + word.slice(1)
// 		)
// 		.join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
// }

// task 2
// my answer
// const arr = [5, 3, 8, 1];
// function filterRange(array, min, max) {
// 	return array.reduce((acc, curr) => {
// 		if (curr >= min && curr <= max) {
// 			acc.push(curr);
// 		}
// 		return acc;
// 	}, []);
// }
// const filtered = filterRange(arr, 1, 4);
// console.log(arr);
// console.log(filtered);

// given answer
// function filterRange(arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter(item => (a <= item && item <= b));
// }

// task 3

// // my answer
// const arr = [5, 3, 8, 1, 4, 5, 2, 3];

// function filterRangeInPlace(arr, min, max) {
// 	arr.forEach((item, index) => {
// 		if (!(item >= min && item <= max)) {
// 			arr.splice(index, 1);
// 		}
// 	});
// }

// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// // given answer
// function filterRangeInPlace(arr, a, b) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let val = arr[i];

// 		// remove if outside of the interval
// 		if (val < a || val > b) {
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}
// }

// task 4
// const arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);

// console.log(arr);

// task 5
// my answer
// const arr = ['HTML', 'JavaScript', 'CSS'];

// function copySorted(arr) {
// 	return arr.toSorted();
// }
// const sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

// // given answer
// function copySorted(arr) {
// 	return arr.slice().sort();
// }

// task 7
// const john = { name: 'John', age: 25 };
// const pete = { name: 'Pete', age: 30 };
// const mary = { name: 'Mary', age: 28 };

// const users = [john, pete, mary];

// const names = users.map((user) => user.name);
// console.log(names);

// task 8
const john = { name: 'John', surname: 'Smith', id: 1 };
const pete = { name: 'Pete', surname: 'Hunt', id: 2 };
const mary = { name: 'Mary', surname: 'Key', id: 3 };

const users = [john, pete, mary];

const usersMapped = users.map((user) => {
	return { fullName: `${user.name} ${user.surname}`, id: user.id };
});
console.log(usersMapped);
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);
