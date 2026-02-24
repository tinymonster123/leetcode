import { TreeNode } from '../treeNode'

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []
    let res: number[][] = []
    // 从队列头部弹出的树节点
    let popOutTreeNode: TreeNode
    // 用于存储每层所有的树节点的数组
    let levelResults: number[] = []
    let levelSize: number = 0
    // 树节点队列
    const treeNodeQueue: TreeNode[] = [root]
    while (treeNodeQueue.length) {
        // 非常巧妙，每次只操作进行循环前队列长度的次数
        levelSize = treeNodeQueue.length
        for (let i = 0; i < levelSize; i++) {
            // 每次从队列弹出头部节点
            popOutTreeNode = treeNodeQueue.shift()
            levelResults.push(popOutTreeNode.val)
            // 从左到右按顺序将每层插入
            if (popOutTreeNode.left) treeNodeQueue.push(popOutTreeNode.left)
            if (popOutTreeNode.right) treeNodeQueue.push(popOutTreeNode.right)
        }

        res.push(levelResults)
        levelResults = []

    }
    return res
};