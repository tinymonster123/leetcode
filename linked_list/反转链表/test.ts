import { ListNode } from '../listNode'

function reverseList(head: ListNode | null): ListNode | null {
    let p = head
    let reverseHead: ListNode | null = null
    while(p) {
        const tempNext = p.next
        p.next = reverseHead
        reverseHead = p
        p = tempNext
    }
    return reverseHead
};