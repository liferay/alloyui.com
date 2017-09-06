AUI().ready(
  'aui-tooltip',
  function(A) {
    new A.Tooltip(
      {
        bodyContent: '<img src="https://alloyui.com/tooltip/img/cream.jpg" />',
        showArrow: false,
        trigger: '#myTooltip'
      }
    ).render();
  }
);