function canJump(nums: number[]): boolean {
    const len = nums.length

    let farthest: number = 0

    for (let i = 0; i < len; i++) {
        if (i > farthest) return false
        farthest = Math.max(farthest, nums[i] + i)
        if (farthest >= len - 1) return true
    }

    return true
};