function minPathSum(grid: number[][]): number {

    // 记录行长度和列长度
    const rowLen = grid.length
    const colLen = grid[0].length
    const dp: number[][] = grid.map(row => Array(row.length))
    // 最小路径和的第一个值一定等于数组的第一个值
    dp[0][0] = grid[0][0]

    // 计算第一行每列的最小路径和
    for (let i = 1; i < colLen; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }

    // 计算第一列每行的最小路径和
    for (let i = 1; i < rowLen; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }

    // 计算内部每个位置的最小路径和
    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }

    return dp[rowLen - 1][colLen - 1]
};