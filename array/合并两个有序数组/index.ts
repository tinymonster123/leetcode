/**
 Do not return anything, modify nums1 in-place instead.
 */
// 先尾部添加，后进行排序
// function partition(arr: number[], low: number, high: number) {
// 	const pivot = arr[high];
// 	let i: number = low - 1;
// 	for (let j = low; j <= high - 1; j++) {
// 		if (arr[j] <= pivot) {
// 			i++;
// 			[arr[i], arr[j]] = [arr[j], arr[i]];
// 		}
// 	}
// 	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
// 	return i + 1;
// }

// function sortHelper(arr: number[], low: number, high: number) {
// 	if (low >= high) return;
// 	const pivot = partition(arr, low, high);
// 	sortHelper(arr, low, pivot - 1);
// 	sortHelper(arr, pivot + 1, high);
// }

// function quickSort(arr: number[], low: number, high: number) {
// 	sortHelper(arr, low, high);
// }

// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
// 	for (let i = 0; i < nums2.length; i++) {
// 		nums1[i + m] = nums2[i];
// 	}
// 	quickSort(nums1, 0, nums1.length - 1);
// }

// 从后开始排
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let pointer1: number = m - 1,
		pointer2: number = n - 1,
		pointer: number = m + n - 1;

	while (pointer1 >= 0 && pointer2 >= 0) {
		if (nums1[pointer1] <= nums2[pointer2]) {
			nums1[pointer] = nums2[pointer2];
			pointer2--;
		} else {
			nums1[pointer] = nums1[pointer1];
			pointer1--;
		}
		pointer--;
	}

	// 只有出现了 nums1 队首元素大于 nums2 移动索引所处于位置的元素时，才会出现 pointer1 先走完的情况
	while (pointer2 >= 0) {
		nums1[pointer] = nums2[pointer2];
		pointer--;
		pointer2--;
	}
}
