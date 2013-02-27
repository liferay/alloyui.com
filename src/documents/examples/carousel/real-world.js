AUI().ready(
  'aui-carousel',
  function(A) {
    new A.Carousel(
      {
        activeIndex: 'rand',
        contentBox: '#myCarousel',
        height: 250,
        intervalTime: 2,
        width: 700
      }
    ).render();
  }
);