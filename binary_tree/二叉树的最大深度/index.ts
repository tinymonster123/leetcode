import type { TreeNode } from "../treeNode";
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

// function maxDepth(root: TreeNode | null): number {
// 	if (!root) return 0;
// 	const dfs = (root: TreeNode | null, depth: number): number => {
// 		if (!root) return depth;
// 		return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1));
// 	};

// 	return dfs(root, 0);
// }

function maxDepth(root: TreeNode | null): number {
	if (!root) return 0;
	let leftMax = maxDepth(root.left);
	let rightMax = maxDepth(root.right);
	return Math.max(leftMax, rightMax) + 1;
}
