/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const len: number = nums.length

    let i: number = len - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) i--

    if (i >= 0) {
        let j: number = len - 1

        while (nums[j] <= nums[i]) j--

        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    let left: number = i + 1, right: number = len - 1

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++
        right--
    }
};