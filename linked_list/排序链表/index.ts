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

// 尝试使用快排但是时间复杂度在输入较多的情况下貌似发生了退化
// function partition(nums: number[], left: number, right: number) {
// 	const pivot = nums[right];
// 	let i = left - 1;
// 	for (let j = left; j < right; j++) {
// 		if (nums[j] <= pivot) {
// 			i++;
// 			[nums[i], nums[j]] = [nums[j], nums[i]];
// 		}
// 	}
// 	[nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];
// 	return i + 1;
// }

// function sortHelper(nums: number[], left: number, right: number) {
// 	if (left >= right) return;
// 	const pivot = partition(nums, left, right);
// 	sortHelper(nums, left, pivot - 1);
// 	sortHelper(nums, pivot + 1, right);
// }

// function quickSort(nums: number[], left: number, right: number) {
// 	if (left >= right) return;
// 	sortHelper(nums, left, right);
// }

// function sortList(head: ListNode | null): ListNode | null {
// 	if (!head) return null;
// 	const nums: number[] = [];
// 	let curr: ListNode | null = head;
// 	while (curr) {
// 		nums.push(curr.val);
// 		curr = curr.next;
// 	}
// 	quickSort(nums, 0, nums.length - 1);
// 	const dummy = new ListNode(-Infinity);
// 	let listTail: ListNode | null = dummy;
// 	for (let i = 0; i < nums.length; i++) {
// 		listTail.next = new ListNode(nums[i]);
// 		listTail = listTail?.next;
// 	}
// 	listTail.next = null;
// 	return dummy.next;
// }

// 归并法
function sortList(head: ListNode | null): ListNode | null {
	if (!head) return null;
	if (!head.next) return head;
	// 使用快慢指针法找到链表的中点
	const findMiddle = (head: ListNode | null): ListNode | null => {
		let fast: ListNode | null = head,
			slow: ListNode | null = head,
			prev: ListNode | null = slow;
		while (fast && fast.next) {
			fast = fast.next.next;
			prev = slow;
			slow = slow?.next;
		}
		return prev;
	};

	// 合并两个有序列表
	const mergeList = (
		list1: ListNode | null,
		list2: ListNode | null,
	): ListNode | null => {
		const dummy = new ListNode(0);
		let tail: ListNode | null = dummy;
		while (list1 && list2) {
			if (list1.val < list2.val) {
				tail.next = list1;
				list1 = list1.next;
				tail = tail?.next;
			} else {
				tail.next = list2;
				list2 = list2.next;
				tail = tail?.next;
			}
		}
		tail.next = list1 ? list1 : list2;
		return dummy.next;
	};

	const midNode: ListNode | null = findMiddle(head);
	let leftHead: ListNode | null = head,
		rightHead: ListNode | null = midNode?.next;
	midNode.next = null; // 断开链表的中点处，不然 leftHead 对应的链表长度为 rightHead 的两倍
	// 递归将有序链表的合并转变为有序节点的合并
	const left = sortList(leftHead),
		right = sortList(rightHead);

	return mergeList(left, right);
}
