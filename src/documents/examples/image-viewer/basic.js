AUI().ready('aui-image-viewer-base', function(A) {

  var imageViewer1 = new A.ImageViewer({
    links: '#gallery1 a',
    caption: 'Liferay Champion Soccer',
    captionFromTitle: true,
    preloadAllImages: true,
    showInfo: true,
  })
  .render();

});