function lengthOfLIS(nums: number[]): number {
    const numsLen = nums.length
    const dp: number[] = Array(numsLen).fill(1)
    let maxLen: number = 1
    for (let i = 0; i < numsLen; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        maxLen = Math.max(maxLen, dp[i])
    }
    return maxLen
};