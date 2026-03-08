function permute(nums: number[]): number[][] {
    const len = nums.length
    const used = new Array(len).fill(false)
    const res: number[][] = []
    let path: number[] = []
    const dfs = () => {
        for (let i = 0; i < len; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            dfs()
            path.pop()
            used[i] = false
        }
        if (path.length === len) {
            // 如果直接 res.push(path) 存进去的数组引用，后续的 path.pop()/push() 仍然会修改
            // res.push(path)
            res.push([...path])
        }
    }
    dfs()
    return res
};