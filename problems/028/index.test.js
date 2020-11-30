const { Node, humanReadableList, swapEveryTwoNodes } = require('.');

test('List 1 -> 2 -> 3 -> 4 should equal 2 -> 1 -> 4 -> 3 after swapping every two', () => {
  const list = new Node(1, new Node(2, new Node(3, new Node(4))));
  expect(humanReadableList(swapEveryTwoNodes(list))).toEqual(
    '2 -> 1 -> 4 -> 3',
  );
});
