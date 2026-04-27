function partition(s: string): string[][] {
    const res: string[][] = []
    const path: string[] = []
    const len = s.length

    const isPalindrome = (left: number, right: number) => {
        while (left < right) {
            if (s[left] !== s[right]) return false
            left++
            right--
        }
        return true
    }

    const dfs = (start: number) => {
        if (start === len) {
            res.push([...path])
        }

        for (let end = start; end < len; end++) {
            if (!isPalindrome(start, end)) continue
            path.push(s.slice(start, end + 1))
            dfs(end + 1)
            path.pop()
        }
    }
    dfs(0)
    return res
};