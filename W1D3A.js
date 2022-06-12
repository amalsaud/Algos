/*
Q1 
Given an array of numbers,
return a count of how many numbers are negative.
expectedValue = 2
*/

var arr = [1, 2, -1, -2, 3, 4, 5];

function negativesCounter(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter += 1;
        }
    }
    return counter;
}

console.log("In array " +arr+ " there is " +negativesCounter(arr)+ " negative numbers.");
