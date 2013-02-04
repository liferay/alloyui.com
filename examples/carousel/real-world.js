YUI().ready('aui-carousel', function(Y) {

  new Y.Carousel({
    contentBox: '#myCarousel',
    activeIndex: 'rand',
    intervalTime: 2,
    width: 700,
    height: 250
  }).render();

});