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

function kthSmallest(root: TreeNode | null, k: number): number {
    const nums: number[] = middle(root)
    return nums[k - 1]
};

function middle(root: TreeNode | null): number[] {
    const res: number[] = []
    const findMiddle = (root: TreeNode | null) => {
        if (!root) return
        findMiddle(root.left)
        res.push(root.val)
        findMiddle(root.right)
    }

    findMiddle(root)
    return res
}