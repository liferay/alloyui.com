YUI().use(
  'aui-image-viewer-base',
  function(Y) {
    new Y.ImageViewer(
      {
        anim: true,
        caption: 'Liferay Champion Soccer',
        captionFromTitle: true,
        imageAnim: {
         duration: 1,
         easing: 'easeIn'
        },
        links: '#myGallery a',
        lockScroll: true,
        preloadAllImages: true,
        showInfo: true
      }
    ).render();
  }
);