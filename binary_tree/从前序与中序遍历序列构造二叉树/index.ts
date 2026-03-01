import { TreeNode } from '../treeNode'

// 超过时间限制了，使用了大量的 slice 和 includes 会造成时间复杂度变为 O(n^2)
// function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
//     if (!preorder.length) return null
//     const root = new TreeNode(preorder[0])
//     if (preorder.length === 1) return root
//     const inorderIdx = inorder.indexOf(preorder[0])
//     const leftInorder = inorder.slice(0, inorderIdx)
//     const rightInorder = inorder.slice(inorderIdx + 1)
//     const leftPreorder: number[] = []
//     const rightPreorder: number[] = []
//     for (let i = 0; i < preorder.length; i++) {
//         if (leftInorder.includes(preorder[i])) leftPreorder.push(preorder[i])
//         if (rightInorder.includes(preorder[i])) rightPreorder.push(preorder[i])
//     }

//     const leftNode = buildTree(leftPreorder, leftInorder)
//     const rightNode = buildTree(rightPreorder, rightInorder)
//     root.left = leftNode
//     root.right = rightNode
//     return root
// };

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length) return null
    const idxMap = new Map<number, number>()
    for (let i = 0; i < inorder.length; i++) {
        idxMap.set(inorder[i], i)
    }
    let preIndex = 0
    const build = (inLeft: number, inRight: number) => {
        // 递归终止条件：区间为空
        if (inLeft > inRight) return null
        const rootVal = preorder[preIndex++]
        const root = new TreeNode(rootVal)
        const rootIdx = idxMap.get(rootVal)!
        root.left = build(inLeft, rootIdx - 1)
        root.right = build(rootIdx + 1, inRight)
        return root
    }

    return build(0, inorder.length - 1)
};