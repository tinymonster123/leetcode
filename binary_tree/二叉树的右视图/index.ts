import { TreeNode } from '../treeNode'

// 每层最右边的节点就是右视图的可观测节点
// function rightSideView(root: TreeNode | null): number[] {
// 	if (!root) return []
// 	const res: number[] = []
// 	const treeNodeQueue: TreeNode[] = [root]
// 	let popupNode: TreeNode
// 	while (treeNodeQueue.length) {
// 		const len = treeNodeQueue.length
// 		for (let i = 0; i < len; i++) {
// 			popupNode = treeNodeQueue.shift()
// 			if (i === len - 1) res.push(popupNode.val)
// 			if (popupNode.left) treeNodeQueue.push(popupNode.left)
// 			if (popupNode.right) treeNodeQueue.push(popupNode.right)
// 		}
// 	}
// 	return res
// };

// dfs 写法
function rightSideView(root: TreeNode | null): number[] {
	if (!root) return []
	const res: number[] = []
	const dfs = (node: TreeNode | null, depth: number) => {
		if (!node) return
		// 维护一个 depth 来比较与当前的 res 长度
		// 可以处理左子树比右子树深度更大的情况
		if (depth === res.length) res.push(node.val)
		dfs(node.right, depth + 1)
		dfs(node.left, depth + 1)
	}
	dfs(root, 0)
	return res
};