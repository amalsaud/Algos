/* Given an array, reverse the array and return the array after reversed
https://gist.github.com/afathallah40/61fc917a2a186e2f2c07b4a5a8539acf
*/

const arr = ["a", "b", "c", "d"]

function reverse(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; --i) {
        result.push(arr[i])
    }
    return result
}
console.log(reverse(arr))


/*
// Solution 2
const arr = ["a", "b", "c", "d", "e", "f", "z"]
function reverse(arr) {
    for(var i=0; i < Math.floor(arr.length/2); ++i) {
        var leftElement = arr[i];
        var rightElement = arr[arr.length - i - 1]
        console.log({index: i, leftElement, rightElement})
        arr[i] = rightElement
        arr[arr.length - i - 1] = leftElement;
    }
    return arr;
}
*/