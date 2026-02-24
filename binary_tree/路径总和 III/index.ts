import { TreeNode } from '../treeNode'

// function pathSum(root: TreeNode | null, targetSum: number): number {
//     let count = 0
//     const findTargetSum = (root: TreeNode | null): number => {
//         if (!root) return 0
//         const leftVal = findTargetSum(root?.left)
//         const rightVal = findTargetSum(root?.right)
//         const leftAndMidVal = root.val + leftVal
//         const rightAndMidVal = root.val + rightVal
//         if (leftAndMidVal === targetSum) count++
//         if (rightAndMidVal === targetSum) count++
//         return leftAndMidVal,rightAndMidVal
//     }
//     return count
// }

// 采用前缀和的思想来解决
function pathSum(root: TreeNode | null, targetSum: number): number {
    let count = 0
    // 维护一个 MAP 作为前缀和
    // key:之前所有可能和，val:和出现的次数
    const prefix = new Map<number, number>()
    prefix.set(0, 1) // 初始化
    const dfsNode = (root: TreeNode | null, curSum: number) => {
        if (!root) return
        curSum += root.val
        // need 的计算顺序很重要
        // 题目要求的是二叉树的连接节点的总和符合，并不要求开始计算的节点是根点，可以是整个树中的其中一片
        // curSum 代表着从根节点到当前节点的和（当然是特定路径的）
        // targetSum 可能只需要其中一段，不一定需要所有的
        // 所以应该是 curSum - targetSum
        // const need = targetSum - curSum
        const need = curSum - targetSum
        // 差值匹配
        if (prefix.has(need)) count += prefix.get(need)

        // 为该 key 的值加一，为后续遍历该节点的子节点提供 curSum
        prefix.set(curSum, (prefix.get(curSum) ?? 0) + 1)

        dfsNode(root.left, curSum)
        dfsNode(root.right, curSum)

        // 递归回退到父节点进行 curSum 次数减一
        // 避免其他兄弟节点将此作为一个前缀
        prefix.set(curSum, prefix.get(curSum) - 1)

    }
    dfsNode(root, 0)
    return count
};
