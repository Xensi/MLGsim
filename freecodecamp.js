function findLongestWord(str) {
    var string = str.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i < string.length - 1; i++) {
        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
            console.log(word);
            console.log(word.length);
        }
    }
    console.log(word);
    console.log(word.length);
    return word;
    
}

// findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");