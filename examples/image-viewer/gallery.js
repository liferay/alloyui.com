YUI().use(
  'aui-image-viewer-gallery',
  function(Y) {
    new Y.ImageGallery(
      {
        caption: 'Liferay Champion Soccer',
        delay: 2000,
        links: '#myGallery a',
        pagination: {
          total: 5
        }
      }
    ).render();
  }
);