AUI().use(
  'aui-image-viewer-base',
  function(A) {
    new A.ImageViewer(
      {
        caption: 'Liferay Champion Soccer',
        captionFromTitle: true,
        links: '#myGallery a',
        preloadAllImages: true
      }
    ).render();
  }
);