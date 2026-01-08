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
