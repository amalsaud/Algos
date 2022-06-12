/*
    Given array that has arrays of integers, detect the maximum number in each of 
    those arrays and return an array of the maximum numbers
    for example given the below array
    const arr = [
        [3,4,5,6],
        [10,20,30],
        [7,8,9]
    ];
    expected output
    [6,30,9]
    bonus, add the maximum value to the begining of the array so the result become
    [30,6,9]
    https://gist.github.com/afathallah40/0e7532e2af33d2d8c7fa088287f55f05
*/

var arr = [[3, 4, 5, 6], [10, 20, 30], [7, 8, 9]];

function findMaxValue(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        var tempMax = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > tempMax) {
                tempMax = arr[i][j];
            }
        }
        result.push(tempMax);
    }
    return result;
}

console.log(findMaxValue(arr).sort());
