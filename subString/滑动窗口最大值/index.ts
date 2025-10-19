// 超出时间限制
// function findSubArrMax(nums: number[]): number {
// 	let maxVal: number = nums[0];
// 	for (let i = 0; i < nums.length; i++) {
// 		maxVal = Math.max(maxVal, nums[i]);
// 	}
// 	return maxVal;
// }

// function maxSlidingWindow(nums: number[], k: number): number[] {
// 	const res: number[] = [];
// 	let maxVal: number = 0;
// 	let subNums: number[] = [];
// 	for (let i = 0; i < nums.length - k + 1; i++) {
// 		subNums = nums.slice(i, i + k);
// 		maxVal = findSubArrMax(subNums);
// 		res.push(maxVal);
// 	}
// 	return res;
// }

function maxSlidingWindow(nums: number[], k: number): number[] {
	const deque: number[] = [], // 手动维护一个单调队列（存的是索引）
		res: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		// 如果需要进入的最新元素大于我们单调队列中最小的元素就不断地弹出
		while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i])
			deque.pop();
		// 如果我们单调队列中的首元素超出了我们队列的维护范围就弹出
		while (deque.length > 0 && deque[0] < i - k + 1) deque.shift();
		// 经历过上面的操作后就将现在的元素推入
		deque.push(i);
		// 区分遍历元素范围还没有达到指定的范围内
		if (i >= k - 1) res.push(nums[deque[0]]);
	}
	return res;
}
