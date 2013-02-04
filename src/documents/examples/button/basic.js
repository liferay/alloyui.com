AUI().use('aui-button', function(A) {

  new A.Button({
    label: 'Basic',
    srcNode: '#basic',
    icon: 'aui-icon-print',
    iconAlign: 'left'
  }).render();

  new A.ToggleButton({
    label: 'Click to toggle',
    srcNode: '#toggle'
  }).render();

  new A.ButtonGroup({
    boundingBox: '#checkgroup',
    type: 'checkbox'
  }).render();

  new A.ButtonGroup({
    boundingBox: '#radiogroup',
    type: 'radio'
  }).render();

});