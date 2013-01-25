AUI().ready('aui-carousel', function(A) {

  new A.Carousel({
    contentBox: '#demo',
    activeIndex: 'rand',
    intervalTime: 2,
    width: 680,
    height: 254
  }).render();

});