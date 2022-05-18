/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rangeSumBST(root *TreeNode, low int, high int) int {
    total := 0
    queue := []*TreeNode{root}
    
    for len(queue) > 0 {
        currNode := queue[0]
        queue = queue[1:]
        
        if currNode.Val >= low && currNode.Val <= high {
            total = total + currNode.Val
        }
        
        if currNode.Left != nil {
            queue = append(queue, currNode.Left)
        }
        if currNode.Right != nil {
            queue = append(queue, currNode.Right)
        }
    }
    return total
}
