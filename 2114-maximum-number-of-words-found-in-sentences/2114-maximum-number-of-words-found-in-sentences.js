/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    let highest = [null, 0];
    
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].split(' ').length > highest[1]) highest = [i, sentences[i].split(' ').length];
    }
    
    return highest[1];
};