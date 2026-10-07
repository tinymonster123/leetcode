function findMin(nums: number[]): number {
    const len: number = nums.length
    let left: number = 0
    let right: number = len - 1

    while (left < right) {
        const mid = left + right >> 1
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return nums[left]
};