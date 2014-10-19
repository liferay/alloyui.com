YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
      {
        trigger: '#myTooltipHelp',
        position: 'right',
        cssClass: 'tooltip-help',
        opacity: 1
      }
    ).render();
  }
);