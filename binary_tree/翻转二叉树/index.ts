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

function invertTree(root: TreeNode | null): TreeNode | null {
	if (!root) return null;
	let temp: TreeNode | null = null;
	const swapLeftAndRightValue = (root: TreeNode | null) => {
		if (!root) return;
		temp = root.left;
		root.left = root.right;
		root.right = temp;
		swapLeftAndRightValue(root.left); // 递归遗漏了
		swapLeftAndRightValue(root.right);
	};

	swapLeftAndRightValue(root.left);
	swapLeftAndRightValue(root.right);

	temp = root.left;
	root.left = root.right;
	root.right = temp;

	return root;
}
