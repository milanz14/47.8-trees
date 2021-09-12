class BinaryTree {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

// give an n-ary tree of integers, return the sum of all the integers
const sumValues = (root) => {
    const sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
};

const calculateBranchSums = (node, runningSum, sums) => {
    if (!node) return;
    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
};

// count all of the nodes in the tree with even values
const countEvens = () => {
    if (!this.root) return 0;
    let count = 0;
    if (this.root.val % 2 === 0) {
        count += 1;
    }

    function countEvensHelperMethod(node) {
        for (let child of node.children) {
            if (child.val % 2 === 0) {
                count += 1;
            }

            if (child.children.length > 0) {
                countEvensHelperMethod(child);
            }
        }
    }

    countEvensHelperMethod(root);
    return count;
};

// given an n-ary tree nd a number x, find a return the number of nodes which are greater than x
const greater = (x) => {
    if (!this.root) return 0;
    let count = this.root.val > x ? 1 : 0;

    const countGreaterHelper = (node) => {
        for (let child of node.children) {
            if (child.val > x) {
                count += 1;
            }
            if (child.children.length > 0) {
                countGreaterHelper(child);
            }
        }
    };

    countGreaterHelper(root);
    return count;
};
