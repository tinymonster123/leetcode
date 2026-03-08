function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    const len = candidates.length
    const path: number[] = []
    let val: number = 0
    const dfs = (startIdx:number) => {
        if (val === target) {
            res.push([...path])
            return
        } else if (val > target) return

        for (let i = startIdx; i < len; i++) {
            path.push(candidates[i])
            val += candidates[i]
            dfs(i) // 对于可选自身，但是又保证其他子元素不重复的情况，仍需要传 startIdx 但是可以传自身
            path.pop()
            val -= candidates[i]
        }
    }
    dfs(0)
    return res
};