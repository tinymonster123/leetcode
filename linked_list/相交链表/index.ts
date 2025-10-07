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

// 差值步法
// function getIntersectionNode(
// 	headA: ListNode | null,
// 	headB: ListNode | null,
// ): ListNode | null {
// 	let currA: ListNode | null = headA,
// 		currB: ListNode | null = headB,
// 		lenA: number = 1,
// 		lenB: number = 1;
// 	// 遍历链表 A 和 B 来找出各自的长度
// 	while (currA?.next) {
// 		currA = <ListNode>currA?.next;
// 		lenA++;
// 	}
// 	while (currB?.next) {
// 		currB = <ListNode>currB?.next;
// 		lenB++;
// 	}
// 	// 如果最后的节点不相同其必定不相交
// 	if (currA !== currB) return null;
// 	// 长度较长的链表先移动，移动到相同长度位置时开始一起移动
// 	let intersectionStep: number = Math.abs(lenA - lenB);
// 	if (lenA >= lenB) {
// 		while (intersectionStep) {
// 			headA = <ListNode>headA?.next;
// 			intersectionStep--;
// 		}
// 	} else if (lenA < lenB) {
// 		while (intersectionStep) {
// 			headB = <ListNode>headB?.next;
// 			intersectionStep--;
// 		}
// 	}
// 	while (headA !== headB) {
// 		// console.log(headA, headB, headA !== headB);
// 		// 直到发现节点存在相同的情况时则退出循环
// 		headA = <ListNode>headA?.next;
// 		headB = <ListNode>headB?.next;
// 	}
// 	return headA;
// }

// 走到交叉点的长度为 m + n - l
function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null,
): ListNode | null {
	let currA: ListNode | null = headA,
		currB: ListNode | null = headB;
	while (currA !== currB) {
		currA = !currA ? headB : currA.next;
		currB = !currB ? headA : currB.next;
	}
	return currA;
}
