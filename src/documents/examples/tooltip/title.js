AUI().ready(
  'aui-tooltip',
  function(A) {
    new A.Tooltip(
      {
        title: true,
        trigger: '#myTooltip'
      }
    ).render();
  }
);