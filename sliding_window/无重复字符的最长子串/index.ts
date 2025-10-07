function lengthOfLongestSubstring(s: string): number {
	if (!s.length) return 0;
	if (s.length === 1) return 1;
	const map = new Map();
	let result: number = 1;
	outerLoop: for (let i = 0; i < s.length; i++) {
		map.set(s[i], s[i]);
		let rightIndex = i + 1;
		while (rightIndex < s.length) {
			if (map.has(s[rightIndex])) {
				result = Math.max(Array.from(map.keys()).length, result);
				map.clear();
				continue outerLoop;
			}
			map.set(s[rightIndex], s[rightIndex]);
			rightIndex++;
		}
		result = Math.max(Array.from(map.keys()).length, result);
		map.clear();
		if (result === s.length) return result;
	}
	return result;
}
