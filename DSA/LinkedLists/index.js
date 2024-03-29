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

    // https://leetcode.com/problems/reverse-linked-list/
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

    // https://leetcode.com/problems/remove-duplicates-from-sorted-list/
    removeDuplicates() {
    }

    // https://leetcode.com/problems/remove-linked-list-elements/
    removeElements(value) {
        let curr = this.head
        let prev = null

        while (curr) {
            if (curr.value === value) {
                if (prev) {
                    prev.next = curr.next

                }
                else {
                    this.head = curr.next
                }
            }
            else {
                prev = curr
            }
            curr = curr.next
        }

    }

    // https://leetcode.com/problems/reverse-linked-list-ii/
    reverseBetween(left, right) {

        if (left === right) {
            return console.log("left and right can not be same")
        }
        let curr = this.head
        let prev = null

        // first access the left 
        for (let i = 0; i < left - 1; i++) {
            prev = curr
            curr = curr.next
        }
        let currHead = prev
        let newEnd = curr

        // reverse between now
        for (let i = 0; i < right - left + 1; i++) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        }
        if (currHead !== null) {
            currHead.next = prev
        }
        else {
            this.head = prev
        }
        newEnd.next = curr
    }

    // https://leetcode.com/problems/linked-list-cycle/
    hasCycle() {
        let fast = this.head
        let slow = this.head

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next

            if (slow === fast) {
                return true
            }

        }

        return false
    };

    // Follow Up Length of cycle

    // https://leetcode.com/problems/linked-list-cycle-ii/
    detectCycle() {
        let fast = this.head
        let slow = this.head

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next

            if (slow === fast) {
                slow = this.head
                while (slow !== fast) {
                    slow = slow.next
                    fast = fast.next
                }
                return slow
            }
        }
        return null
    };
    // https://leetcode.com/problems/happy-number/


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
list.append(1)
list.append(2)
// list.append(2)
list.append(3)
list.append(4)
list.append(5)
// list.append(60)
// list.append(80)
// list.append(80)
// list.insertAtIndex(100, 3)
// list.print()
// list.deleteAtIndex(4)
// list.removeElements(30)
// list.reverse()
list.reverseBetween(2, 4)
list.print()
