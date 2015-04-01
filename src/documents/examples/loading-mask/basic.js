AUI().use('aui-loading-mask', function(A) {

  var container = A.one('#demo');

  container.plug(A.LoadingMask);

  container.loadingmask.show();

});