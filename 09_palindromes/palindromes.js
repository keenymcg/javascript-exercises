const palindromes = function (palindrome) {
    let currentChar = "";
    let letterArray = [];
    let puncArray = [];
    let alphaCharUpper = ""

    for (let x in palindrome) {
        currentChar = palindrome.charAt(x);

        let pattern = /[a-zA-Z]/; // matches any letter in the English alphabet (uppercase or lowercase)
        if (pattern.test(currentChar)) {
            // console.log("The letter is in the English alphabet.");
            alphaCharUpper = currentChar.toUpperCase();
            letterArray.unshift(alphaCharUpper);
        } else {
            // console.log("The letter is not in the English alphabet.");
            puncArray.unshift(currentChar);
        }
    }
    let mergedArray = letterArray.concat(puncArray);
    let mergedString = mergedArray.join('');
    if (mergedString === palindrome.toUpperCase()) {
        // console.log(true);
        return true;
    } else {
        //console.log(false);
        return false;
    }
};

palindromes("OGGo!");

// try running the test again but with console.logs in the spec file to see the difference between the given and expected output
// todo: how to account for spaces between words? and commas?
    // maybe change spaces into a different character for the array, and then convert them back to spaces when going into string? Idfk...


// the problem with uppercase letters is that it's putting hte uppercase letter in the wrong spot
// If I simply need to return true, rather than the perfect string, then maybe I need to just make everything uppercase

// Do not edit below this line
module.exports = palindromes;
