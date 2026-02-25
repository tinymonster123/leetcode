// function permute(nums: number[]): number[][] {
//     const res: number[][] = []
//     const path: number[] = []
//     const len = nums.length
//     const dfs = (start: number) => {
//         for (let i = start; i < len; i++) {
//             path.push(nums[i])
//             dfs(start + 1)
//         }
//         if (path.length === len) res.push([...path])
//         path.pop()
//     }
//     dfs(0)
//     return res
// };

function permute(nums: number[]): number[][] {
    const res: number[][] = []
    const path: number[] = []
    const len = nums.length
    const used = new Array(len).fill(false)
    const dfs = () => {
        if (path.length === len) {
            res.push([...path])
            // 递归弹栈的条件
            return
        }

        for (let i = 0; i < len; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(nums[i])
            dfs()
            path.pop()
            used[i] = false
        }
    }
    dfs()
    return res
};