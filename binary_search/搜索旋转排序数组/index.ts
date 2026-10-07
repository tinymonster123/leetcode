function search(nums: number[], target: number): number {
    const len: number = nums.length
    let left: number = 0
    let right: number = len - 1

    while (left <= right) {
        const mid = left + right >> 1
        if (nums[mid] === target) return mid

        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
};