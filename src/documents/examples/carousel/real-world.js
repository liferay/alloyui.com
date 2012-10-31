AUI().ready('aui-carousel', function(A) {

  var carousel = new A.Carousel({
      contentBox: '#demo',
      width: 680,
      height: 254,
      activeIndex: 'rand',
      intervalTime: 2,
      // nodeMenu: '#customMenu',
      // nodeMenuItemSelector: 'li'
  }).render();

});