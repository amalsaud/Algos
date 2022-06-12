/* 
    String: Reverse
    Given a string,
    return a new string that is the given string reversed
    var string1 = "abcd";
    var output = "dcba";
    https://gist.github.com/afathallah40/5e6b4e5dce36fe3611d4ce5aa76e8210

*/

var string1 = "abcd";

function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }
    return reversed;
    }

console.log(reverseString(string1));