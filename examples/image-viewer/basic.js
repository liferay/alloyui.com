YUI().use(
  'aui-image-viewer',
  function(Y) {
    new Y.ImageViewer(
      {
        links: '#myGallery a',
        zIndex: 1
      }
    ).render();
  }
);