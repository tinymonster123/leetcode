function permute(nums: number[]): number[][] {
	const result: number[][] = [];
	const path: number[] = [];
	const used: boolean[] = new Array(nums.length).fill(false);

	// 回溯本质是一种路走到头，再利用编程语言的调用栈的特性，回退重新看看是否走到头的方法（递归）
	const backTrace = () => {
		if (path.length === nums.length) {
			result.push([...path]);
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			if (used[i]) continue;

			path.push(nums[i]);
			used[i] = true;

			backTrace();

			path.pop();
			used[i] = false;
		}
	};

	backTrace();

	return result;
}
