AUI().ready('aui-image-viewer-base', function(A) {

  new A.ImageViewer({
    links: '#myGallery a',
    caption: 'Liferay Champion Soccer',
    captionFromTitle: true,
    preloadAllImages: true
  }).render();

});