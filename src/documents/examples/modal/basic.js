YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'Modal body',
        centered: true,
        headerContent: '<h3>Modal header</h3>',
        modal: true,
        render: '#modal',
        width: 450
      }
    ).render();
  }
);