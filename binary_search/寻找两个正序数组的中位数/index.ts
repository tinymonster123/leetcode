function findKth(nums1: number[], nums2: number[], k: number): number {
    if (nums1.length === 0) return nums2[k - 1]
    if (nums2.length === 0) return nums1[k - 1]

    if (k === 1) return Math.min(nums1[0], nums2[0])

    const i: number = Math.min(nums1.length, k >> 1)
    const j: number = Math.min(nums2.length, k >> 1)

    if (nums1[i - 1] < nums2[j - 1]) {
        return findKth(nums1.slice(i), nums2, k - i)
    }

    return findKth(nums1, nums2.slice(j), k - j)
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const total: number = nums1.length + nums2.length

    if (total & 1) {
        return findKth(nums1, nums2, (total + 1) >> 1)
    }

    const mid: number = total >> 1
    return (findKth(nums1, nums2, mid) + findKth(nums1, nums2, mid + 1)) / 2
};