YUI().use(
  'aui-button',
  function(Y) {
    new Y.ButtonGroup(
      {
        boundingBox: '#myCheckgroup',
        type: 'checkbox'
      }
    ).render();

    new Y.ButtonGroup(
      {
        boundingBox: '#myRadiogroup',
        type: 'radio'
      }
    ).render();
  }
);