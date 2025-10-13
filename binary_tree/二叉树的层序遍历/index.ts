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

function levelOrder(root: TreeNode | null): number[][] {
	if (!root) return [];
	const treeNodeQueue: TreeNode[] = [root],
		results: number[][] = [];
	let popOutTreeNode: TreeNode,
		levelSize: number,
		levelResults: number[] = [];
	while (treeNodeQueue.length) {
		levelSize = treeNodeQueue.length;
		for (let i = 0; i < levelSize; i++) {
			popOutTreeNode = treeNodeQueue.shift();
			levelResults.push(popOutTreeNode.val);
			if (popOutTreeNode.left) treeNodeQueue.push(popOutTreeNode.left);
			if (popOutTreeNode.right) treeNodeQueue.push(popOutTreeNode.right);
		}
		results.push(levelResults);
		levelResults = [];
	}
	return results;
}
