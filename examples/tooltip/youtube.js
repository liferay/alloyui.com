AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    align: { points: [ 'bc', 'tc' ] },
    bodyContent: '<iframe width="500" height="280" src="http://www.youtube.com/embed/KzorZ1CO6Vs" frameborder="0" allowfullscreen></iframe>'
  }).render();

});
