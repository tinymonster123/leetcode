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

function reverseLinkList(head: ListNode | null): ListNode | null {
	let nextNode: ListNode | null = head,
		lastNode: ListNode | null = null;
	while (head) {
		nextNode = head.next;
		head.next = lastNode;
		lastNode = head;
		head = nextNode;
	}
	return lastNode;
}

function isPalindrome(head: ListNode | null): boolean {
	// 采用快慢指针来对链表进行二分反转
	let slow: ListNode | null = head,
		fast: ListNode | null = head;
	while (fast && fast.next) {
		slow = (<ListNode>slow).next;
		fast = fast.next.next;
	}
	let reverseHead = reverseLinkList(slow);
	while (reverseHead) {
		if (reverseHead.val !== head?.val) return false;
		reverseHead = reverseHead.next;
		head = head.next;
	}
	return true;
}
