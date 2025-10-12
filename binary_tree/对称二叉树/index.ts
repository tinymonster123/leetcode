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

// 因为中序遍历不会记录节点为 null 的情况，所以失败了
// function invertTree(root: TreeNode | null): TreeNode | null {
// 	if (!root) return null;
// 	let temp: TreeNode | null = null;
// 	const invertLeftToRight = (root: TreeNode | null) => {
// 		if (!root) return;
// 		temp = root.left;
// 		root.left = root.right;
// 		root.right = temp;
// 		invertLeftToRight(root.left);
// 		invertLeftToRight(root.right);
// 	};
// 	invertLeftToRight(root);
// 	return root;
// }

// function middleFindTree(root: TreeNode | null): any[] {
// 	const results: any[] = [];
// 	const findTreeNode = (root: TreeNode | null) => {
// 		if (!root) return;
// 		findTreeNode(root.left);
// 		results.push(root.val);
// 		findTreeNode(root.right);
// 	};
// 	findTreeNode(root);
// 	return results;
// }

// function isSymmetric(root: TreeNode | null): boolean {
// 	if (!root) return false;
// 	root.left = invertTree(root.left);
// 	const leftResults = middleFindTree(root.left);
// 	const rightResults = middleFindTree(root.right);
// 	if (leftResults.length !== rightResults.length) return false;
// 	for (let i = 0; i < leftResults.length; i++) {
// 		if (leftResults[i] !== rightResults[i]) return false;
// 	}
// 	return true;
// }

function isMirror(a: TreeNode | null, b: TreeNode | null): boolean {
	if (!a && !b) return true; // 说明整棵树已经递归完毕了
	if (!a || !b) return false;
	if (a.val !== b.val) return false;
	return isMirror(a.left, b.right) && isMirror(a.right, b.left);
}

function isSymmetric(root: TreeNode | null): boolean {
	if (!root) return false;
	return isMirror(root.left, root.right);
}
