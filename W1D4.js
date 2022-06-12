/* 
    create a method called slice that cuts a portion of the array
    example:
    given arr ["a", "b", "c", "d"]
    using splice method splice(arr, 2), 2 is the starting index
    expected output ["b", "c", "d"]

    given a function that takes 3 parameters
    1) the array
    2) start index
    3) end index 
    slice(arr, 1, 2)
*/

// var arr = ["a", "b", "c", "d"];

// function splice(arr, index) {
//     var result = [];

//     if (index == undefined || index < 0) {
//         index = 0;
//     }

//     for (var i = index; i < arr.length; i++) {
//         result.push(arr[i]);
//     }
//     return result;
// }

// console.log(splice(arr, 2));

var arr = ["a", "b", "c", "d", "d"];

function slice(arr, index, endIndex) {
    var result = [];

    if (endIndex == undefined || endIndex > arr.length) {
                endIndex = arr.length - 1;
            }

    for (var i = index; i <= endIndex; i++) {
        result.push(arr[i]);
    }
    return result;
}

console.log(slice(arr, 1));
