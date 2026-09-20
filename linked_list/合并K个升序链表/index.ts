import { ListNode } from '../listNode'
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null
    while (lists.length > 1) {
        const merged: Array<ListNode | null> = []
        for (let i = 0; i < lists.length; i += 2) {
            merged.push(mergeTwoLists(lists[i], lists[i + 1] ?? null))
        }
        lists = merged
    }

    return lists[0]
};


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dump = new ListNode(0)
    let p = dump

    while (list1 && list2) {
        if (list1.val > list2.val) {
            p.next = list2
            list2 = list2.next
            p = p.next
        } else {
            p.next = list1
            list1 = list1.next
            p = p.next
        }
    }

    if (!list1) p.next = list2
    if (!list2) p.next = list1

    return dump.next
}