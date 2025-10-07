import type { ListNode } from "../listNode";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 使用 map 进行数据存储，如果 map 出现了已经出现过的对象则有环
// function hasCycle(head: ListNode | null): boolean {
// 	if (!head) return false;
// 	const map = new Map<ListNode | null, ListNode | null>();
// 	let currentNode: ListNode | null = head;
// 	while (currentNode?.next) {
// 		map.set(currentNode, currentNode);
// 		currentNode = currentNode.next;
// 		if (map.has(currentNode)) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// 快慢指针来进行环的判断
function hasCycle(head: ListNode | null): boolean {
	if (!head) return false;
	if (!head.next) return false;
	let slow: ListNode | null = head,
		fast: ListNode | null = head;
	while (fast && fast.next) {
		slow = (<ListNode>slow)?.next;
		fast = fast.next.next;
		if (fast === slow) return true; // 如果成环，快指针一定能在环内遇上慢指针，由此反过来退出一定有环
	}
	return false;
}
