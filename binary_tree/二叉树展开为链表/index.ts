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

/**
 Do not return anything, modify root in-place instead.
 */

// function flatten(root: TreeNode | null): void {
// 	const treeNodes = [];
// 	const frontTraverse = (root: TreeNode | null) => {
// 		if (!root) return;

// 		treeNodes.push(root);
// 		frontTraverse(root.left);
// 		frontTraverse(root.right);
// 	};
// 	frontTraverse(root);
// 	const len = treeNodes.length;
// 	treeNodes[len] = null;
// 	for (let i = 0; i < len; i++) {
// 		treeNodes[i].left = null;
// 		treeNodes[i].right = treeNodes[i + 1];
// 	}
// }

// 原地法
// 根据前序遍历中子树最右边的元素一定是一次前序遍历后的最后一次元素，所以将整个右子树插入到左子树最右边的元素（前提是存在）
// 然后不断的将右子树嫁接到左子树最右边的元素当中
function flatten(root: TreeNode | null): void {
	if (!root) return;
	let currNode: TreeNode | null = root;
	let next: TreeNode | null;
	while (currNode) {
		next = currNode?.left;
		if (next) {
			while (next?.right) next = next.right; // 如果存在左子树，找到左子树中最右边的节点
			next.right = currNode.right; // 将右子树嫁接到左子树的最右节点
			currNode.right = currNode.left; // 将左子树移到右子树
			currNode.left = null; // 还需要将遍历后的 currNode 置空
		}
		currNode = currNode.right;
	}
}
