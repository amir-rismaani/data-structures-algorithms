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

    unshift(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    insert(index, value){
        if(index === 0) return this.unshift(value)
        if(index === this.length) return this.push(value)
        
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        if(temp){
            newNode.next = temp.next;
            temp.next = newNode;
            this.length++;
            return true
        }
        return false
    }
} 

let myLinkedList = new LinkeList(4);
myLinkedList.push(11);
myLinkedList.push(8);
myLinkedList.push(17);
myLinkedList.insert(2,313) // inserted item/node (313) in linked list