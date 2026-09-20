/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let p0: number = 0
    let p1: number = 0
    let p2: number = nums.length - 1

    while (p1 <= p2) {
        if (nums[p1] === 0) {
            [nums[p1], nums[p0]] = [nums[p0], nums[p1]]
            p0++
            p1++
        } else if (nums[p1] === 1) {
            p1++
        } else {
            [nums[p1], nums[p2]] = [nums[p2], nums[p1]]
            p2--
        }
    }
};