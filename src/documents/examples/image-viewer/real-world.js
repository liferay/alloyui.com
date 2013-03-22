YUI().use('aui-image-viewer-base', function (Y) {
  new Y.ImageViewer({
    links: '#myGallery a',
    anim: true,
    caption: 'Liferay Champion Soccer',
    captionFromTitle: true,
    lockScroll: true,
    preloadAllImages: true,
    showInfo: true,
    imageAnim: {
      duration: 1,
      easing: 'easeIn',
    }
  }).render();
});