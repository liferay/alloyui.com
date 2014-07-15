YUI().use(
  'aui-alert',
  function(Y) {
    new Y.Alert({
      bodyContent: 'This is an alert',
      cssClass: 'alert-info',
      render: true,
      srcNode: '#info'
    });
});