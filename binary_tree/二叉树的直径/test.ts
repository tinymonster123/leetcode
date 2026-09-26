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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0
    let maxLen: number = 0
    const maxDepth = (root: TreeNode | null): number => {
        if (!root) return 0
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        maxLen = Math.max(left + right, maxLen)
        return Math.max(left, right) + 1
    }
    maxDepth(root)
    return maxLen
};