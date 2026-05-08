function partitionLabels(s: string): number[] {
    const last: Record<string, number> = {}
    const len = s.length

    for (let i = 0; i < len; i++) last[s[i]] = i

    let start: number = 0
    let end: number = 0
    let res: number[] = []

    for (let i = 0; i < len; i++) {
        end = Math.max(end, last[s[i]])

        if (i === end) {
            res.push(end - start + 1)
            start = i + 1
        }
    }

    return res
};