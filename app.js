console.log('thy name is folly');

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(...nums) {
    return nums.reduce((acc, item) => acc * item);
  };

const divide = function(a, b) {
    return a / b;
}

const power = function(num, power) {
	return num ** power;
};