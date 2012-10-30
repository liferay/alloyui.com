AUI().ready('aui-carousel', function(A) {

  var carousel = new A.Carousel({
      intervalTime: 2,
      contentBox: '#demo',
      activeIndex: 0,
      // activeIndex: 'rand',
      height: 254,
      width: 680
      // nodeMenu: '#customMenu',
      // nodeMenuItemSelector: 'li'
  }).render();

});