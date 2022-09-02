/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const result = [];
    
    nums.forEach(num => {
        if (num % 2 === 0) result.unshift(num);
        else result.push(num);
    });
    
    return result;
};