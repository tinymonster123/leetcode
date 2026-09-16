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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let dummy = new ListNode(0, head)
    let p = dummy

    while (true) {
        let tail = p.next
        for (let i = 0; i < k; i++) {
            if (!tail) return dummy.next
            tail = tail.next
        }

        const prevHead = p.next
        const newHead = reverseHead(prevHead, tail)

        p.next = newHead
        p = prevHead
    }
};


function reverseHead(head: ListNode | null, tail: ListNode | null): ListNode | null {
    let reverseHead = tail
    let p = head
    while (p !== tail) {
        const tempNext = p.next
        p.next = reverseHead
        reverseHead = p
        p = tempNext
    }

    return reverseHead
}