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

    pop(){
        if(this.length === 0) return undefined;

        let temp = this.head;
        let prev = this.head;
        
        if(this.length === 1){
            this.head = null;
            this.tail = this.head;
        } else {
            while(temp.next){
                prev = temp;
                temp = temp.next
            }
            this.tail = prev;
            this.tail.next = null;  
        }

        this.length--;

        return temp
    }

    shift() {
        if(this.length === 0) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = this.head;
        } else {
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
        return temp
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let counter = 0; counter < index; counter++){
            temp = temp.next;
        }
        return temp
    }

    remove(index){
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const prev = this.get(index -1);
        const temp = prev.next;
        prev.next = temp.next;
        temp.next = null;
        this.length--;

        return temp
    }
} 

let myLinkedList = new LinkeList(4);
myLinkedList.push(11);
myLinkedList.push(8);
myLinkedList.push(17);
myLinkedList.remove(2) // remove 2th item/node of linked list