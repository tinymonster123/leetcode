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

function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefix = new Map<number, number>()
    let count: number = 0
    prefix.set(0, 1)

    const dfs = (root: TreeNode | null, curSum: number) => {
        if (!root) return
        curSum += root.val
        const need = curSum - targetSum
        if (prefix.has(need)) count += prefix.get(need)

        prefix.set(curSum, (prefix.get(curSum) ?? 0) + 1)
        dfs(root.left, curSum)
        dfs(root.right, curSum)
        prefix.set(curSum, prefix.get(curSum) - 1)
    }

    dfs(root, 0)
    return count
};