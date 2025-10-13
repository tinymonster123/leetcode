// 超出时间限制
// function findAnagrams(s: string, p: string): number[] {
// 	const interval = p.length - 1;
// 	let leftIndex = 0,
// 		rightIndex = leftIndex + interval,
// 		results: number[] = [];
// 	const newP = Array.from(p).sort().join("");
// 	while (rightIndex < s.length) {
// 		const subStr = s.substring(leftIndex, rightIndex + 1);
// 		const newStr = Array.from(subStr).sort().join("");
// 		if (newStr === newP) results.push(leftIndex);
// 		leftIndex++;
// 		rightIndex++;
// 	}
// 	return results;
// }

// 超出时间限制
// function findAnagrams(s: string, p: string): number[] {
// 	const map = new Map<string, number>();
// 	for (let i = 0; i < p.length; i++) {
// 		if (map.has(p[i])) {
// 			const prev = map.get(p[i]) ?? 0;
// 			map.set(p[i], prev + 1);
// 		} else {
// 			map.set(p[i], 1);
// 		}
// 	}
// 	let startIndex: number = 0,
// 		endIndex: number = p.length - 1,
// 		isMatch: boolean = true;
// 	const results: number[] = [];
// 	const indexMap = new Map<string, number>();
// 	while (endIndex <= s.length - 1) {
// 		isMatch = true;
// 		for (let i = startIndex; i <= endIndex; i++) {
// 			if (map.has(s[i])) {
// 				if (indexMap.has(s[i])) {
// 					const prev = indexMap.get(s[i]) ?? 0;
// 					indexMap.set(s[i], prev + 1);
// 				} else {
// 					indexMap.set(s[i], 1);
// 				}
// 			} else {
// 				isMatch = false;
// 				break;
// 			}
// 		}
// 		for (const [key, value] of indexMap) {
// 			if (map.get(key) !== value) isMatch = false;
// 		}
// 		if (isMatch) {
// 			results.push(startIndex);
// 		}
// 		indexMap.clear();
// 		startIndex++;
// 		endIndex++;
// 	}
// 	return results;
// }

function findAnagrams(s: string, p: string): number[] {
	const lenP = p.length,
		lenS = s.length;
	if (lenP > lenS) return [];
	let zeroCount = 0;
	// 手动维护一个哈希
	const diff = new Int16Array(26); // 类型化数组,js 处理起来会更快
	const aCode = "a".charCodeAt(0);
	const result: number[] = [];
	// 设定一个初始窗口
	for (let i = 0; i < lenP; i++) {
		diff[s.charCodeAt(i) - aCode]++;
		diff[p.charCodeAt(i) - aCode]--;
	}

	// 如果 diff 数组中所有的值都为 0, 说明是字母出现频率是相匹配的
	for (let i = 0; i < diff.length; i++) if (diff[i] === 0) zeroCount++;
	if (zeroCount === 26) result.push(0);
	// zeroCount = 0;
	for (let i = lenP; i < lenS; i++) {
		// 只匹配初始匹配变化的元素
		const inIndex = s.charCodeAt(i) - aCode;
		const outIndex = s.charCodeAt(i - lenP) - aCode;
		// 如果进入的元素对应的计数初始为 0,则 0 的总数减少了
		if (diff[inIndex] === 0) zeroCount--;
		diff[inIndex]++;
		if (diff[inIndex] === 0) zeroCount++;
		// 如果弹出的元素对应的计数初始为 0,则 0 的总数减少了
		if (diff[outIndex] === 0) zeroCount--;
		diff[outIndex]--;
		if (diff[outIndex] === 0) zeroCount++;
		if (zeroCount === 26)
			// for (let i = 0; i < diff.length; i++) if (diff[i] === 0) zeroCount++;
			result.push(i - lenP + 1);
		// zeroCount = 0;
	}
	return result;
}
