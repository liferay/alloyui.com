YUI().use(
  'aui-image-viewer',
  function(Y) {
    new Y.ImageViewer(
      {
        caption: 'Liferay Champion Soccer',
        captionFromTitle: true,
        centered: true,
        imageAnim: {
         duration: 1,
         easing: 'easeIn'
        },
        intervalTime: 2,
        links: '#myGallery a',
        playing: true,
        preloadAllImages: true,
        preloadNeighborImages: true,
        showInfo: true,
        showPlayer: true,
        zIndex: 1
      }
    ).render();
  }
);