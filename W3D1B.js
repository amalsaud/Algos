/* 
    Acronyms
    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
    https://gist.github.com/afathallah40/5e6b4e5dce36fe3611d4ce5aa76e8210
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The acronym.
 */

function acronymize(str) {
    var words = str.split(' ');
    var output = "";

    for (var i = 0; i < words.length; ++i) {
        output += words[i].charAt(0);
    }

    return output.toUpperCase();
}

console.log(acronymize(str1));