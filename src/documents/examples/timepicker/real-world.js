YUI().use(
  'aui-timepicker',
  function(Y) {
    new Y.TimePicker(
      {
        trigger: 'input',
        mask: 'Dinner at %H:%M',
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