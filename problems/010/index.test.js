/* eslint-disable no-undef */
const { Node, inorderTraversal } = require('.');

const binaryTree = new Node(4, null, new Node(5, new Node(6)));

test('binaryTree node should equal [4, 6, 5] after inorderTraversal', () => {
  expect(inorderTraversal(binaryTree)).toEqual([4, 6, 5]);
});
