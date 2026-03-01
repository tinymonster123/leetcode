function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false
    const map = new Map<string, string>()
    map.set(')', '(')
    map.set(']', '[')
    map.set('}', '{')
    const stack: string[] = []
    for (const char of s) {
        if (map.has(char)) {
            if (stack[stack.length - 1] !== map.get(char)) return false
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    if (!stack.length) return true
    return false
};