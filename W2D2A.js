/* add an item at the begining of a given array
*/

function addItemInFront(arr, value) {
    for (var i = arr.length - 1; i >= 0; --i) {
        arr[i + 1] = arr[i];
    }
    arr[0] = value;
    return arr;
}

var arr = [1, 2, 3];
console.log(addItemInFront(arr, 4));