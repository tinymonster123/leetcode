function numIslands(grid: string[][]): number {
    const m = grid.length
    const n = grid[0].length
    let count: number = 0

    const dfsLand = (i: number, j: number) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") return
        grid[i][j] = "0"
        dfsLand(i + 1, j)
        dfsLand(i - 1, j)
        dfsLand(i, j - 1)
        dfsLand(i, j + 1)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                count += 1
                dfsLand(i, j)
            }
        }
    }

    return count
};