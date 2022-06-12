/*
Given an array, return the first item and shift the left array to the right
and resize the array after removing the item
const arr = ["a", "b", "c", "d"]
"a" => ["b", "c", "d"]]
 */

function shift(array) {
    var firstItem = array[0];
    for (var i = 1; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    array.length = array.length - 1;
    return firstItem;
}

const arr = ["a", "b", "c", "d"];
const firstItem = shift(arr);

console.log({firstItem, arr});

//another solution, without changing the original array
//so when we console log arr, we will get the original array
// function shift2(array) {
//     var result = [];
//     for (var i = 1; i < array.length; i++) {
//         result.push(arr[i]);
//     }
//     return array[0];
// }

// const arr = ["a", "b", "c", "d"];
// const firstItem = shift2(arr);

// console.log({firstItem, arr});
