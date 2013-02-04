AUI().use('aui-tree-view', function(A) {

  // Create an array object for the tree root and child nodes
  var children = [{
    label: 'Root',
    expanded: true,
    children: [
      { label: 'File X' },
      { label: 'File Y' },
      { label: 'File Z' }
    ]
  }];

  // Create a TreeView Component
  new A.TreeView({
    boundingBox: '#myTreeView',
    children: children
  }).render();

});