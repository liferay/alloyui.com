AUI().ready('aui-tooltip', function(A) {

  var tooltip = new A.Tooltip({
    trigger: '#tooltip',
    bodyContent: '<object width="560" height="340"><param name="movie" value="http://www.youtube.com/v/KzorZ1CO6Vs&hl=en&fs=1&"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/KzorZ1CO6Vs&hl=en&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="560" height="340"></embed></object>',
    align: { points: [ 'bc', 'tc' ] }
  }).render();

});