YUI().use('aui-button', function(Y) {

  new Y.Button({
    label: 'Basic',
    srcNode: '#basic',
    icon: 'aui-icon-print',
    iconAlign: 'left'
  }).render();

  new Y.ToggleButton({
    label: 'Click to toggle',
    srcNode: '#toggle'
  }).render();

  new Y.ButtonGroup({
    boundingBox: '#checkgroup',
    type: 'checkbox'
  }).render();

  new Y.ButtonGroup({
    boundingBox: '#radiogroup',
    type: 'radio'
  }).render();

});