YUI().use('aui-image-viewer-base', function (Y) {
  new Y.ImageViewer({
    links: '#myGallery a'
  }).render();
});