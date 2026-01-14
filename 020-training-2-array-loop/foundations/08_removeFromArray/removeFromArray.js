const removeFromArray = function (arr, ...target) {
	return arr.filter((number) => !target.includes(number));
};

// Do not edit below this line
module.exports = removeFromArray;
