// interface Board {
//     row: number
//     col: number
// }

// function exist(board: string[][], word: string): boolean {
//     let res: boolean
//     const path: boolean[] = []
//     const begins: Board[] = []
//     const findBegin = () => {
//         for (let i = 0; i < board.length; i++) {
//             if (!board[i].includes(word[0])) continue
//             for (let j = 0; j < board[i].length; j++) {
//                 if (board[i][j] === word[0]) begins.push({ row: i, col: j })
//             }
//         }
//     }
//     findBegin()
//     if (begins.length === 0) return false

//     const dfs = (row: number, col: number, next: number) => {
//         if (path.length === word.length) return
//         if (board[row][col] !== word[next]) return
//         path.push(true)
//         dfs(row, col + 1, next + 1)
//         dfs(row + 1, col, next + 1)
//         path.pop()
//     }
//     for (let i = 0; i < begins.length; i++) {
//         dfs(begins[i].row, begins[i].col, 0)
//         res = !path.includes(false)
//         if (res) return res
//     }

//     res = !path.includes(false)
//     return res
// };

function exist(board: string[][], word: string): boolean {
    const m = board.length
    const n = board[0].length
    const dfs = (row: number, col: number, next: number): boolean => {
        if (row < 0 || row > m - 1 || col < 0 || col > n - 1) return false
        if (board[row][col] !== word[next]) return false
        if (next === word.length - 1) return true

        const saved = board[row][col]
        board[row][col] = '#'

        const found = dfs(row - 1, col, next + 1) || dfs(row + 1, col, next + 1) || dfs(row, col + 1, next + 1) || dfs(row, col - 1, next + 1)

        board[row][col] = saved

        return found
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true
        }
    }

    return false
};