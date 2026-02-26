// function minimumTotal(triangle: number[][]): number {
//     const preSum = new Map<number, number>()
//     const len = triangle.length
//     preSum.set(-1, 0)
//     const dfs = (start: number, lastIdx: number) => {
//         for (let i = start; i < len; i++) {
//             const levelArr = triangle[i]
//             const maxIterable = Math.max(lastIdx + 1, levelArr.length - 1)
//             for (let j = lastIdx; j <= maxIterable; j++) {
//                 console.log(preSum.get(j), preSum.get(j - 1), j, j - 1)
//                 preSum.set(j, (preSum.get(j) ?? preSum.get(j - 1)) + levelArr[j])
//                 dfs(start + 1, j)
//                 preSum.set(j, preSum.get(j) - levelArr[j])
//             }
//         }
//     }
//     dfs(0, 0)
//     return Math.min(...Array.from(preSum.values()))
// }; 

// DFS 法
function minimumTotal(triangle: number[][]): number {
    if (!triangle || !triangle[0]) return 0
    let res = Infinity
    const dfs = (row: number, col: number, sum: number) => {
        sum += triangle[row][col]
        if (row === triangle.length - 1) {
            res = Math.min(sum, res)
            return
        }
        dfs(row + 1, col, sum)
        dfs(row + 1, col + 1, sum)
    }
    dfs(0, 0, 0)
    return res
};
