function lengthOfLongestSubstring(s: string): number {
	if (!s.length) return 0;
	const sMap = new Map<string, number>();
	let left: number = 0;
	let maxLen = 0;
	for (let right = 0; right <= s.length - 1; right++) {
		if (sMap.has(s[right])) {
			while (sMap.has(s[right])) {
				sMap.delete(s[left]);
				left++;
			}
		}

		sMap.set(s[right], right);

		maxLen = Math.max(maxLen, right - left + 1);
	}

	return maxLen;
}
