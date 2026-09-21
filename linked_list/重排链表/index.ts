import { ListNode } from "../listNode"
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let fast: ListNode | null = head?.next
    let slow: ListNode | null = head

    // 找到中点
    while (fast && fast.next) {
        fast = fast.next?.next
        slow = slow?.next
    }

    // 开始翻转
    let prev: ListNode | null = null
    let curr: ListNode | null = slow?.next
    slow.next = null
    while (curr) {
        const tempNext = curr.next
        curr.next = prev
        prev = curr
        curr = tempNext
    }

    // 拉链式合并
    let list1: ListNode | null = head
    let list2: ListNode | null = prev

    while (list2) {
        const tempNext1 = list1?.next
        const tempNext2 = list2.next
        list1.next = list2
        list2.next = tempNext1
        list1 = tempNext1
        list2 = tempNext2
    }
};