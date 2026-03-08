function threeSum(nums: number[]): number[][] {
    const res: number[][] = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const tempRes = nums[left] + nums[right] + nums[i]
            if (tempRes === 0) {
                res.push([nums[left], nums[right], nums[i]])
                left++
                right--
                while (nums[left] === nums[left - 1]) left++
                while (nums[right] === nums[right + 1]) right--
            } else if (tempRes > 0) {
                right--
            } else if (tempRes < 0) {
                left++
            }
        }
    }

    return res
};