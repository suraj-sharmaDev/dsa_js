class LinkedList {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const node6 = new LinkedList(6);
const node5 = new LinkedList(5, node6);
const node4 = new LinkedList(4, node5);
const node3 = new LinkedList(3, node4);
const node2 = new LinkedList(2, node3);
const node1 = new LinkedList(1, node2);

const listTraversal = (head) => {
    let cur = head;
    while(cur) {
        console.log(cur.value);
        cur = cur.next;
    }
}

const reverseFullList = head => {
    let cur = head, prev = null;
    while(cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    return prev;
}

/**
 * 
 * @param {LinkedList} head
 * @param {Number} m
 * @param {Number} n
 * When reversing a list at range m, n for the below
 * list = 1=>2=>3=>4=>5=>null and m = 2 and n = 4;
 * output = 1=>4=>3=>2=>5=>null
 * 
 * i.e we kept track of startNode (m-1) and reversed
 * list from m to n. Then Added the (n+1) node to it
 * The whole node is then added to (m-1)th node
 * @returns {LinkedList}
 */

const reverseListAtRange = (head, m, n) => {
    let cur = head, start = head;
    let position = 1;
    // first find startNode (m-1)
    while(position < m) {
        const next = cur.next;
        start = cur;
        cur = next;
        position++;
    }

    let prev = null;
    // also we need to start the mth node 
    // since this node will become the tail after 
    // (m to n) iteration

    let tail = cur;
    
    // here we will reverse the list
    while(position >= m && position <= n) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        position++;
    }
    // now cur has the n+1 th node after reversal
    start.next = prev;
    tail.next = cur; 

    /**
     * this check is required because for m = 1 
     * the start and tail will point to same node
     * hence it will disrupt the flow
     * so for m = 1, the prev will point to head of reverse list
     * return prev
     * 
     */

    if (m > 1) return head;
    return prev;
}

const rangeReversedList = reverseListAtRange(node1, 1, 6);
listTraversal(rangeReversedList);

// const reversedList = reverseFullList(node1);
// listTraversal(reversedList);