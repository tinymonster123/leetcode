// 双向链表法
// 构造一个双向链表结构
class _ListNode {
	key: number;
	val: number;
	prev: _ListNode | null;
	next: _ListNode | null;
	constructor(
		key: number,
		val: number,
		prev?: _ListNode | null,
		next?: _ListNode | null,
	) {
		this.key = key;
		this.val = val;
		this.prev = prev ? prev : null;
		this.next = next ? next : null;
	}
}

class LRUCache {
	capacity: number;
	cache: Map<number, _ListNode>;
	// 初始化头节点和尾节点
	head: _ListNode | null;
	tail: _ListNode | null;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.cache = new Map<number, _ListNode>();
		this.head = new _ListNode(-1, 0);
		this.tail = new _ListNode(-1, 0);
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	// 删除单个节点
	removeTheNode(node: _ListNode) {
		const prev = node.prev;
		const next = node.next;
		prev!.next = next;
		next!.prev = prev;

		this.cache.delete(node.key);
	}

	// 将一个初始化的节点添加到头节点之后
	addToHead(node: _ListNode) {
		const next = this.head.next;
		this.head.next = node;
		node.prev = this.head;
		node.next = next;
		next!.prev = node;
		this.cache.set(node.key, node);
	}

	// 移动一个已经存在的节点到头节点之后(避免成环)
	moveToHead(node: _ListNode) {
		this.removeTheNode(node);
		this.addToHead(node);
	}

	// 删除最少被点击的节点
	removeLRUCache() {
		const prev = this.tail?.prev;
		this.removeTheNode(prev);

		return prev;
	}

	// 获取节点的值，并且将最近被访问的节点移动到链表首部
	get(key: number): number {
		if (!this.cache.has(key)) return -1;
		const node = this.cache.get(key);
		this.moveToHead(node);
		return node?.val;
	}

	// 存入节点到值，并且将最新访问的节点添加到链表的头部
	put(key: number, value: number): void {
		if (this.cache.has(key)) {
			const node = this.cache.get(key);
			this.removeTheNode(node);
			this.cache.delete(key);
		}
		const node = new _ListNode(key, value);
		this.cache.set(key, node);
		this.addToHead(node);

		if (this.cache.size > this.capacity) {
			const node = this.removeLRUCache();
			this.cache.delete(node?.key);
		}
	}
}

// 哈希表法
// class LRUCache {
// 	capacity: number;
// 	cache: Map<number, number>;
// 	constructor(capacity: number) {
// 		this.capacity = capacity;
// 		this.cache = new Map<number, number>();
// 	}

// 	get(key: number): number {
// 		if (!this.cache.has(key)) return -1;
// 		const val = this.cache.get(key);
// 		this.cache.delete(key);
// 		this.cache.set(key, val);
// 		return val;
// 	}

// 	put(key: number, value: number): void {
// 		if (this.cache.has(key)) {
// 			this.cache.delete(key);
// 		}
// 		this.cache.set(key, value);
// 		if (this.cache.size > this.capacity) {
// 			const headKey = this.cache.keys().next().value;
// 			this.cache.delete(headKey);
// 		}
// 	}
// }

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
