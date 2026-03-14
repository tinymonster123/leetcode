class _ListNode {
    key: number
    val: number
    prev: _ListNode | null = null
    next: _ListNode | null = null
    constructor(key: number, val: number) {
        this.key = key
        this.val = val
    }
}

class LRUCache {
    head = new _ListNode(-1, 0)
    tail = new _ListNode(-1, 0)
    capacity: number
    cache = new Map<number, _ListNode>()
    constructor(capacity: number) {
        this.capacity = capacity
        class _ListNode {
            key: number
            val: number
            prev: _ListNode | null = null
            next: _ListNode | null = null
            constructor(key: number, val: number) {
                this.key = key
                this.val = val
            }
        }

        class LRUCache {
            head = new _ListNode(-1, 0)
            tail = new _ListNode(-1, 0)
            capacity: number
            cache = new Map<number, _ListNode>()
            constructor(capacity: number) {
                this.capacity = capacity
                this.head.next = this.tail
                this.tail.prev = this.head
            }

            addNode(key: number, val: number): void {
                const newNode = new _ListNode(key, val)
                const beforeTailNode = this.tail.prev
                newNode.prev = beforeTailNode
                newNode.next = this.tail
                beforeTailNode.next = newNode
                this.tail.prev = newNode
                this.cache.set(key, newNode)
            }

            removeNode(key: number): void {
                const shouldRemovedNode = this.cache.get(key)
                if (!shouldRemovedNode) return
                const shouldRemovedNodePrev = shouldRemovedNode?.prev
                const shouldRemovedNodeNext = shouldRemovedNode?.next
                shouldRemovedNodePrev.next = shouldRemovedNode?.next
                shouldRemovedNodeNext.prev = shouldRemovedNode?.prev
                // shouldRemovedNode.next = null
                // shouldRemovedNode.prev = null
                this.cache.delete(key)
            }

            moveNode(key: number): void {
                const shouldMovedNode = this.cache.get(key)
                this.removeNode(key)
                this.addNode(key, shouldMovedNode?.val)
            }

            get(key: number): number {
                if (!this.cache.has(key)) return -1
                const value = this.cache.get(key)?.val
                this.moveNode(key)
                return value
            }

            put(key: number, value: number): void {
                if (this.cache.has(key)) {
                    this.removeNode(key)
                }
                if (this.cache.size >= this.capacity) {
                    const key = this.head.next?.key
                    this.removeNode(key)
                }
                this.addNode(key, value)

            }
        }


        this.head.next = this.tail
        this.tail.prev = this.head
    }

    addNode(key: number, val: number): void {
        const newNode = new _ListNode(key, val)
        const beforeTailNode = this.tail.prev
        newNode.prev = beforeTailNode
        newNode.next = this.tail
        beforeTailNode.next = newNode
        this.tail.prev = newNode
        this.cache.set(key, newNode)
    }

    removeNode(key: number): void {
        const shouldRemovedNode = this.cache.get(key)
        const shouldRemovedNodePrev = shouldRemovedNode?.prev
        const shouldRemovedNodeNext = shouldRemovedNode?.next
        shouldRemovedNodePrev.next = shouldRemovedNode?.next
        shouldRemovedNodeNext.prev = shouldRemovedNode?.prev
        this.cache.delete(key)
    }

    moveNode(key: number): void {
        const shouldMovedNode = this.cache.get(key)
        this.removeNode(key)
        this.addNode(key, shouldMovedNode?.val)
    }

    get(key: number): number {
        if (!this.cache.has(key)) return -1
        const value = this.cache.get(key)?.val
        this.moveNode(key)
        return value
    }

    put(key: number, value: number): void {
        if(this.cache.has(key)) this.removeNode(key)
        if (this.cache.size >= this.capacity) {
            const key = this.head.next?.key
            this.removeNode(key)
        }
        this.addNode(key, value)

    }
}





// 过了，但是很慢
// class LRUCache {
//     private map = new Map<number, number>()
//     public capacity: number = 0

//     constructor(capacity: number) {
//         this.capacity = capacity
//     }

//     get(key: number): number {

//         const val = this.map.get(key)
//         if (val !== undefined) {
//             this.map.delete(key)
//             this.map.set(key, val)
//             return val
//         }
//         return -1

//     }

//     put(key: number, value: number): void {
//         if (this.map.has(key)) {
//             this.map.delete(key)
//             this.map.set(key, value)
//             return
//         }
//         if (Array.from(this.map.keys()).length >= this.capacity) {
//             this.map.delete(Array.from(this.map.keys())[0])
//         }
//         this.map.set(key, value)
//     }
// }
