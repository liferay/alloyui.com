AUI().ready('aui-carousel', function(A) {

  new A.Carousel({
    contentBox: '#myCarousel',
    activeIndex: 'rand',
    intervalTime: 2,
    width: 700,
    height: 250
  }).render();

});