AUI().use('node', 'transition', 'aui-tooltip', function (A) {

  A.one('.btn').on('click', function() {
    this.transition({ width: '400px' });
  });

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    bodyContent: '<iframe width="500" height="280" src="http://www.youtube.com/embed/KzorZ1CO6Vs" frameborder="0" allowfullscreen></iframe>'
  }).render();

});
