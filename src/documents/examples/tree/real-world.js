AUI().use('aui-tree-view', function(A) {

  // Define our real world example
  var RealWorldExample = {

    init: function() {
      var myTreeView = A.one('#myTreeView');

      var loadingmask = this.createLoadingMask(myTreeView);

      var treeView = this.createTreeMyView();

      treeView.on('render', function(event) {
        loadingmask.hide();
      });
    },

    createLoadingMask: function(node) {
      node.plug(A.LoadingMask);

      var loadingmask = node.loadingmask;

      loadingmask.show();

      return loadingmask;
    },
    createTreeMyView: function() {

      // Create an array object for the root node
      var root = [{
        type: 'io',
        label: 'ROOT',
        id: 'root',
        expanded: true,
        cache: true,
        io: 'assets/content.html'
      }];

      // Create an array object for temp files child nodes
      var tempFile = [{ label: 'Temp file' }];

      // Create a TreeView Component with Drag & Drop support
      var treeView = new A.TreeViewDD({
        height: '380',
        boundingBox: '#myTreeView',
        children: root
      }).render();

      // Attach button event listeners
      var ROOT = treeView.getNodeById('root');

      var createRootTempNode = function() {
        return ROOT.createNode({
          label: 'Temp folder',
          children: tempFile
        });
      };

      A.on(
        'click',
        function() {
          var tempNode = createRootTempNode();

          ROOT.appendChild(tempNode);
        },
        '#createNodeROOT'
      );

      A.on(
        'click',
        function() {
          var tempNode = createRootTempNode();

          ROOT.insertBefore(tempNode);
        },
        '#insertBeforeROOT'
      );

      A.on('click', function() { treeView.expandAll(); }, '#expandAll');
      A.on('click', function() { treeView.collapseAll(); }, '#collapseAll');

      return treeView;
    },
  };

  // Run our real world example
  RealWorldExample.init();

});