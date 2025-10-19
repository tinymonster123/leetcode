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

function isValidBST(root: TreeNode | null): boolean {
	if (!root) return false;
	let isVaild: boolean = true;
	const vaildTheTree = (
		root: TreeNode | null,
		left: number = -Infinity,
		right: number = Infinity,
	) => {
		if (!root) return;
		const val = root.val;
		if (val <= left || val >= right) isVaild = false;
		vaildTheTree(root.left, left, val);
		vaildTheTree(root.right, val, right);
	};
	vaildTheTree(root);
	return isVaild;
}

// 先中序遍历后二分判断
// function isValidBST(root: TreeNode | null): boolean {
// 	if (!root) return false;
// 	const res: number[] = [];
// 	const middleTraverse = (root: TreeNode | null) => {
// 		if (!root) return;
// 		middleTraverse(root.left);
// 		res.push(root.val);
// 		middleTraverse(root.right);
// 	};
// 	middleTraverse(root);
// 	let isVaild: boolean = true;
// 	const binaryVaild = (arr: number[], low: number, high: number) => {
// 		if (low >= high) return;
// 		const mid = low + Math.floor((high - low + 1) / 2);
// 		if (isVaild && mid - 1 >= low && arr[mid] <= arr[mid - 1]) isVaild = false;
// 		if (isVaild && mid + 1 <= high && arr[mid] >= arr[mid + 1]) isVaild = false;
// 		binaryVaild(arr, low, mid - 1);
// 		binaryVaild(arr, mid + 1, high);
// 	};
// 	binaryVaild(res, 0, res.length - 1);
// 	return isVaild;
// }
