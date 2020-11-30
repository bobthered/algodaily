class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const humanReadableList = root => {
  const arr = [];
  const listRecursion = node => {
    arr.push(node.value);
    if (node.next !== null) listRecursion(node.next);
  };
  listRecursion(root);
  return arr.join(' -> ');
};
const swapEveryTwoNodes = root => {
  const listRecursion = node => {
    const parent = node.value;
    const child = node.next.value;
    node.value = child;
    node.next.value = parent;
    if (node.next.next !== null) node.next.next = listRecursion(node.next.next);
    return node;
  };
  return listRecursion(root);
};

module.exports = { Node, humanReadableList, swapEveryTwoNodes };
