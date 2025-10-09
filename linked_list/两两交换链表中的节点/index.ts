import { ListNode } from "../listNode";
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

function swapPairs(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;
	const dummy: ListNode | null = new ListNode(0, null);
	let fast: ListNode | null = head,
		currNode: ListNode | null = dummy,
		temp: ListNode | null = head;
	while (fast && fast.next) {
		temp = fast.next.next; // 如果没有这个节点，会成环
		//假设列表为 A -> B -> C -> D -> ....
		currNode.next = fast.next; // dummy -> B
		currNode.next.next = fast; // dummy -> B -> A(此时改变了原始列表中节点 B 的指向，B 已经指向了 A)
		currNode = currNode?.next.next;
		// 下述操作为 B -> A 而 A -> B 则此时已经成环
		// fast = fast.next.next;
		fast = temp;
	}
	currNode.next = fast;
	return dummy.next;
}
