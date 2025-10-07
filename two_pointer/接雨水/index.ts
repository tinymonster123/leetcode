// 水往低处流
// 只有发现低处的水才能够蓄到水

// 暴力解法，直接遍历数组找出每个元素左侧和右侧最大的边
// function trap(height: number[]): number {
// 	const leftHightestArr: number[] = [],
// 		rightHighestArr: number[] = [];
// 	let leftHightest: number = 0,
// 		rightHighest: number = 0;
// 	for (let i = 0; i < height.length; i++) {
// 		leftHightest = Math.max(leftHightest, height[i]);
// 		leftHightestArr.push(leftHightest);
// 	}
// 	for (let i = height.length - 1; i >= 0; i--) {
// 		rightHighest = Math.max(rightHighest, height[i]);
// 		rightHighestArr.push(rightHighest);
// 	}
// 	rightHighestArr.reverse();
// 	let sumArea: number = 0;
// 	for (let i = 0; i < height.length; i++) {
// 		sumArea += Math.min(rightHighestArr[i], leftHightestArr[i]) - height[i];
// 	}
// 	return sumArea;
// }

// 双指针法
function trap(height: number[]): number {
	const len: number = height.length;
	let leftIndex: number = 0,
		rightIndex: number = len - 1,
		result: number = 0,
		leftMax: number = 0,
		rightMax: number = 0;
	while (leftIndex <= rightIndex) {
		// 等于号的目的就是为了防止遗漏每个元素
		// 水往低处流，找出最低值与目前进行比较
		// 不需要知道详细的左右侧最大值
		// 因为左右侧最大值在我们的查找过程中其值肯定是线性的
		// 所以只需要找出目前所在的最大值即可
		if (height[leftIndex] < height[rightIndex]) {
			leftMax = Math.max(height[leftIndex], leftMax);
			result += leftMax - height[leftIndex];
			leftIndex++;
		} else {
			rightMax = Math.max(height[rightIndex], rightMax);
			result += rightMax - height[rightIndex];
			rightIndex--;
		}
	}
	return result;
}
