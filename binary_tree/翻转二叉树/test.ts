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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null
    const reverseTreeNode = (root: TreeNode | null) => {
        if (!root) return
        const tempLeft = root?.left
        root.left = root?.right
        root.right = tempLeft
        reverseTreeNode(root?.left)
        reverseTreeNode(root?.right)
    }
    reverseTreeNode(root)

    return root
};