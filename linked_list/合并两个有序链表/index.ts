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
function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null,
): ListNode | null {
	if (!list1) return list2;
	if (!list2) return list1;
	// 头节点为值较小的节点
	const head: ListNode | null = list1.val >= list2.val ? list2 : list1;
	let currNode: ListNode | null = head;
	if (list1.val >= list2.val) {
		list2 = list2.next;
	} else {
		list1 = list1.next;
	}
	while (list1 && list2) {
		console.log(currNode);
		if (list1.val >= list2!.val) {
			currNode!.next = list2;
			list2 = list2!.next;
			currNode = currNode!.next;
		} else {
			currNode!.next = list1;
			list1 = list1!.next;
			currNode = currNode!.next;
		}
	}
	currNode!.next = list1 || list2;
	return head;
}

// function mergeTwoLists(
// 	list1: ListNode | null,
// 	list2: ListNode | null,
// ): ListNode | null {
// 	if (!list1) return list2;
// 	if (!list2) return list1;
//     const head: ListNode | null = null
//     let currNode: ListNode | null = head
// 	while (list1 && list2) {
// 		if (list1.val >= list2.val) {
//             currNode =
// 		}
// 	}
// }
