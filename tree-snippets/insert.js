class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this
        }

        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value > temp.value) {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            } else {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }
        }
    }
}

const myTree = new BST();
myTree