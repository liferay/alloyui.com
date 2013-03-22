YUI().use('aui-image-viewer-gallery', function (Y) {
  new Y.ImageGallery({
    links: '#myGallery a',
    caption: 'Liferay Champion Soccer',
    pagination: {
      total: 5
    },
    delay: 2000
  }).render();
});