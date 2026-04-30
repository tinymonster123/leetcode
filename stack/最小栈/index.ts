class MinStack {
    private stack: number[] = []
    private minStack: number[] = []

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        if (this.minStack.length) {
            const minVal = this.minStack[this.minStack.length - 1]
            this.minStack.push(Math.min(minVal, val))
        } else {
            this.minStack.push(val)
        }
        this.stack.push(val)
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

