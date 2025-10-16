function subarraySum(nums: number[], k: number): number {
	const prefixMap = new Map<number, number>();
	let result: number = 0,
		conCurrent: number = 0;
	prefixMap.set(0, 1);
	for (let i = 0; i < nums.length; i++) {
		conCurrent += nums[i];
		if (prefixMap.has(conCurrent - k)) {
			result += prefixMap.get(conCurrent - k);
		}
		prefixMap.set(conCurrent, (prefixMap.get(conCurrent) ?? 0) + 1);
	}
	return result;
}
