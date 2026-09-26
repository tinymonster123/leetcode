import { TreeNode } from "../treeNode";
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null
    const leftIndex: number = 0
    const rightIndex: number = nums.length - 1
    const midIndex: number = leftIndex + rightIndex >> 1
    const leftNums: number[] = nums.slice(leftIndex, midIndex)
    const rightNums: number[] = nums.slice(midIndex + 1)

    const root: TreeNode = new TreeNode(nums[midIndex])
    const leftNode = sortedArrayToBST(leftNums)
    const rightNode = sortedArrayToBST(rightNums)

    root.left = leftNode
    root.right = rightNode

    return root
};