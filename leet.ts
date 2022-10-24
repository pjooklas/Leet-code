// 876. Middle of the Linked List


//  * Definition for singly-linked list.
 export  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function middleNode(head: ListNode | null): ListNode | null {
    let mid = head;
    let end = head;
    
    while (end != null && end.next != null) {
        mid = mid!.next;
        end = end.next.next;
    }

    return mid;
};

// *********************************************


