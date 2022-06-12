/* case insensitive string compare 
https://gist.github.com/afathallah40/4532af46b38e00999a0a07a83d72a985
*/

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;


/**
 * Determines whether or not the strings are equal, ignoring case.
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {
    if (strA.length != strB.length) {
        return false;
    }

    return strA.toLowerCase() === strB.toLowerCase()
}

console.log(caseInsensitiveStringCompare(strA1, strB1));