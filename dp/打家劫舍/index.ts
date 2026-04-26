function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    const dp: number[] = Array(nums.length).fill(0)
    dp[1] = nums[0]
    for (let i = 1; i <= nums.length; i++) {
        // nums 中的索引比 dp 中少 1
        dp[i] = Math.max((dp[i - 1] ?? 0), (dp[i - 2] ?? 0) + nums[i - 1])
    }
    return dp[nums.length]
};