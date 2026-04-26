function maxProduct(nums: number[]): number {
    // 需要使用两个变量
    // 因为有负数
    // 无法仅用一个变量来推断下一个变化
    let maxEndingHere: number = nums[0]
    let minEndingHere: number = nums[0]
    let maxVal: number = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        const prevMax = maxEndingHere
        const prevMin = minEndingHere
        maxEndingHere = Math.max(num, prevMax * num, prevMin * num)
        minEndingHere = Math.min(num, prevMax * num, prevMin * num)
        maxVal = Math.max(maxVal, maxEndingHere)
    }
    return maxVal
};