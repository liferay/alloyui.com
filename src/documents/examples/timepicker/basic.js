YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: 'input',
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