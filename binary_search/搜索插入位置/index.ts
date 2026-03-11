function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length
    // 采用左闭右开的格式来处理二分查找中的边界
    // 左闭右闭的格式也可以
    // let right = nums.length - 1
    // while (left <= right)
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid
        } else if (nums[mid] < target) {
            left = mid + 1
        }
    }

    return left
};