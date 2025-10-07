// 方法一：从尾部遍历数组，查找匹配的元素
// function moveZeroes(nums: number[]): void {
// 	for (let i = nums.length - 1; i >= 0; i--) {
// 		if (!nums[i]) {
// 			nums.splice(i, 1);
// 			nums.push(0);
// 		}
// 	}
// }

// 方法二：双指针法
function moveZeroes(nums: number[]): void {
	let leftPointer = 0;
	for (let i = 0; i < nums.length; i++) {
		if (!nums[i]) continue;
		if (leftPointer < i) nums[leftPointer] = nums[i];
		leftPointer++;
	}
	for (let i = leftPointer; i < nums.length; i++) {
		nums[i] = 0;
	}
}
