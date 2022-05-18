/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let totalSum = 0;
    const queue = [root];
    
    while(queue.length > 0) {
    // remove first element from queue and assign as currNode   
    const currNode = queue.shift();
        
    if(currNode.val >= low && currNode.val <= high) {
        totalSum += currNode.val;
    }
        
    if(currNode.left) queue.push(currNode.left);
    if(currNode.right) queue.push(currNode.right);
    }        
    return totalSum;
};