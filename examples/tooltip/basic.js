YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltip',
        position: 'right'
      }
    ).render();
  }
);