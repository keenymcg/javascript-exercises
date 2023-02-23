const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let newString = ''
    let i = 0
    while (i < num) {
        newString += string;
        i++
    }
    return newString
};

testTest = repeatString('hey', 3);

/* ALTERNATE CODE but doesn't work with "ERROR"
let newString = string.repeat(num, 'ERROR')
return newString; */

// Do not edit below this line
module.exports = repeatString;
