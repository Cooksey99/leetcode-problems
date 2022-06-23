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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    if (root === null) return null;
    
    let queue = [root];
    let values = [];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        values.push(node.val);
        
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }
    
    let sorted = values.sort((a, b) => a - b);
    return sorted[k - 1];
};