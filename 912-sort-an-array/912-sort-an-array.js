/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // return nums.sort()
     
    // using quick sort
//     if (nums.length === 1) return nums;
    
    
//     const pivot = nums[nums.length - 1];
//     const leftArray = [];
//     const rightArray = [];
    
    
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] < pivot) leftArray.push(nums[i]);
//         else rightArray.push(nums[i]);
//     }
    
//     if (leftArray.length > 0 && rightArray.length > 0) {
//         return [...sortArray(leftArray), pivot, ...sortArray(rightArray)];
//     } else if (leftArray.length > 0) {
//         return [...sortArray(leftArray), pivot];
//     } else {
//         return [pivot, ...sortArray(rightArray)];
//     }
    

   
    let quickSort = (arr) => {
        if (arr.length < 2) {
            return arr;
        }
        
        let pivot = Math.round(arr.length / 2);
        let left = arr.filter(e => e < arr[pivot]);
        let mid = arr.filter(e => e === arr[pivot]);
        let right = arr.filter(e => e > arr[pivot]);
        
        return [...quickSort(left), ...mid, ...quickSort(right)]
    }
    
    return quickSort(nums);
    
};