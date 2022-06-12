/* this given array has a length of 3, because it has 3 arrays as items
make all 3 arrays in one array
const twoDimArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
*/

const twoDimArr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

function flattenArray(array) {
    var result = [];
    for (var i = 0; i < array.length; ++i) {
        for (var j = 0; j < array[i].length; ++j) {
            result.push(array[i][j]);
        }
    }
    return result;
}

console.log(flattenArray(twoDimArr1));