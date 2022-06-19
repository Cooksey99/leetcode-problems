/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    if (num[num.length - 1] % 2 !== 0) return num;
    else return largestOddNumber(num.slice(0, num.length - 1));
};