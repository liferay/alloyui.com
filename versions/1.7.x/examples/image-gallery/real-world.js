AUI().ready('aui-image-viewer-gallery', function(A) {

  new A.ImageGallery({
    links: '#gallery1 a',
    caption: 'Liferay Champion Soccer',
    // useOriginalImage: true,
    // showPlayer: false,
    // playingLabel: '- Playing',
    // pausedLabel: '- Paused',
    paginator: {
      // maxPageLinks: 5
    },
    maxHeight: 400,
    maxWidth: 400,
    // toolbar: {
    //  children: [
    //    {
    //      id: 'stop',
    //      icon: 'stop'
    //    }
    //  ]
    // },
    // autoPlay: true,
    // repeat: false,
    // currentIndex: 4,
    // anim: false,
    // random: true,
    delay: 2000
  }).render();

  // imageGallery1.show();
  // imageGallery1.play();
  // imageGallery1.pause();
  // imageGallery1.stop();
  // imageGallery1.destroy();

});