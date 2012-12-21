AUI().ready('aui-image-viewer-base', function(A) {

  var imageViewer = new A.ImageViewer({
    links: '#gallery a',
    caption: 'Liferay Champion Soccer',
    captionFromTitle: true,
    preloadAllImages: true
  }).render();

});