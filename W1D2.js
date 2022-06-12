/*
Given an array, move the minimum value to the front in-place
return the array after document.
No built in methods.

1) find the minimum value in the array
2) move the minimum value to the front of the array
https://gist.githubusercontent.com/afathallah40/efe95d1ac6929a34791d478afb7c433a/raw/5f20217290bf295a1a2f21e80c9cd9eb29b7514f/gistfile1.txt
*/

const arr = [6, 4, 5, 1, 3, 2];

function minToFront(arr) {
    if (arr.length == 1) {
        return arr;
    }

    var minIndex = getMinIndex(arr);
    var minValue = arr[minIndex];

    //shifting the array to the right
    for (var i = minIndex; i > 0; i--) {
        arr[i] = arr[i - 1]
    }
    //puth the min value in the begining of the array after shifting
    arr[0] = minValue;
    return arr;
}

function getMinIndex(arr) {
    var minValue = arr[0]
    var minIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

console.log(getMinIndex(arr));
console.log(minToFront(arr));

