function subsets(nums: number[]): number[][] {
    const res: number[][] = []
    const path: number[] = []
    const len = nums.length

    const dfs = (startIdx: number) => {
        res.push([...path])

        for (let i = startIdx; i < len; i++) {
            path.push(nums[i])
            dfs(i + 1)
            path.pop()
        }
    }

    dfs(0)
    return res
}

subsets([1, 2, 3])

