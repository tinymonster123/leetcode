function maxArea(height: number[]): number {
	let leftIndex: number = 0,
		rightIndex: number = height.length - 1,
		result: number = 0;
	while (rightIndex > leftIndex) {
		result = Math.max(
			(rightIndex - leftIndex) *
				Math.min(height[leftIndex], height[rightIndex]),
			result,
		);
		if (height[rightIndex] >= height[leftIndex]) {
			leftIndex++;
		} else if (height[rightIndex] < height[leftIndex]) {
			rightIndex--;
		}
	}
	return result;
}
