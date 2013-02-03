AUI().ready('aui-image-cropper', function(A) {

  new A.ImageCropper({
    srcNode: "#myImage",
    cropHeight: 200,
    cropWidth: 200,
    x: 50,
    y: 50
  }).render();

});