function searchRange(nums: number[], target: number): number[] {
    const len: number = nums.length
    let res: number = -1

    const binarySearch = (isLeft: boolean) => {
        let left: number = 0
        let right: number = len

        while (left < right) {
            const mid: number = left + right >> 1
            if (nums[mid] === target) {
                res = mid
                if (isLeft) {
                    right = mid
                } else {
                    left = mid + 1
                }
            } else if (nums[mid] > target) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return res
    }

    return [binarySearch(true), binarySearch(false)]
};