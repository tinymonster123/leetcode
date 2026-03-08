// 超时
// function maxSubArray(nums: number[]): number {
//     const len = nums.length
//     let res: number = nums[0]
//     const countMaxVal = (startIdx: number): number => {
//         let maxVal: number = nums[startIdx]
//         let temp: number = 0
//         for (let i = startIdx; i < len; i++) {
//             temp += nums[i]
//             maxVal = Math.max(maxVal, temp)
//         }
//         return maxVal
//     }
//     for (let i = 0; i < len; i++) {
//         res = Math.max(countMaxVal(i), res)
//     }
//     return res
// };

// 动态规划法
function maxSubArray(nums: number[]): number {
    let curr = nums[0]
    let maxVal = curr
    for (let i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], curr + nums[i])
        maxVal = Math.max(curr, maxVal)
    }
    return maxVal
};