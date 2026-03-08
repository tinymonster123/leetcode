function subsets(nums: number[]): number[][] {
    const res: number[][] = []
    const path: number[] = []
    const len = nums.length
    res.push([])
    const dfs = (startIdx: number) => {
        for (let i = startIdx; i < len; i++) {
            path.push(nums[i])
            dfs(i + 1)
            res.push([...path])
            path.pop()
        }
    }
    dfs(0)
    return res
};