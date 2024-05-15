/**
 * e.g const list = {
    value: 1,
    next: {
        value: 3,
        next: {
            ...
        }
    }
}
 */

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        // find the length of LL
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }

        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = null;
        let node = this.head;
        while(node) {
            lastNode = node;
            node = node.next;
        }

        return lastNode;
    }

    getFirst() {
        return this.head;
    }
}

const node1 = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(6);

node2.next = node3;
node1.next = node2;

const linkedList = new LinkedList(node1);

console.log(linkedList.size())
console.log(linkedList.getLast())
console.log(linkedList.getFirst())