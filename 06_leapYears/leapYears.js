// make a function that returns true/false which passes leapYears function inside as a child and runs that function first?
/* 
const leapYears = function(checkIfLeap) {
    checkIfLeap(year)
    if leapYearNum = 1
        return false
    if leapYearNum = 2
        return true
} */

const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

console.log(leapYears(1985));

// provide a year as a parameter
// if year parameter % 4 === 0, && 
// 

/*  FIRST CODE I TRIED, but logical errors because passing 2000 in returns False
const leapYears = function(year) {
    if (
        (year % 4 === 0 && year % 100 === 0)
        (year % 400 !== 0 && year % 100 === 0)
        ) {
            console.log(false)
            // return false
        }   
    else if (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0 && year %100 !== 0)
        ) {
            console.log(true)
            // return true
        }
};

SECOND CODE I TRIED: I tried to order the events so that as it passed through the conditionals, eventually a variable would store a
1 or 2 which would equate to True or False. But even if the variable is storing the "2" True number, it will return false if the "if 1"
conditional is first. I feel like I need to out the checkIfLeap conditions inside a separate function which is then called within the 
leapYears function

const leapYears = function(year) {
    let leapYearNum = 0
    if (year % 4 === 0 && year % 100 === 0) {
        leapYearNum = 1
        console.log(leapYearNum)
    }
    if (year % 4 === 0 && year % 100 !== 0) {
        leapYearNum = 2
        console.log(leapYearNum)
    }
    if (year % 100 === 0) {
        leapYearNum = 1
        console.log(leapYearNum)
    }
    if (year % 400 === 0) {
        leapYearNum = 2
        console.log(leapYearNum)
    }
    if (leapYearNum = 2) {
        return true
    }
    if (leapYearNum = 1) {
        return false
    }
};

*/

// Do not edit below this line
module.exports = leapYears;
