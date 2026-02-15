function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a - b)
    const len = nums.length - 1
    const res:number[][] = []
    for(let i = 0;i <= len;i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = len
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0) {
                res.push([nums[i],nums[left],nums[right]])
                // 递增和递减逻辑需要注意
                left++
                right--
                while(nums[left] === nums[left - 1]) left++
                while(nums[right] === nums[right + 1]) right--
            } else if (sum < 0) {
                left++
            } else if (sum > 0){
                right--
            }
        }
    }
    return res
};