/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
class _Node {
	val: number;
	next: _Node | null;
	random: _Node | null;

	constructor(val?: number, next?: _Node, random?: _Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

// 失败的方法
// function copyRandomList(head: _Node | null): _Node | null {
// 	if (!head) return null;
// 	const headMap = new Map<_Node | null, number>(),
// 		subHeadMap = new Map<number, _Node | null>();
// 	let subHead: _Node | null = new _Node(head.val, head.next || undefined),
// 		currNode: _Node | null = head,
// 		temp = subHead,
// 		headCount: number = 0;
// 	while (currNode.next) {
// 		subHead = new _Node(currNode.val, currNode.next);
// 		headMap.set(currNode, headCount);
// 		subHeadMap.set(headCount, subHead);
// 		subHead = subHead.next;
// 		currNode = currNode?.next;
// 		++headCount;
// 	}
// 	console.log(subHeadMap);
// 	subHead = temp;
// 	currNode = head;
// 	let nodeToValue: number = 0,
// 		nodeToNode: _Node | null;
// 	while (subHead) {
// 		if (!currNode.random) subHead!.random = null;
// 		nodeToValue = headMap.get(currNode.random);
// 		nodeToNode = subHeadMap.get(nodeToValue);
// 		subHead.random = nodeToNode;
// 		currNode = currNode.next;
// 		subHead = subHead?.next;
// 	}
// 	return temp;
// }

// 哈希法
// function copyRandomList(head: _Node | null): _Node | null {
// 	if (!head) return null;
// 	const treeNodeMap = new Map<_Node, _Node>();
// 	let curr: _Node | null = head;
// 	while (curr) {
// 		treeNodeMap.set(curr, new _Node(curr.val));
// 		curr = curr.next;
// 	}

// 	curr = head;
// 	while (curr) {
// 		const copy = treeNodeMap.get(curr);
// 		copy!.next = curr.next ? treeNodeMap.get(curr.next) : null;
// 		curr = curr.next;
// 	}

// 	curr = head;
// 	while (curr) {
// 		const copy = treeNodeMap.get(curr);
// 		copy!.random = curr.random ? treeNodeMap.get(curr.random) : null;
// 		curr = curr.next;
// 	}

// 	const copy = treeNodeMap.get(head);
// 	return copy;
// }

// 原地法
function copyRandomList(head: _Node | null): _Node | null {
	let curr: _Node | null = head;
	// 为每个“正牌”节点后插入一个复制的节点
	while (curr) {
		const temp = curr.next;
		curr.next = new _Node(curr.val);
		curr = curr.next;
		curr.next = temp;
		curr = curr.next;
	}

	curr = head;
	while (curr) {
		const copy = curr.next;
		copy!.random = curr?.random ? curr.random.next : null;
		curr = copy?.next ? copy.next : null;
	}

	// 拆出插入的链表
	curr = head;
	const dummy = new _Node(0);
	let deepCloneHead: _Node | null = dummy;
	while (curr) {
		const copy = curr.next;
		curr.next = copy?.next;
		deepCloneHead.next = copy;
		deepCloneHead = deepCloneHead?.next;
		curr = curr.next;
	}
	return dummy.next;
}
