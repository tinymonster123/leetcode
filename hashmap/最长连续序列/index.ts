// 找到一个没有前置元素的元素作为开头
// 然后使其作为起始元素开始进行遍历子序列
function longestConsecutive(nums: number[]): number {
	if (!nums.length) return 0;
	// nums.sort((a, b) => b - a); 好像没有排序的必要
	const set = new Set<number>(nums);
	let result: number = 1;
	for (let element of set) {
		let len: number = 1;
		if (!set.has(element - 1)) {
			while (set.has(element + 1)) {
				len += 1;
				element++;
			}
			result = Math.max(result, len);
		}
	}
	return result;
}
