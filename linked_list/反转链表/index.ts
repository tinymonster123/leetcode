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

function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null;
	// 使用 nextNode 存储上一个节点，lastNode 指向下一个节点
	let nextNode: ListNode | null = head,
		lastNode: ListNode | null = null;
	while (head) {
		// 移动下一个节点
		nextNode = <ListNode>nextNode?.next;
		// 使初始头部节点的下一个节点指向 lastNode(开始反转)
		(<ListNode>head).next = lastNode;
		// 移动 lastNode(因为下一个节点也开始移动指向了)
		lastNode = head; // 此时 head.next = lastNode
		// 将 head 指向之前存储好的 nextNode 当中(注意点，此时 head.next 变得为 nextNode.next 一样变为指向链表顺序的下一个节点)
		head = nextNode;
	}
	return lastNode; // 因为最后一部，所以我们必须返回的是 lastNode
}
