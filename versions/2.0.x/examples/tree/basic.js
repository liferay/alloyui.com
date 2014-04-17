YUI().use(
  'aui-tree-view',
  function(Y) {
    // Create an array object for the tree root and child nodes
    var children = [
      {
        children: [
          {
            label: 'File X'
          },
          {
            label: 'File Y'
          },
          {
            label: 'File Z'
          }
        ],
        expanded: true,
        label: 'Root'
      }
    ];

    // Create a TreeView Component
    new Y.TreeView(
      {
        boundingBox: '#myTreeView',
        children: children
      }
    ).render();
  }
);