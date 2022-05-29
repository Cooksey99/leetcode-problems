/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    // determine highest number in array
    let highest = [...candies].sort((a, b) => a - b).pop();
    
    return candies.map(candy => candy + extraCandies >= highest);
};