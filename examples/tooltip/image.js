AUI().use(
  'aui-tooltip',
  function(A) {
    new A.Tooltip(
      {
        bodyContent: '<img src="/tooltip/img/cream.jpg" />',
        showArrow: false,
        trigger: '#myTooltip'
      }
    ).render();
  }
);