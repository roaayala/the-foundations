// LITERALS AND PROPERTIES
// const user = { name: 'roaayala', age: 27 };
// console.log(user);

// user.isAdmin = true; // add new property
// console.log(user);

// delete user.age; // delete property
// console.log(user);

// user['likes birds'] = false; // multiword key must be inside quoute and select with square bracket
// console.log(user['likes birds']);

// const key = 'name';
// console.log(user[key]); // handling dynamically object key using square bracket

// COMPUTED PROPERTIES or dynamic key
// example 1
// const key = 'banana';
// const bag = {};
// bag[key] = 5;
// console.log(bag);

// example 2
// const key = 'banana';
// const bag = {
// 	[key + 'Computers']: 5,
// };
// console.log(bag);

// PROPERTY VALUE SHORTHAND
// function makeUser(name, age) {
// 	return {
// 		name: name,
// 		age: age,
// 	};
// }

// function makeUser(name, age) {
// 	return {
// 		name, // same as name: name
// 		age, // same as age: age
// 	};
// }

// const user = makeUser('Roaayala', 27);
// console.log(user);
