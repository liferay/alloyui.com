AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    bodyContent: '<img src="assets/img/cream.jpg" /><br/><div style="text-align: center;">Ice cream sandwich taste test winner</div>',
    showArrow: false
  }).render();

});