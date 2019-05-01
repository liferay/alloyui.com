YUI().use(
  'aui-datepicker',
  function(Y) {
    new Y.DatePicker(
      {
        trigger: 'button',
        popover: {
          zIndex: 1
        },
        on: {
          selectionChange: function(event) {
            console.log(event.newSelection)
          }
        }
      }
    );
  }
);