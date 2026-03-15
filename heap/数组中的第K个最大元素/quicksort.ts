function partition(nums: number[], left: number, right: number): number {
    let pivot = nums[right]
    let idx = left - 1
    for (let i = left; i <= right - 1; i++) { // 既然选择了基准 right，则不能让 right 参与排序
        if (nums[i] >= pivot) {// 不然 nums[i] >= pivot 会交换
            idx++
            [nums[idx], nums[i]] = [nums[i], nums[idx]]
        }
    }
    // 下面的操作已经考虑到了 nums[idx + 1] 和 nums[right] 的互换
    [nums[idx + 1], nums[right]] = [nums[right], nums[idx + 1]]
    return idx + 1
}

function sortHelper(left: number, right: number, nums: number[]) {
    if (left >= right) return
    const pivot = partition(nums, left, right)
    sortHelper(left, pivot - 1, nums)
    sortHelper(pivot + 1, right, nums)
}

function quickeSort(nums: number[]): number[] {
    sortHelper(0, nums.length - 1, nums)
    console.log(nums)
    return nums
}


quickeSort([1, 6, 3, 7, 4, 9, 8])
