class TreeNode {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null
    }
};

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(4);
const node4 = new TreeNode(6);
const node5 = new TreeNode(3);

node1.left = node2;
node1.right = node3;

node3.left = node4;
node3.right = node5;

class BinaryTree{
    constructor(head = null) {
        this.head = head;
    }

    findSum(head = this.head) {
        if (!head) return 0;
        return head.data + this.findSum(head.right) + this.findSum(head.left);
    }
}

const bTree = new BinaryTree(node1);
console.log(bTree.findSum())