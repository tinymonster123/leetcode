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

// function reverseLinkList(head: ListNode | null): ListNode | null {
// 	let nextNode: ListNode | null = head,
// 		lastNode: ListNode | null = null;
// 	while (head) {
// 		nextNode = nextNode!.next;
// 		head.next = lastNode;
// 		lastNode = head;
// 		head = nextNode;
// 	}
// 	return lastNode;
// }

// 反转一次链表后，删除第 n 个节点
// 完成上述操作的链表再进行反转
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
// 	let reversedHead: ListNode | null = reverseLinkList(head),
// 		currNode: ListNode | null = reversedHead,
// 		lastNode: ListNode | null = new ListNode(0, currNode),
// 		result: ListNode | null = lastNode;
// 	n = n - 1;
// 	while (n) {
// 		n--;
// 		lastNode = currNode;
// 		currNode = currNode!.next;
// 	}
// 	lastNode!.next = currNode!.next;
// 	currNode!.next = null;
// 	return reverseLinkList(result!.next);
// }

// 使用快慢指针的方法
// 倒数第 n 个节点，从正数即为 L - n + 1(L 为链表的长度)
// 先让 fast 指针先走 n + 1 步
// 之后 fast 和 slow 指针一起走，这是他们一直保持着 n + 1 的距离（“滑动窗口”)
// 当 fast 走到 null 即第 L + 1 个位置时
// slow 为 L + 1 - (n + 1) = L - n,为第 L - n 个位置
// 此时正好指向需要删除的节点
// 背后的数学原理：https://g.co/gemini/share/c9bdf212b490
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const dummy: ListNode | null = new ListNode(0, head); // 在链表头部插入一个节点，方便处理需要删除的节点为头节点
	let slow: ListNode | null = dummy,
		fast: ListNode | null = dummy;
	for (let i = 0; i < n + 1; i++) {
		fast = fast!.next;
	}
	while (fast) {
		fast = fast.next;
		slow = slow!.next;
	}
	slow!.next = slow!.next!.next;

	return dummy.next;
}
