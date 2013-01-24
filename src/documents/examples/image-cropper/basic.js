AUI().ready('aui-image-cropper', function(A) {

  var imageNode = A.one('#image');

  imageCropper = new A.ImageCropper({
    srcNode: imageNode,
    cropHeight: 200,
    cropWidth: 200,
    x: 50,
    y: 50
  }).render();

});