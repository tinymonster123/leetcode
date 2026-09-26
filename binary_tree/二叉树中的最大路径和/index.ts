import { TreeNode } from "../treeNode"
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
    let maxSum: number = -Infinity

    const gain = (root: TreeNode | null): number => {
        if (!root) return 0
        const leftResult = Math.max(0, gain(root.left))
        const rightResult = Math.max(0, gain(root.right))

        maxSum = Math.max(maxSum, root.val + leftResult + rightResult)

        return Math.max(leftResult, rightResult) + root.val
    }

    gain(root)

    return maxSum
};