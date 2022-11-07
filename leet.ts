// 876. Middle of the Linked List


//  * Definition for singly-linked list.
//  export  class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//   }

// function middleNode(head: ListNode | null): ListNode | null {
//     let mid = head;
//     let end = head;
    
//     while (end != null && end.next != null) {
//         mid = mid!.next;
//         end = end.next.next;
//     }

//     return mid;
// };

// *********************************************

function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false
	
    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote.substring(i, i + 1)
        if (magazine.indexOf(letter) == -1) return false
        magazine = magazine.replace(letter, '')
    }
    
    return true
};
