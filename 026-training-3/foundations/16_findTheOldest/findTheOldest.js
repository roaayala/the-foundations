const findTheOldest = function (x) {
	return x.reduce((oldest, current) => {
		if (!current.yearOfDeath) {
			current.yearOfDeath = new Date().getFullYear();
		}
		const age = current.yearOfDeath - current.yearOfBirth;

		if (oldest.yearOfDeath - oldest.yearOfBirth > age) {
			oldest = oldest;
		} else {
			oldest = { ...current };
		}

		return oldest;
	}, {});
};

// Do not edit below this line
module.exports = findTheOldest;
