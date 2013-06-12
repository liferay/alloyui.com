YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.TooltipDelegate(
        {
            position: 'right',
            trigger: '#delegate li'
        }
    );
  }
);