import { TreeNode } from "../treeNode"
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let preorderIndex: number = 0

    const buildTree = (left: number, right: number): TreeNode | null => {
        if (left > right) return null
        const rootVal = preorder[preorderIndex++]
        const rootIndex = inorder.indexOf(rootVal)

        const leftNode = buildTree(left, rootIndex - 1)
        const rightNode = buildTree(rootIndex + 1, right)
        const root = new TreeNode(rootVal)

        root.left = leftNode
        root.right = rightNode

        return root
    }

    return buildTree(0, preorder.length - 1)
};