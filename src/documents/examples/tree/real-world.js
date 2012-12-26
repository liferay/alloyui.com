AUI().use('aui-tree-view', function(A) {
  // Create TreeView
  var cacheChildren = [{
    type: 'io',
    label: 'ROOT',
    id: 'root',
    expanded: true,
    cache: true,
    io: 'assets/content.html'
  }]

  var treeView = new A.TreeViewDD({
    height: '380',
    boundingBox: '#myTreeView',
    children: cacheChildren
  }).render();

  // Button Event Assignment
  var ROOT = treeView.getNodeById('root');

  A.on('click', function() {
    var tempNode = ROOT.createNode({
      label: 'Temp folder',
      children: [{ label: 'Temp file' }]
    });

    ROOT.appendChild(tempNode);
  }, '#createNodeROOT');

  A.on('click', function() {
    var tempNode = ROOT.createNode({
      label: 'Temp folder',
      children: [{ label: 'Temp file' }]
    });

    ROOT.insertBefore(tempNode);
  }, '#insertBeforeROOT');

  A.on('click', function() { treeView.expandAll(); }, '#expandAll');
  A.on('click', function() { treeView.collapseAll(); }, '#collapseAll');
});