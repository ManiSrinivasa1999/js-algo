class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

root1 = new Node(1)
root1.left = new Node(2)
root1.right = new Node(3)
root1.left.left = new Node(4)
root1.left.right = new Node(5)
root1.right.left = new Node(6)
root1.right.right = new Node(7)

root2 = new Node(2)
root2.left = new Node(4)
root2.right = new Node(5)

console.log(checkSubTree(root1, root2))


function inOrder(node, list) {
  if (node == null) return
  // left
  inOrder(node.left, list)
  // node
  list.push(node.data)
  // right
  inOrder(node.right, list)
}

function preOrder(node, list) {
  if (node == null) return
  // node
  list.push(node.data)
  // left
  preOrder(node.left, list)
  // right
  preOrder(node.right, list)
}

function listToString(list) {
  return list.toString().replace(/,/g, '')
}

function checkSubTree(tree, sub) {
  if (sub == null) return true
  if (tree == null) return false
  let first = []
  let second = []

  // inOrder
  inOrder(tree, first)
  inOrder(sub, second)
  if (!listToString(first).includes(listToString(second))) {
    return false
  }
  let firstP = []
  let secondP = []

  // preOrder
  preOrder(tree, firstP)
  preOrder(sub, secondP)
  if (!listToString(first).includes(listToString(second))) {
    return false
  }
  return true
}

