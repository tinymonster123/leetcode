function findPeakElement(nums: number[]): number {
	const len = nums.length;
	nums[-1] = Number.NEGATIVE_INFINITY;
	nums[len] = nums[-1];
	let left = 0,
		right = len - 1;
	while (left <= right) {
		if (nums[left] > nums[left - 1] && nums[left] > nums[left + 1]) {
			return left;
		} else if (nums[left] <= nums[left + 1]) {
			left += 1;
		} else if (nums[left] > nums[left + 1]) {
			left += 2;
		}

		if (nums[right] > nums[right + 1] && nums[right] > nums[right - 1]) {
			return right;
		} else if (nums[right] <= nums[right - 1]) {
			right -= 1;
		} else if (nums[right] > nums[right - 1]) {
			right -= 2;
		}
	}
}
