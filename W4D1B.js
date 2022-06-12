// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/*
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
https://gist.github.com/afathallah40/614e5ef557dc92561953e28a633c08ec
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

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


function oddOccurrencesInArray(nums) {
    var obj = makeFrequencyTable(nums)
    for (var i in obj) {
        if (obj[i] % 2 == 1) {
            return i;
        }
    }
    return null;
}


console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
console.log(oddOccurrencesInArray(nums4), "should equal", expected4);