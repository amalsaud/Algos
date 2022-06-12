/* 
  Array: Second-Largest
  Return the second-largest element of an array, or null if there is none.
  Bonus: do it with one loop and no nested loops
  example below
  const arr = [1,2,3,4,5]
  const expected = 4
  https://gist.github.com/afathallah40/57682c1913392d938034c4d78053aa46
*/

var array = [1, 2, 3, 4, 5];

function findSecondLargest(arr) {

    var largest = arr[0];
    var secondLargest = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(findSecondLargest(array));