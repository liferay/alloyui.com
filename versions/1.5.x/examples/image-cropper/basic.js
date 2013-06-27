AUI().ready(
  'aui-image-cropper',
  function(A) {
    new A.ImageCropper(
      {
        cropHeight: 200,
        cropWidth: 200,
        srcNode: "#myImage",
        x: 50,
        y: 50
      }
    ).render();
  }
);