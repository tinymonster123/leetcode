// 状态转移方程：dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
function generate(numRows: number): number[][] {
    const dp: number[][] = Array(numRows + 1)
    for (let i = 1; i <= numRows; i++) {
        dp[i] = Array(i).fill(1)
    }
    dp[1][0] = 1
    for (let i = 2; i <= numRows; i++) {
        for (let j = 0; j <= i - 1; j++) {
            dp[i][j] = (dp[i - 1][j] ?? 0) + (dp[i - 1][j - 1] ?? 0)
        }
    }
    dp.shift()
    return dp
};