// quicksort 时间复杂度为 O(nlogn)
// 超出时间限制
// function partition(arr: number[], low: number, high: number) {
// 	const pivot = arr[high];
// 	let i = low - 1;
// 	for (let j = low; j <= high - 1; j++) {
// 		if (arr[j] >= pivot) {
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

// function quickeSelection(arr: number[], low: number, high: number, k: number) {
// 	const pivot = partition(arr, low, high);
// 	if (pivot === k - 1) {
// 		return arr[pivot];
// 	} else if (pivot > k - 1) {
// 		sortHelper(arr, low, pivot - 1);
// 	} else if (pivot < k - 1) {
// 		sortHelper(arr, pivot + 1, high);
// 	}
// }

// function findKthLargest(nums: number[], k: number): number {
// 	quickeSelection(nums, 0, nums.length - 1, k);
// 	return nums[k - 1];
// }

// 采用 quickeSort 的变种 quickSelection
function partition(arr: number[], low: number, high: number) {
	const pivot = arr[high];
	let i = low - 1;
	for (let j = low; j <= high - 1; j++) {
		if (arr[j] >= pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1;
}

function findKthLargest(nums: number[], k: number): number {
	let low: number = 0,
		high: number = nums.length - 1;
	const targetIndex = k - 1;
	while (low <= high) {
		const randomPivot: number = Math.floor(
			Math.random() * (high - low + 1) + low,
		);
		[nums[randomPivot], nums[high]] = [nums[high], nums[randomPivot]];
		const pivot = partition(nums, low, high);
		if (pivot === targetIndex) {
			return nums[pivot];
		} else if (pivot > targetIndex) {
			high = pivot - 1;
		} else if (pivot < targetIndex) {
			low = pivot + 1;
		}
	}
	// 兜底
	return -1;
}
