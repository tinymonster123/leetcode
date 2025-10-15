function partition(arr: number[], low: number, high: number): number {
	const pivot = arr[high];
	let i = low - 1; // 维护一个哨兵
	for (let j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1;
}

function sortHelper(arr: number[], low: number, high: number) {
	if (low >= high) return arr;

	const left = partition(arr, low, high);

	sortHelper(arr, low, left - 1);
	sortHelper(arr, left + 1, high);
}

function quickSort(arr: number[], low: number, high: number) {
	if (low >= high) return;
	sortHelper(arr, 0, arr.length - 1);
}

function smallestK(arr: number[], k: number): number[] {
	if (!arr.length || k > arr.length) return [];
	quickSort(arr, 0, arr.length - 1);
	const res: number[] = [];
	for (let i = 0; i < k; i++) {
		res.push(arr[i]);
	}
	return res;
}
