class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const randomNode = root => {
  const nodeArray = [];
  const nodeRecursion = node => {
    nodeArray.push(node);
    if (node.next !== null) nodeRecursion(node.next);
  };
  nodeRecursion(root);
  return nodeArray[Math.floor(Math.random() * nodeArray.length)];
};

module.exports = { Node, randomNode };
