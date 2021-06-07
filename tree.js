/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toVisitQueue = [];
    let sum = 0;
    
    toVisitQueue.push(this.root)
    while (toVisitQueue.length) {
      let removed = toVisitQueue.shift()
      sum += removed.val
      for (let i= 0; i < removed.children.length; i++) {
        toVisitQueue.push(removed.children[i])
      }
    }
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
  
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
