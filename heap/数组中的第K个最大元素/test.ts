function partition(nums: number[], left: number, right: number) {
    const pivot = nums[right]
    let i = left - 1
    // j 的起始边界不要写错
    for (let j = left; j < right; j++) {
        if (nums[j] >= pivot) {
            i++
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]]
    return i + 1
}

function findKthLargest(nums: number[], k: number): number {
    let left: number = 0
    let right: number = nums.length - 1
    const targetIdx = k - 1
    while (left <= right) {
        const randomPivot: number = Math.floor(Math.random() * (right - left + 1)) + left;
        [nums[randomPivot], nums[right]] = [nums[right], nums[randomPivot]]
        const pivot = partition(nums, left, right)
        if (pivot === targetIdx) {
            return nums[pivot]
        } else if (pivot > targetIdx) {
            right = pivot - 1
        } else if (pivot < targetIdx) {
            left = pivot + 1
        }
    }
    return -1
};