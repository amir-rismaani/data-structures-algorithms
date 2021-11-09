class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkeList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let counter = 0; counter < index; counter++){
            temp = temp.next;
        }
        return temp
    }

    set(index, value){
        const node = this.get(index);
        if(node){
            node.value = value;
            return true
        }
        return false
    }
} 

let myLinkedList = new LinkeList(4);
myLinkedList.push(11);
myLinkedList.push(8);
myLinkedList.push(17);
myLinkedList.set(2,313) // set 2th item/node of linked list