const getElementById = function(root, id) {
  // Your code here
  const nodes = flattenTreeToArray(root);
  const matches = _.filter(nodes, node => node.id === id);
  return matches.length > 0 ? matches[0] : null;
};

const getElementsByClassName = function(root, className) {
  // Your code here
  const nodes = flattenTreeToArray(root);
  return _.filter(nodes, node => (node.className || '').indexOf(className) !== -1);
  
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  const nodes = flattenTreeToArray(root);
  return _.filter(nodes, node => (node.tagName || '').toUpperCase() === tagName.toUpperCase());
};