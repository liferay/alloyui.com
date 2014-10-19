YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'How many pages do you want to print?',
        centered: true,
        destroyOnHide: false,
        headerContent: '<h3>Print</h3>',
        height: 200,
        modal: true,
        render: '#modal',
        resizable: {
          handles: 'b, r'
        },
        toolbars: {
          body: [
            {
              icon: 'glyphicon glyphicon-file',
              label: 'Single Page'
            },
            {
              icon: 'glyphicon glyphicon-book',
              label: 'All Pages'
            }
          ]
        },
        visible: true,
        width: 450
      }
    ).render();

    modal.addToolbar(
      [
        {
          label: 'Cancel',
          on: {
            click: function() {
              modal.hide();
            }
          }
        },
        {
          label: 'Okay',
          on: {
            click: function() {
              alert('Just an example, there will be no printing here.');
            }
          }
        }
      ]
    );

    Y.one('#showModal').on(
      'click',
      function() {
        modal.show();
      }
    );
  }
);