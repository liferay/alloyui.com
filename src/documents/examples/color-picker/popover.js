YUI().use(
  'aui-color-picker-popover',
  function(Y) {
    var colorPicker = new Y.ColorPickerPopover(
      {
        trigger: '#myColorPickerPopover',
        zIndex: 2
      }
    ).render();

    colorPicker.on('select',
      function(event) {
        event.trigger.setStyle('backgroundColor', event.color);
      }
    );
  }
);