AUI().use('aui-tree-view', function(A) {

  var children =  [{
    label: 'ROOT',
    children: [{
      label: 'Folder1',
      children: [{ label: 'File' }]
    },
    {
      label: 'Folder2',
      children: [{ label: 'File' }]
    }]
  }]

  var treeView = new A.TreeView({
    boundingBox: '#myTreeView',
    children: children
  }).render();

});