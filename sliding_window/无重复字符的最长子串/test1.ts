function lengthOfLongestSubstring(s: string): number {
    const window = new Set()
    const arr = Array.from(s)
    let maxLen = 0
    let left = 0
    for (let right = 0; right < arr.length; right++) {
        const char = arr[right]
        while (window.has(char)) {
            window.delete(arr[left])
            left++
        }
        window.add(char)
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
};