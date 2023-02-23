/*
Because we are human, we want the result temperature to be rounded to one decimal place: i.e., 
convertToCelsius(100) should return 37.8 and not 37.77777777777778.

MATH
to Cel from Fahr = Cel * (9/5 + 32)
to Fahr from Cel = (Fahr - 32) * (5/9)
*/

// MY INITIAL SOLUTION WORKS IN ALMOST ALL CASES when using floor or ceiling
const convertToCelsius = function(fahr) {
  let newCel = (fahr - 32) * (5 / 9); // resulting float has many nums after decimal
  return Math.round(newCel * 10) / 10; // returns num with only 1 decimal afterward
};

const convertToFahrenheit = function(cel) {
  let newFahr = (cel * (9 / 5) + 32)
  return Math.round(newFahr * 10) / 10;
};

console.log(convertToCelsius(73));
console.log(convertToFahrenheit(24));


// ODIN SOLUTION - USES MATH.ROUND TO CHOOSE whether to round up or down
/*
const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};
*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
