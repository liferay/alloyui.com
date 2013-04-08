YUI().use(
  'aui-toolbar',
  function(Y) {
    new Y.Toolbar(
      {
        boundingBox: '#myToolbar'
      }
    ).render();
  }
);