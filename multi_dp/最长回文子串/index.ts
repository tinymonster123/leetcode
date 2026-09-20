function longestPalindrome(s: string): string {
    const n = s.length
    const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false))
    let start: number = 0
    let maxLen: number = 1

    for (let left = n - 1; left >= 0; left--) {
        for (let right = left; right < n; right++) {
            if (s[left] !== s[right]) continue

            dp[left][right] = right - left <= 2 || dp[left + 1][right - 1]

            if (dp[left][right] && right - left + 1 > maxLen) {
                start = left
                maxLen = right - left + 1
            }
        }
    }

    return s.substring(start, start + maxLen)
};