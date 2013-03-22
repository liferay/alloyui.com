YUI().use('aui-carousel', function (Y) {
  new Y.Carousel({
    activeIndex: 'rand',
    contentBox: '#myCarousel',
    height: 250,
    intervalTime: 2,
    width: 700
  }).render();
});