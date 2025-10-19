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

// 尝试找出所有的父节点，但是没想到
// function lowestCommonAncestor(
// 	root: TreeNode | null,
// 	p: TreeNode | null,
// 	q: TreeNode | null,
// ): TreeNode | null {
// 	let res: TreeNode[] = [];
// 	const findTheSpecialNode = (root: TreeNode | null, target: TreeNode) => {
// 		if (root === target) return;
// 		if (!root) {
// 			res = [];
// 			return;
// 		}
// 		if (res.length) findTheSpecialNode(root.left, target);
// 		findTheSpecialNode(root.right, target);
// 	};
// }

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
): TreeNode | null {
	if (!root || root === p || root === q) return root;

	const leftResult = lowestCommonAncestor(root.left, p, q);
	const rightResult = lowestCommonAncestor(root.right, p, q);

	if (leftResult && rightResult) return root;
	if (leftResult) return leftResult;
	if (rightResult) return rightResult;
}
