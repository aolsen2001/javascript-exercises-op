const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach((n) => {
    sum += n;
  });
  return sum; 
};

const multiply = function(nums) {
  let product = 1;
  nums.forEach((n) => {
    product *= n;
  });
  return product; 
};

const power = function(base, exp) {
	let pow = 1;
  for (let i = 0; i < exp; ++i) {
    pow *= base;
  }
  return pow;
};

const factorial = function(num) {
	let factorial = 1;
  for (let i = num; i > 0; --i) {
    factorial *= i;
  } 
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
