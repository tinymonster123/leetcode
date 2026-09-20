function majorityElement(nums: number[]): number {
    let candidate: number = nums[0]
    let count: number = 0

    // 摩尔投票
    for (const num of nums) {
        if (count === 0) {
            candidate = num
        }
        count += candidate === num ? 1 : -1
    }

    return candidate
};