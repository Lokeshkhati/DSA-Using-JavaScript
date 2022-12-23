class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // insertion at first
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++

    }
    // insertion at Last
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            let prev = this.head

            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }

    // insert at given index ? position
    insertAtIndex(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        else if (index === 0) {
            this.prepend(value)
        }
        else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
        }
    }

    // delete at given index / position
    deleteAtIndex(index) {
        let removedNode;
        if (index < 0 || index > this.size) {
            return null
        }
        else if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
            this.size--
            return removedNode.value
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return removedNode.value
        }
    }

    // reverse LL

    reverse() {
        let curr = this.head
        let prev = null

        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeDuplicates(){
        
    }

    // traversing LinkedList
    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        }
        else {
            let curr = this.head
            let listValues = ''

            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next

            }
            console.log(listValues)

        }
    }
}


const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(20)
list.prepend(30)
list.append(60)
list.append(60)
list.append(80)
list.append(80)
list.insertAtIndex(100, 3)
// list.print()
list.deleteAtIndex(4)
list.print()
list.reverse()
list.print()
