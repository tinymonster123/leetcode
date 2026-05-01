function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length
    if (m === 0) return false
    const n = matrix[0].length
    if (n === 0) return false

    let left = 0
    let right = m * n

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2)
        // 计算每行
        const row = Math.floor(mid / n)
        // 计算每列对应的偏移量
        const col = mid % n
        const matrixVal = matrix[row][col]

        if (matrixVal === target) return true
        if (matrixVal > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return false
};