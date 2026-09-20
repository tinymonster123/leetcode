function singleNumber(nums: number[]): number {
    let res: number = 0
    for (const num of nums) {
        // 异或运算
        res ^= num
    }
    return res
};