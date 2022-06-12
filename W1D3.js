/* 
Given an array and an item to search for,
return the index where the item is found,
return -1 to represent not found
*/

const arr = ["a", "b", "c", "d", "d"];

/* 
we need to search for an item in array,
so we need to look up all array elements until we find the element.
*/

//note: -1 means not found in array

function findIndex(arr, item) {
    var foundIndices = [];
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
            foundIndices[counter] = i; //instead of using push
            //foundIndices[foundIndices.length] = i; //without counter
            counter++;
        }
    }
    return foundIndices;
}

console.log(findIndex(arr, "d"));