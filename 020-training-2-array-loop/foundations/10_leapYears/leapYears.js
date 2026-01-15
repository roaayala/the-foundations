// For example:
// 1996 year is a leap year because it is divisible by 4 and not by 100;
// 1800 year is not a leap year because it is divisible by 4, but also by 100 (and not by 400);
// 2000 year is a leap year because it is evenly divisible by 400.

const leapYears = function (x) {
	if (x % 4 === 0 && x % 100 !== 0) return true;

	if (x % 4 === 0 && x % 400 === 0) return true;

	if (x % 4 !== 0 || x % 100 === 0) return false;
};

// Do not edit below this line
module.exports = leapYears;
