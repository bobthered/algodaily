class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.x = 0;
    this.y = 0;
  }
}

const inorderTraversal = tree => {
  const arr = [];

  const updateNodePosition = (node, x = 0, y = 0) => {
    const val = node.val;
    const pos = +(x.toString() + y.toString());
    arr.push({ val, pos });
    node.x = x;
    node.y = y;
    if (node.left) updateNodePosition(node.left, x - 1, y + 1);
    if (node.right) updateNodePosition(node.right, x + 1, y + 1);
  };

  updateNodePosition(tree);

  return arr.sort((a, b) => (a.pos < b.pos ? -1 : 1)).map(a => a.val);
};

module.exports = { Node, inorderTraversal };
