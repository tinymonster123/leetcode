function maxProfit(prices: number[]): number {
    let minPrice: number = Infinity
    let best: number = 0

    for (const price of prices) {
        minPrice = Math.min(price, minPrice)
        best = Math.max(best, price - minPrice)
    }

    return best
};