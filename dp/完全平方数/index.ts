// dp[i] = Math.min(dp[i - j*j] + 1, dp[i])（j*j <= i）
function numSquares(n: number): number {
    const dp: number[] = Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            // 先凑出一个 dp[i - j*j] 再补一个 j*j
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    return dp[n]
};