/* 
    Given a string x, capitlize every word in the string and return it
    so, given string text
    const text = "hello world from javascript"
    Expected output " Hello World From Javascript"
 */

    text = "hello world from javascript";

    function capitlizeFirstLette(text) {
        var firstLetter = text[0].toUpperCase();
        var restOfTheWord = text.slice(1);
        return firstLetter + restOfTheWord;
    }
    
    function capitlizeEveryWord(text) {
        var words = text.split(" ");
        var result = [];
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var capitlizedword = capitlizeFirstLette(word);
            result.push(capitlizedword);
        }
        return result.join(" ");
    }
    
    console.log(capitlizeEveryWord(text));
    