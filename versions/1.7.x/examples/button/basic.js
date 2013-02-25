YUI().use('aui-button', function(Y) {

  new Y.Button({
    label: 'Basic',
    srcNode: '#myButton',
    icon: 'aui-icon-print',
    iconAlign: 'left'
  }).render();

  new Y.ToggleButton({
    label: 'Click to toggle',
    srcNode: '#myToggleButton'
  }).render();

});