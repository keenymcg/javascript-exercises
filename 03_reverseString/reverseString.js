
const reverseString = function(string) {
    return string.split("").reverse().join("");
}

reverseString("hello");

/*    
ACTUAL SOLUTION
return givenPhrase.split("").reverse().join("");

TECHNICALLY THIS WORKS, not sure why testing says it doesn't
const string = "hello world"
const reverseString = function() {
    let phraseArray = string.split("");
    // console.log(phraseArray);
    let reverseArray = phraseArray.reverse();
    // console.log(reverseArray);
    let newRevString = reverseArray.join("");
    // console.log(newRevString);
    return newRevString;

TRYING to have the string iterate through indicies to the negative length of the string
let backWards = ''
    for (i = 0; i > givenPhrase.length * -1; i--) {
        backWards = givenPhrase.charAt[i - 1];
    }
    console.log(backWards)
};

reversePhrase = reverseString();
console.log(reversePhrase); */

// Do not edit below this line
module.exports = reverseString;
