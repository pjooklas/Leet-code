"use strict";
// 876. Middle of the Linked List
exports.__esModule = true;
exports.ListNode = void 0;
//  * Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function middleNode(head) {
    var mid = head;
    var end = head;
    while (end != null && end.next != null) {
        mid = mid.next;
        end = end.next.next;
    }
    return mid;
}
;
// *********************************************
