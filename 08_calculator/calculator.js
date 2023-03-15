const add = function(input1, input2) {
	return input1 + input2;
};

const subtract = function(input1, input2) {
	return input1 - input2;
};

const sum = function(input1) {
	return input1.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function(input1) {
  let multTotal = 1
  for (let x in input1) {
    multTotal *= input1[x];
  }
  return multTotal;
};

const power = function(input1, input2) {
	return input1 ** input2;
};

const factorial = function(input1) {
  if (input1 === 0 || input1 === 1) {
    return 1
  } else {
    for (let i = input1 - 1; i >= 1; i--) {
      input1 *= i;
    }
  }
  return input1;
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
