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
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
	if (!root) return [];
	const res: number[][] = [];
	const sum = (root: TreeNode | null, targetSum: number, path: number[]) => {
		if (!root) return;
		const remainSum = targetSum - root.val;
		path.push(root.val);

		if (!root.left && !root.right) {
			if (!remainSum) {
				res.push([...path]);
			}
			return;
		}

		const leftPath = [...path];
		const rightPath = [...path];

		sum(root.left, remainSum, leftPath);
		sum(root.right, remainSum, rightPath);
	};
	sum(root, targetSum, []);

	return res;
}
