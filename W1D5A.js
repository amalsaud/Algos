//https://gist.github.com/afathallah40/61fc917a2a186e2f2c07b4a5a8539acf
//Merge 2 Arrays 

var arr1 = ["a", "b", "c"];
var arr2 = ["c", "e", "f"];

function join(arr1, arr2) {
    var result = arr1;

    for (var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);

    }
    return result;
}

console.log(join(arr1, arr2));

