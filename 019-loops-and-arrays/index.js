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
console.log(favoriteItems);

let newFavoriteItems = 'My favorite items are ';
for (let i = 0; i < items.length; i++) {
	if (i === items.length - 1)
		newFavoriteItems = newFavoriteItems + ` ${items[i]}.`;
	else newFavoriteItems = newFavoriteItems + ` ${items[i]},`;
}
console.log(newFavoriteItems);

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
