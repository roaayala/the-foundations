// LOOPS FROM MDN
// Loop through an array
const items = ['book', 'pen', 'pencil', 'eraser', 'paper'];

// for of loop
for (const item of items) {
	// console.log(item);
}

// for loop
for (let i = 0; i < items.length; i++) {
	// console.log(items[i]);
}

// use case of for and for of loops
let favoriteItems = 'My favorite items are ';
for (const item of items) {
	favoriteItems = favoriteItems + ` ${item},`;
}
// console.log(favoriteItems);

let newFavoriteItems = 'My favorite items are ';
for (let i = 0; i < items.length; i++) {
	if (i === items.length - 1)
		newFavoriteItems = newFavoriteItems + ` ${items[i]}.`;
	else newFavoriteItems = newFavoriteItems + ` ${items[i]},`;
}
// console.log(newFavoriteItems);

// map
function toUpper(x) {
	return x.toUpperCase();
}
const upperItems = items.map((item) => toUpper(item));
// console.log(upperItems);

// map
function filterRule(x, y) {
	return x.startsWith(y);
}
const filteredItems = items.filter((item) => filterRule(item, 'p'));
// console.log(filteredItems);

// LOOPS from javascript.info
// last loop value
// let i = 3;

// while (i) {
// alert(i--);
// }
// 1, because 0 is falsy value in js

// output even numbers
// for (let i = 0; i <= 10; i++) {
// 	if (i % 2 === 0) console.log(i);
// }

// convert for to while
// let i = 0;
// while (i < 3) {
// 	console.log(i);
// 	i++;
// }

// repeat until the input is correct
// let num;

// do {
// 	num = prompt('Enter number greater than 100!', 0);
// } while (num <= 100 && num);

// output prime numbers
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

// const n = 100;
// function filterPrime(n) {
// 	let prime = '';
// 	for (let i = 2; i <= n; i++) {
// 		for (let j = 2; j < i; j++) {
// 			if (i % 2 === 0) continue;
// 			else prime = prime + `${i} `;
// 		}
// 	}
// 	return prime;
// }

// console.log(filterPrime(n));
