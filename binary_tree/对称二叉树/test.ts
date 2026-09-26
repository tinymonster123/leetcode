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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return false
    return isMirror(root.left, root.right)
};

function isMirror(a: TreeNode | null, b: TreeNode | null): boolean {
    if (!a && !b) return true
    if (!a || !b) return false
    if (a.val !== b.val) return false
    return isMirror(a.left, b.right) && isMirror(a.right, b.left)
}