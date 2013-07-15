AUI().use(
  'aui-tree-view',
  function(A) {
    // // Create an array object for the tree root and child nodes
    var children = [
      {
        children: [
          {
            children: [
              {
                label: 'File'
              }
            ],
            label: 'Folder1'
          },
          {
            children: [
              {
                label: 'File'
              }
            ],
            label: 'Folder2'
          }
        ],
        label: 'ROOT'
      }
    ];

    // Create a TreeView Component
    new A.TreeView(
      {
        boundingBox: '#myTreeView',
        children: children
      }
    ).render();
  }
);