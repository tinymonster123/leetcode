function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = []
    const m = matrix.length
    if (!m) return res
    const n = matrix[0].length
    if (!n) return res

    let colStart: number = 0, rowStart: number = 0, colEnd: number = n - 1, rowEnd: number = m - 1

    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            res.push(matrix[rowStart][i])
        }
        rowStart++

        for (let i = rowStart; i <= rowEnd; i++) {
            res.push(matrix[i][colEnd])
        }
        colEnd--

        if (rowEnd < rowStart) return res
        for (let i = colEnd; i >= colStart; i--) {
            res.push(matrix[rowEnd][i])
        }
        rowEnd--

        if (colEnd < colStart) return res
        for (let i = rowEnd; i >= rowStart; i--) {
            res.push(matrix[i][colStart])
        }
        colStart++
    }

    return res
};