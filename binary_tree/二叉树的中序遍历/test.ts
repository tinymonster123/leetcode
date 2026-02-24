import { TreeNode } from '../treeNode'

function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = []
    const findChild = (root: TreeNode | null) => {
        if (!root) return
        findChild(root.left)
        res.push(root.val)
        findChild(root.right)
    }
    findChild(root)
    return res
};