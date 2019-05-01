YUI().use(
  'aui-button',
  function(Y) {
    new Y.Button(
      {
        icon: 'icon-print',
        iconAlign: 'left',
        label: 'Basic',
        srcNode: '#myButton'
      }
    ).render();

    new Y.ToggleButton(
      {
        label: 'Click to toggle',
        srcNode: '#myToggleButton'
      }
    ).render();
  }
);