AUI().use(
  'aui-tooltip',
  function(A) {
    new A.Tooltip(
      {
        align: {
          points: ['bc', 'tc']
        },
        bodyContent: '<iframe width="500" height="280" src="http://www.youtube.com/embed/KzorZ1CO6Vs" frameborder="0" allowfullscreen></iframe>',
        trigger: '#myTooltip'
      }
    ).render();
  }
);
