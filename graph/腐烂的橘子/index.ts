function orangesRotting(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    let minutes: number = 0
    let fresh: number = 0
    const rottedOranges: [number, number][] = []

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) rottedOranges.push([i, j])
            if (grid[i][j] === 1) fresh++
        }
    }

    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    while (rottedOranges.length && fresh > 0) {
        const len: number = rottedOranges.length

        for (let i = 0; i < len; i++) {
            const popOut = rottedOranges.shift()
            const [popOutI, popOutJ] = popOut

            for (const delta of deltas) {
                const [deltaI, deltaJ] = delta
                const newI = popOutI + deltaI
                const newJ = popOutJ + deltaJ
                if (newI >= m || newI < 0 || newJ >= n || newJ < 0 || grid[newI][newJ] === 0 || grid[newI][newJ] === 2) continue
                grid[newI][newJ] = 2
                rottedOranges.push([newI, newJ])
                fresh--
            }
        }

        minutes++
    }

    return fresh ? -1 : minutes
};