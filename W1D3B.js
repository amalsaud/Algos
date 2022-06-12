/* 
ََQ2
Given an array of numbers,
return a count of even numbers.
expectedValue2 = 3
*/

var arr = [1,2,3,4,5,6];

function evensCounter(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            counter += 1;
        }
    }
    return counter;
}

console.log("In array " +arr+ " there is " +evensCounter(arr)+ " even numbers.");