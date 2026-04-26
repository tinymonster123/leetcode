// 类似前缀和，但是有区别
// 前缀和是在累加一个确定值
// 这里是在维护“一堆可能性”
// dp[j] = true 表示：用已经遍历过的那些数，能不能凑出和 j
// 状态方程：dp[j] = dp[j] || dp[j - x]
function canPartition(nums: number[]): boolean {
	const sum = nums.reduce((a, b) => a + b, 0)
	if (sum % 2 !== 0) return false
	const target = sum / 2
	const dp: boolean[] = Array(target + 1).fill(false)
	// 如果都不进行数据取值，那就是可以构造，无论如何都可以
	dp[0] = true
	for (const num of nums) {
		for (let j = target; j >= num; j--) {
			dp[j] = dp[j] || dp[j - num]
		}
		if (dp[target]) return true
	}
	return dp[target]
};