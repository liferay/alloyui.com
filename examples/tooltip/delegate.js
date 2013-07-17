YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.TooltipDelegate(
      {
        trigger: '#myTooltipDelegate li',
        position: 'right'
      }
    ).render();
  }
);