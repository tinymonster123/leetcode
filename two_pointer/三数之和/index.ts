function threeSum(nums: number[]): number[][] {
	const result: number[][] = [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		if (i > 0) {
			if (nums[i] === nums[i - 1]) continue;
		}
		let leftIndex = i + 1,
			rightIndex = nums.length - 1;
		while (rightIndex > leftIndex) {
			const sum = nums[leftIndex] + nums[rightIndex] + nums[i];
			if (sum === 0) {
				result.push([nums[i], nums[leftIndex], nums[rightIndex]]);
				while (nums[leftIndex] === nums[leftIndex + 1]) leftIndex++;
				while (nums[rightIndex] === nums[rightIndex - 1]) rightIndex--;
				rightIndex--;
			}
			if (sum < 0) {
				leftIndex++;
			} else if (sum > 0) {
				rightIndex--;
			}
		}
	}
	return result;
}
