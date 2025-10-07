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

// Floyd's Tortoise and Hare（弗洛伊德的龟兔赛跑算法）
// 相遇后一起走
// 快慢指针相遇后，慢指针从头和快指针一起走，相遇到的就是交点
// 背后的数学原理:https://g.co/gemini/share/1ed1a20dbcaf
function detectCycle(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return null;
	let slow: ListNode | null = head,
		fast: ListNode | null = head;
	// isMeet: boolean = false;
	while (fast && fast.next) {
		slow = (<ListNode>slow)?.next;
		fast = fast.next.next;
		if (fast === slow) {
			slow = head;
			// isMeet = true;
			// while (isMeet) {
			// 	if (slow === fast) return slow; // 放在这里是因为存在头节点即为环入口节点的情况
			// 	slow = (<ListNode>slow)?.next;
			// 	fast = (<ListNode>fast)?.next;
			// 	// if (slow === fast) return slow;
			// }
			while (slow !== fast) {
				slow = (<ListNode>slow)?.next;
				fast = (<ListNode>fast)?.next;
			}
			return slow;
		}
	}
	return null;
}
