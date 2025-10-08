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

// 此方法遍历长度为两个链表中最长的链表 O(Max(m,n))
// function addTwoNumbers(
// 	l1: ListNode | null,
// 	l2: ListNode | null,
// ): ListNode | null {
// 	let carry: number = 0, // 进位
// 		sum: number = 0, // 进位与两值之和
// 		unit: number = 0, // 个位数部分
// 		currentNode1: ListNode | null = l1,
// 		currentNode2: ListNode | null = l2,
// 		head: ListNode | null = new ListNode(0, null),
// 		currentNode: ListNode | null = head;
// 	// 只有当两个链表都遍历完时才会跳出循环
// 	while (currentNode1 || currentNode2) {
// 		sum =
// 			(!currentNode1 ? 0 : currentNode1!.val) +
// 			(!currentNode2 ? 0 : currentNode2!.val) +
// 			carry;
// 		unit = sum % 10; // 取相加的个位数部分
// 		currentNode.next = new ListNode(unit, null);
// 		carry = Math.trunc(sum / 10);
// 		currentNode = currentNode?.next;
// 		currentNode1 = !currentNode1 ? null : currentNode1!.next;
// 		currentNode2 = !currentNode2 ? null : currentNode2!.next;
// 	}
// 	if (carry) currentNode.next = new ListNode(carry, null);
// 	return head.next;
// }

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	let currentNode1: ListNode | null = l1,
		currentNode2: ListNode | null = l2,
		head: ListNode | null = new ListNode(0, null),
		currentNode: ListNode | null = head,
		carry: number = 0,
		unit: number = 0,
		sum: number = 0;
	while (currentNode1 && currentNode2) {
		sum = carry + currentNode1.val + currentNode2.val;
		carry = Math.trunc(sum / 10);
		unit = sum % 10;
		currentNode.next = new ListNode(unit);
		currentNode = currentNode?.next;
		currentNode1 = currentNode1.next;
		currentNode2 = currentNode2.next;
	}
	if (currentNode1) currentNode.next = currentNode1;
	if (currentNode2) currentNode.next = currentNode2;

	// 如果 carry 为 0 则时间复杂度为 O(min(m,n))
	while (carry) {
		// 当出现 99 + 11 时，两个链表都为长度 2 但是其实最后的值链表对应三个节点长度就会出现下一个节点为 null 的情况
		if (!currentNode.next) {
			sum = carry;
			carry = Math.trunc(sum / 10);
			currentNode.next = new ListNode(sum, null);
		} else {
			// sum = carry + currentNode.next.val;
			// carry = Math.trunc(sum / 10);
			// unit = sum % 10;
			// currentNode.next.val = unit;
			// currentNode = currentNode?.next;
			currentNode = currentNode?.next;
			sum = carry + currentNode.val;
			carry = Math.trunc(sum / 10);
			unit = sum % 10;
			currentNode.val = unit;
		}
	}

	return head.next;
}
