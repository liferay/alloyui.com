YUI().use('aui-image-cropper', function (Y) {
  new Y.ImageCropper({
    cropHeight: 200,
    cropWidth: 200,
    srcNode: '#myImage',
    x: 50,
    y: 50
  }).render();
});