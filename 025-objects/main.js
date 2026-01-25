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

// PROPERTY NAMES LIMITATIOS

// in operator

// loop inside object using for in
// if the key are using integer, than sorting descending automatically, if this behavior want to avoid then stringify the key

// TASK 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// TASK 2
function isEmpty(object) {
	return Object.keys(object).length === 0;
}

const schedule = {};
console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';
console.log(isEmpty(schedule));

// TASK 3
const salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let totalSalaries = 0;

for (const salary in salaries) {
	if (Object.keys(salaries).length !== 0) {
		totalSalaries += salaries[salary];
	}
}

console.log(totalSalaries);

// TASK 4
// before the call
function multiplyNumeric(object) {
	for (const key in object) {
		if (typeof object[key] === 'number') {
			object[key] *= 2;
		}
	}
}

const menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};
console.log(menu);

multiplyNumeric(menu);

console.log(menu);
