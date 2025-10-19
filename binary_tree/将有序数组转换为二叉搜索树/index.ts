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
	// 当新传入的 nums 长度为 0 时则返回 null
	if (!nums.length) return null;
	const leftIndex: number = 0,
		rightIndex: number = nums.length - 1;
	const midIndex: number = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
	const leftArr = nums.slice(leftIndex, midIndex),
		rightArr = nums.slice(midIndex + 1, rightIndex + 1);
	const root: TreeNode | null = new TreeNode(nums[midIndex]);
	const leftNode = sortedArrayToBST(leftArr);
	const rightNode = sortedArrayToBST(rightArr);
	root.left = leftNode;
	root.right = rightNode;
	return root;
}
