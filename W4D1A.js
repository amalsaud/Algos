/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
  https://gist.github.com/afathallah40/614e5ef557dc92561953e28a633c08ec
*/

const arr = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {resultect<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (result[item] !== undefined) {
            result[item] += 1;
        }
        else {
            result[item] = 1;
        }
    }
    return result;
}

console.log(makeFrequencyTable(arr));