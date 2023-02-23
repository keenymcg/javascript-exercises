const sumAll = function(startNum, endNum) {
    const myArray = [];
    let firstNum = 0
    let secondNum = 0
    if (startNum > endNum) {
        firstNum = endNum;
        secondNum = startNum;
    }
    if (startNum < endNum) {
        firstNum = startNum;
        secondNum = endNum;
    }
    if (typeof(startNum) != 'number' || typeof(endNum) != 'number') {
        return 'ERROR'
    }
    for (i = firstNum; i <= secondNum; i++) {
        myArray.push(i);
    }
    let sumNum = 0;
    for (elem of myArray) {
        sumNum += elem;
    }
    if (sumNum >= 0) {
        return sumNum;
    }
    if (sumNum < 0) {
        return 'ERROR'
    }
};

sumAll(1, 4);

/* ODIN SOLUTION: More succinct, no need to make an array, but one negative parameter could still produce a positive sum, so the 
disqualification based on a negative parameter isn't the best solution

const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};
*/

// Do not edit below this line
module.exports = sumAll;
