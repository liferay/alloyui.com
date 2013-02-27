AUI().ready(
  'aui-carousel',
  function(A) {
    new A.Carousel(
      {
        contentBox: '#myCarousel',
        height: 250,
        width: 700
      }
    ).render();
  }
);