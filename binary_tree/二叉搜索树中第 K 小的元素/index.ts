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

function kthSmallest(root: TreeNode | null, k: number): number {
	const res: number[] = [];
	const midTraverse = (root: TreeNode | null) => {
		if (!root) return;
		midTraverse(root.left);
		res.push(root.val);
		midTraverse(root.right);
	};
	midTraverse(root);
	return res[k - 1];
}
