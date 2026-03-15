interface KeyVal {
    key: number
    val: number
}

function partition(nums: KeyVal[], left: number, right: number) {
    const pivot = nums[right].val
    let i = left - 1
    for (let j = left; j < right; j++) {
        if (nums[j].val >= pivot) {
            i++
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }
    [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]]
    return i + 1
}

function sortHelper(nums: KeyVal[], left: number, right: number) {
    if (left >= right) return
    const pivot = partition(nums, left, right)
    sortHelper(nums, left, pivot - 1)
    sortHelper(nums, pivot + 1, right)
}

function quickSort(nums: KeyVal[], left: number, right: number) {
    if (left >= right) return
    sortHelper(nums, left, right)
}

function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    const keys = Array.from(map.keys())
    const vals = Array.from(map.values())
    const cache: KeyVal[] = []
    for (let i = 0; i < keys.length; i++) {
        cache.push({ key: keys[i], val: vals[i] })
    }

    quickSort(cache, 0, cache.length - 1)
    const res: number[] = []
    for (let i = 0; i < k; i++) {
        res.push(cache[i].key)
    }
    return res
};