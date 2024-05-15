class DoublyLinkedList {
  constructor(value = null, prev = null, next = null, child = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
    this.child = child;
  }
}

const makeList = (values = []) => {
    let prev = null, start = null;
    for(const value of values) {
        const node = new DoublyLinkedList(value);
        if (value == 2) {
          node.child = makeList([5,6,7,8])
        }
        if (prev) prev.next = node;
        if (!start) start = node;
        node.prev = prev;
        prev = node;
    }

    return start;
}

const listTraversal = (head) => {
    let cur = head;
    while(cur) {
        const next = cur.next;
        console.log(cur.value);
        if (cur.child) {
          console.log(`---start child of ${cur.value}---`);
          listTraversal(cur.child);
          console.log(`---end child of ${cur.value}---`);
        }
        cur = next;
    }
    return;
}

const mergeDoublyLinkedList = head => {
  let cur = head, start = head, tail = head;
  while(cur) {
    tail = cur;
    const next = cur.next;
    if (cur.child) {
      const {startNode, tailNode} = mergeDoublyLinkedList(cur.child);
      cur.next = startNode;
      startNode.prev = cur;
      tailNode.next = next;
      cur.child = null;
    }
    cur = next;
  }

  // cur is the tail
  return {startNode: start, tailNode: tail};
}

const list = makeList([1,2,3]);
const merged = mergeDoublyLinkedList(list);
listTraversal(merged.startNode);