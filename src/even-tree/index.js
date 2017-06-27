import { readLine } from 'lib/process.stdin.js'
process.stdin.on('end', main)
/////////////// ignore above this line ////////////////////

class Node {
  constructor(data) {
    this.data = data
    this.parent = null
    this.children = []
  }
}

class Tree {
  constructor(data) {
    this._root = new Node(data)
  }

  traverseDF(callback) {
    ;(function recurse(currentNode) {
      currentNode.children.forEach(item => {
        recurse(item)
      })
      callback(currentNode)
    })(this._root)
  }

  contains(callback) {
    this.traverseDF.call(this, callback)
  }

  add(data, to) {
    let parent = null
    const child = new Node(data)

    const checkParent = node => {
      if (node.data === to) {
        parent = node
      }
    }

    this.contains(checkParent)

    if (parent) {
      parent.children.push(child)
      child.parent = parent
    } else {
      throw new Error('Cannot add node, no parent found.')
    }
  }
}

function findIndex(arr, data) {
  let index
  arr.forEach((item, i) => {
    if (item.data === data) index = i
  })
  return index
}

function inArray(arr, value) {
  return [...arr].filter(item => item === value).length
}

function solve(n, m, edges) {
  let removed = 0
  let removedInNodes = []
  const tree = new Tree(1)

  edges.forEach(item => {
    tree.add(item[0], item[1])
  })

  tree.traverseDF(({ data, children, parent }) => {
    const checkRemoved = inArray(removedInNodes, data)
    const len = children.length - checkRemoved
    if (data !== tree._root.data && len) {
      if (len % 2 > 0.5) {
        removedInNodes.push(parent.data)
        removed++
      }
    }
  })

  return removed
}

function main() {
  const n_temp = readLine().split(' ')
  const n = parseInt(n_temp[0])
  const m = parseInt(n_temp[1])
  let edges = []
  for (let i = 0; i < m; i++) {
    let arr = readLine().split(' ')
    arr = arr.map(Number)
    edges.push(arr)
  }
  var result = solve(n, m, edges)
  process.stdout.write('' + result + '\n')
}
