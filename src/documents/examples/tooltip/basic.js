YUI().use(
  'aui-tooltip',
  function(Y) {
    new Y.Tooltip(
        {
            trigger: '#triggerTop'
        }
    ).render();
  }
);