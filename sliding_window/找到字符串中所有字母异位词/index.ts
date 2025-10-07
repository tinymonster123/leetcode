function findAnagrams(s: string, p: string): number[] {
	const interval = p.length - 1;
	let leftIndex = 0,
		rightIndex = leftIndex + interval,
		results: number[] = [];
	const newP = Array.from(p).sort().join("");
	while (rightIndex < s.length) {
		const subStr = s.substring(leftIndex, rightIndex + 1);
		const newStr = Array.from(subStr).sort().join("");
		if (newStr === newP) results.push(leftIndex);
		leftIndex++;
		rightIndex++;
	}
	return results;
}
