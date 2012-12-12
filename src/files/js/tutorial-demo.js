AUI().use('node', 'transition', 'aui-tooltip', function (A) {

  A.one('.btn').on('click', function() {
    this.transition({ height: 0, padding: 0 });
  });

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    bodyContent: '<object width="560" height="340"><param name="movie" value="http://www.youtube.com/v/KzorZ1CO6Vs&hl=en&fs=1&"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/KzorZ1CO6Vs&hl=en&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="560" height="340"></embed></object>'
  }).render();

});
