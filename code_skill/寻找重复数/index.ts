function findDuplicate(nums: number[]): number {
    let left: number = 1
    let right: number = nums.length - 1

    while (left < right) {
        const mid = (left + right) >> 1

        let count: number = 0
        for (const num of nums) {
            if (num <= mid) count++
        }

        if (count > mid) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
};