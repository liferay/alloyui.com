YUI().use(
  'aui-alert',
  function(Y) {
    new Y.Alert({
      closeable: true,
      render: true,
      srcNode: '#myAlert'
    });
  }
);