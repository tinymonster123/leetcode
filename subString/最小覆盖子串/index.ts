// 本质上是不定长的滑动窗口
function minWindow(s: string, t: string): string {
	const sLen = s.length;
	const tMap = new Map<string, number>(); // 用来记录 t 中出现的字符
	const window = new Map<string, number>(); // 用来记录维护的窗口出现的字符
	for (const tChar of t) {
		tMap.set(tChar, (tMap.get(tChar) ?? 0) + 1);
	}
	const required = tMap.size;
	let diff: number = 0;
	let minLength = Infinity; // 为最短长度初始设置一个极限最大长度
	let leftIndex: number = 0; // 记录窗口最左端的索引
	let start: number = 0; // 记录每次出现的最短字符串的值
	for (let rightIndex = 0; rightIndex < sLen; rightIndex++) {
		window.set(s[rightIndex], (window.get(s[rightIndex]) ?? 0) + 1);

		// 如果出现了单个字符出现的频率相同则记录
		if (
			tMap.has(s[rightIndex]) &&
			tMap.get(s[rightIndex]) === window.get(s[rightIndex])
		)
			diff++;

		// 如果此时维护的窗口和 t 的出现字符出现了相同的情况则开始进行窗口的收缩找到最短的字符串
		while (diff === required && leftIndex <= rightIndex) {
			const currLen = rightIndex - leftIndex + 1;
			// 比较出最短的字符串
			if (currLen < minLength) {
				minLength = currLen;
				start = leftIndex;
			}

			// 如果此时需要弹出的元素恰好是 t 中出现的字符（和定长的滑动窗口处理方式类似）
			if (
				tMap.has(s[leftIndex]) &&
				tMap.get(s[leftIndex]) === window.get(s[leftIndex])
			) {
				diff--;
			}

			// 弹出最左端的元素
			window.set(s[leftIndex], (window.get(s[leftIndex]) ?? 0) - 1);

			leftIndex++;
		}
	}

	return minLength === Infinity ? "" : s.substring(start, start + minLength);
}
