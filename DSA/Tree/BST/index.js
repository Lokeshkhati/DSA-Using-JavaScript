class Node {
    constructor(value) {
      this.value = value,
        this.left = null
      this.right = null
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null
    }
    isEmpty() {
      return this.root === null
    }
    insert(value) {
      const newNode = new Node(value)
      if (this.isEmpty()) {
        this.root = newNode
      }
      else {
        this.insertNode(this.root, newNode)
      }
    }
  
    insertNode(root, newNode) {
      if (newNode.value < root.value) {
        if (root.left === null) {
          root.left = newNode
        }
        else {
          this.insertNode(root.left, newNode)
        }
      }
      else {
        if (root.right === null) {
          root.right = newNode
        }
        else {
          this.insertNode(root.right, newNode)
        }
      }
    }
  
    search(root, value) {
      if (!root) {
        return false
      }
      else {
        if (root.value === value) {
          return true
        }
        else if (value < root.value) {
          return this.search(root.left, value)
        }
        else {
          return this.search(root.right, value)
        }
      }
    }
  
    preOrderTraversal(root){
     if(root){
        console.log(root.value)
      this.preOrderTraversal(root.left)
      this.preOrderTraversal(root.right)
     }
    }
    
  inOrderTraversal(root){
    if(root){
      this.inOrderTraversal(root.left)
      console.log(root.value)
      this.inOrderTraversal(root.right)
    }
  }
  
    postOrderTraversal(root){
      if(root){
        this.postOrderTraversal(root.left)
        this.postOrderTraversal(root.right)
        console.log(root.value)
      }
    }
  }
  
  const bst = new BinarySearchTree()
  
  bst.insert(1)
  bst.insert(2)
  // bst.insert(15)
  bst.insert(3)
  // bst.insert(7)
  
  // console.log(bst.search(bst.root, 10))
  // console.log(bst.search(bst.root, 5))
  // console.log(bst.search(bst.root, 15))
  
  // console.log(bst)
  // console.log(bst.root)
  
  // bst.preOrderTraversal(bst.root)
  // bst.inOrderTraversal(bst.root)
  bst.postOrderTraversal(bst.root)
  
  