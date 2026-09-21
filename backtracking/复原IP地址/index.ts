function restoreIpAddresses(s: string): string[] {
    const res: string[] = []
    const path: string[] = []
    const len: number = s.length

    const dfs = (start: number) => {
        let need: number = 4 - path.length
        let rest: number = len - start

        if (rest < need || rest > need * 3) return

        if (need === 0) {
            res.push(path.join("."))
            return
        }

        for (let end = start; end < start + 3 && end < len; end++) {
            if (s[start] === "0" && end > start) break
            if (Number(s.slice(start, end + 1)) > 255) break

            path.push(s.slice(start, end + 1))
            dfs(end + 1)
            path.pop()
        }
    }

    if (len >= 4 && len <= 12) dfs(0)

    return res
};