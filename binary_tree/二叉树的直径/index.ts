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

// 虽然过了，但是遍历了两遍完全没有必要
// function maxDepth(root: TreeNode | null): number {
// 	if (!root) return 0;
// 	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// }

// function diameterOfBinaryTree(root: TreeNode | null): number {
// 	if (!root) return 0;
// 	let maxLen: number = 0;
// 	const findTreeNode = (root: TreeNode | null) => {
// 		if (!root) return;
// 		maxLen = Math.max(maxDepth(root.left) + maxDepth(root.right), maxLen);
// 		findTreeNode(root.left);
// 		findTreeNode(root.right);
// 	};
// 	findTreeNode(root);
// 	return maxLen;
// }

function diameterOfBinaryTree(root: TreeNode | null): number {
	if (!root) return 0;
	let maxLen: number = 0;
	const maxDepth = (root: TreeNode | null): number => {
		if (!root) return 0;
		let leftMax = maxDepth(root.left);
		let rightMax = maxDepth(root.right);
		maxLen = Math.max(leftMax + rightMax, maxLen);
		return Math.max(leftMax, rightMax) + 1;
	};
	maxDepth(root);
	return maxLen;
}
