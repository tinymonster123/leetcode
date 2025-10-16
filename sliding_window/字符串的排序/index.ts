function checkInclusion(s1: string, s2: string): boolean {
	if (s1.length > s2.length) return false;
	const diff = new Int16Array(26);
	const aCode = "a".charCodeAt(0);
	let zeroCount: number = 0;
	const s1Len = s1.length;
	for (let i = 0; i < s1Len; i++) {
		diff[s1[i].charCodeAt(0) - aCode]--;
		diff[s2[i].charCodeAt(0) - aCode]++;
	}
	for (let i = 0; i < diff.length; i++) {
		if (diff[i] === 0) zeroCount++;
	}
	if (zeroCount === 26) return true;
	for (let i = s1Len; i < s2.length; i++) {
		const inIndex = s2[i].charCodeAt(0) - aCode;
		const outIndex = s2[i - s1Len].charCodeAt(0) - aCode;
		if (diff[inIndex] === 0) zeroCount--;
		diff[inIndex]++;
		if (diff[inIndex] === 0) zeroCount++;
		if (diff[outIndex] === 0) zeroCount--;
		diff[outIndex]--;
		if (diff[outIndex] === 0) zeroCount++;

		if (zeroCount === 26) return true;
	}
	return false;
}
