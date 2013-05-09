YUI().use(
  'aui-modal',
  function(Y) {
    var modal = new Y.Modal(
      {
        bodyContent: 'Modal body',
        centered: true,
        destroyOnHide: false,
        headerContent: '<h3>Modal header</h3>',
        height: 200,
        modal: true,
        render: '#modal',
        resizable: {
          handles: 'b, r'
        },
        toolbars: {
          body: [
            {
              icon: 'aui-icon-file',
              label: 'Body Toolbar'
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
              alert('This tool bar was added after modal was rendered!');
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