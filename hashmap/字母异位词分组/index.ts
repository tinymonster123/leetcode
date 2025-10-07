function groupAnagrams(strs: string[]): string[][] {
	const map = new Map<string, string[]>();
	for (const element of strs) {
		const newELement = sortArray(element);
		if (map.has(newELement)) {
			map.get(newELement)?.push(element);
		} else {
			map.set(newELement, [element]);
		}
	}
	return Array.from(map.values());
}

function sortArray(str: string): string {
	return Array.from(str).sort().join("");
}
