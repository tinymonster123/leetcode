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

function isValidBST(root: TreeNode | null): boolean {
    let isValid: boolean = true
    const validTheTree = (root: TreeNode | null, left: number = -Infinity, right: number = Infinity) => {
        if (!root) return
        const val = root?.val
        if (val <= left || val >= right) isValid = false
        validTheTree(root?.left, left, val)
        validTheTree(root?.right, val, right)
    }

    validTheTree(root)

    return isValid
};