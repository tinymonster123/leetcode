function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) return []
    const res: number[] = []
    const window = new Int16Array(26)
    const aCode = 'a'.charCodeAt(0)

    // 初始化窗口
    for (let i = 0; i < p.length; i++) {
        window[s[i].charCodeAt(0) - aCode]--
        window[p[i].charCodeAt(0) - aCode]++
    }

    // 对初始化窗口的 0 数量进行统计
    let zeroCount = window.filter(a => a === 0).length
    if (zeroCount === 26) res.push(0)
    for (let i = p.length; i < s.length; i++) {
        const outIndex: number = s[i - p.length].charCodeAt(0) - aCode
        const inIndex: number = s[i].charCodeAt(0) - aCode
        if (window[outIndex] === 0) zeroCount--
        window[outIndex]++
        if (window[outIndex] === 0) zeroCount++
        if (window[inIndex] === 0) zeroCount--
        window[inIndex]--
        if (window[inIndex] === 0) zeroCount++
        if(zeroCount === 26) res.push(i - p.length + 1)
    }

    return res
};