AUI().use(
  'aui-tooltip',
  function(A) {
    new A.Tooltip(
      {
        bodyContent: '<img src="http://alloyui.com/tooltip/img/cream.jpg" />',
        showArrow: false,
        trigger: '#myTooltip'
      }
    ).render();
  }
);
