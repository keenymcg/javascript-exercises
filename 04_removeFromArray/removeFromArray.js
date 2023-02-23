
const removeFromArray = function(array, ...elemToRemove) {
  // create a new empty array
    const newArray = [];
  // use forEach to go through the array
    array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
        if (!elemToRemove.includes(item)) {
            newArray.push(item);
        }
    });
  // and return that array
    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2)); 

/* 
ANOTHER SOLUTION; ADVANCED

var removeFromArray = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}


FOR SOME REASON THIS RETURNS THE ARRAY CORRECTLY, BUT THE NPM TEST RETURNS THE ARRAY 3 TIMES
let newArray = []

const removeFromArray = function(array, elemToRemove) {
    for (let elem of array) {
        if (elem === elemToRemove) {
            continue;
        } else {
            newArray += elem;
        }
    }
    return newArray.split('');
};

removeFromArray([1, 2, 3, 4], 3); 
*/

// Do not edit below this line
module.exports = removeFromArray;
