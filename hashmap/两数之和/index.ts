function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const otherPart = target - nums[i];
		if (map.has(otherPart)) {
			return [i, map.get(otherPart) as number];
		}
		map.set(nums[i], i);
	}
}
