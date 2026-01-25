// FIRST BITE
const person = {
	name: ['Ahmad', 'Roaayala'],
	age: 27,
	bio() {
		console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old!`);
	},
	introduceSelf() {
		console.log(`Hi! I'm ${this.name[0]}`);
	},
};
console.log(person.name[0], person.age);
person.bio();
person.introduceSelf();

// OBJECT PROPERTIES AND SQUARE BRACKET NOTATION
const personOne = {
	name: {
		first: 'Bob',
		last: 'Smith',
	},
};

console.log(personOne.name.first);
console.log(personOne.name['last']);

// SETTING OBJECT MEMBERS

// this IN OBJECT: referring to current object when the code belong.

// CONSTRUCTORS
// first version
function createPerson(name) {
	const obj = {};
	obj.name = name;
	obj.introduceSelf = function () {
		console.log(`Hello! I'm ${obj.name}.`);
	};
	return obj;
}

const personTwo = createPerson('Roaayala');
personTwo.introduceSelf();

// common version

function Person(name) {
	this.name = name;
	this.introduceSelf = function () {
		console.log(`Hello! I'm ${this.name}.`);
	};
}

const personThree = new Person('Ahmad');
personThree.introduceSelf();
