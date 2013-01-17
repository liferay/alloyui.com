AUI().use('aui-tree-view', function(A) {

  // // Create an array object for the tree root and child nodes
  var children = [{
    label: 'ROOT',
    children: [
      {
        label: 'Folder1',
        children: [{ label: 'File' }]
      },
      {
        label: 'Folder2',
        children: [{ label: 'File' }]
      }
    ]
  }];

  // Create a TreeView Component
  var treeView = new A.TreeView({
    boundingBox: '#myTreeView',
    children: children
  }).render();

});