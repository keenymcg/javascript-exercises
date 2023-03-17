const fibonacci = function(member) {
    let fibArray = [0, 1, 1];
    for (let i = 3; i < 50; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    // console.log(fibArray);

    let userInput = parseInt(member);
    if (userInput < 0) {
        return "OOPS"
    } else {
        return fibArray[userInput]
        //console.log(fibArray[userInput])
    }
};

// fibonacci(6);

// 
// put every fibonacci number into an array, led by 0 & 1 (so that user indices choose the right member of the array)
// have the user parameter pull the index of that array


// Do not edit below this line
module.exports = fibonacci;
