function letterCombinations(digits: string): string[] {
    const digitToLetters = new Map<string, string[]>([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
        ['0', [' ']]
    ]);
    const res: string[] = []
    let path: string = ''
    const len = digits.length
    const dfs = (start: number) => {
        if (path.length === len) {
            res.push(path)
            return
        }
        for (let i = start; i < len; i++) {
            const mapVal = digitToLetters.get(digits[i])
            for (let j = 0; j < mapVal?.length; j++) {
                path = path + mapVal[j]
                dfs(i + 1)
                path = path.substring(0, path.length - 1)
            }
        }
    }
    dfs(0)
    return res
};