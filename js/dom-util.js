const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  node.childNodes.forEach(el=> visitAllNodes(el, callback)); 
  callback(node);
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  let res = [];
  visitAllNodes(node, child => res.push(child));
  return res;
};