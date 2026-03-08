// function generateParenthesis(n: number): string[] {
//     const map = new Map<string, number>()
//     map.set('(', n)
//     map.set(')', n)
//     const res: string[] = []
//     const path: string[] = []
//     const dfs = () => {
//         if (path.length === n * 2) {
//             res.push(path.join(''))
//             return
//         }
//         if (map.get('(') === map.get(')')) {
//             path.push('(')
//             map.set('(', map.get('(')! - 1)
//             dfs()
//             path.pop()
//             map.set('(', map.get('(')! + 1)
//         } else if (map.get('(')! < map.get(')')!) {
//             path.push(')')
//             map.set(')', map.get('(')! - 1)
//             dfs()
//             path.pop()
//             map.set(')', map.get('(')! + 1)
//         }

//     }
//     dfs()
//     return res
// };

// 条件类型回溯
function generateParenthesis(n: number): string[] {
    const res: string[] = []
    const path: string[] = []
    const dfs = (leftRemain: number, rightRemain: number) => {
        if (path.length === n * 2) {
            res.push(path.join(''))
            return
        }
        if (leftRemain > 0) {
            path.push('(')
            dfs(leftRemain - 1, rightRemain)
            path.pop()
        }
        // 只有当 leftRemain 小于 rightRemain 时才会推入右括号
        if (leftRemain < rightRemain) {
            path.push(')')
            dfs(leftRemain, rightRemain - 1)
            path.pop()
        }
    }
    dfs(n, n)
    return res
};