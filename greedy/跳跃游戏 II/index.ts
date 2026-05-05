function jump(nums: number[]): number {
    // 跳跃次数
    let steps: number = 0
    // 可到达的最远的位置
    let farthest: number = 0
    // 在使用了 steps 次的跳跃下，可达到最远的位置
    let curEnd: number = 0

    const len = nums.length

    for (let i = 0; i < len - 1; i++) {
        farthest = Math.max(farthest, nums[i] + i)

        if (i === curEnd) {
            steps++
            curEnd = farthest
            if (curEnd >= len - 1) break
        }
    }

    return steps
};