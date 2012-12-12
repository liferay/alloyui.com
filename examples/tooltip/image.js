AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    bodyContent: '<img src="http://liferay.github.com/alloyui.com/tooltip/img/cream.jpg" /><br/><div style="text-align: center;">Ice cream sandwich taste test winner</div>',
    showArrow: false
  }).render();

});
