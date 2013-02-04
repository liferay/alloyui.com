YUI().use('aui-image-cropper', function(Y) {

  new Y.ImageCropper({
    srcNode: "#myImage",
    cropHeight: 200,
    cropWidth: 200,
    x: 50,
    y: 50
  }).render();

});